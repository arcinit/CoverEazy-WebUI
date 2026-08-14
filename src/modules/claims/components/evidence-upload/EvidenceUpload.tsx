import React, { useState, useRef, useCallback, type ChangeEvent, type DragEvent } from "react";
import {
    FiCamera,
    FiCheck,
    FiUploadCloud,
    FiArrowLeft,
    FiArrowRight,
    FiFile,
    FiX,
} from "react-icons/fi";
import "./EvidenceUpload.scss";

// ---------------------------------------------------------
// Types
// ---------------------------------------------------------

/** Ids for the 6 fixed vehicle-photo slots */
export type PhotoSlotId =
    | "frontView"
    | "rearView"
    | "driverSide"
    | "passengerSide"
    | "interior"
    | "dashboard";

/** Static config for a photo slot (label shown in the grid) */
export interface PhotoSlotConfig {
    id: PhotoSlotId;
    label: string;
    hint: string;
}

/** Ids for every zone in the body damage map */
export type DamageAreaId =
    | "frontBumper"
    | "lFrontFender"
    | "hood"
    | "rFrontFender"
    | "windscreen"
    | "lDoor"
    | "roof"
    | "rDoor"
    | "rearGlass"
    | "lRearFender"
    | "boot"
    | "rRearFender"
    | "rearBumper";

/** Static config for a single damage-map button */
export interface DamageAreaConfig {
    id: DamageAreaId;
    label: string;
}

/** A row in the damage map grid (1 or 3 buttons wide) */
export type DamageAreaRow = DamageAreaConfig[];

/** Metadata kept for every uploaded file (slot photo or extra evidence file) */
export interface UploadedFileInfo {
    name: string;
    size: number;
    /** base64 data URL for images, null for non-image files (e.g. PDFs) */
    url: string | null;
}

/** photos[slotId] is null until a file has been chosen for that slot */
export type PhotoMap = Record<PhotoSlotId, UploadedFileInfo | null>;

/** Payload handed back to the parent when "Continue" is pressed */
export interface EvidenceUploadResult {
    photos: PhotoMap;
    damagedAreas: DamageAreaId[];
    extraFiles: UploadedFileInfo[];
}

export interface EvidenceUploadProps {
    onBack?: () => void;
    onContinue?: (result: EvidenceUploadResult) => void;
}

// ---------------------------------------------------------
// Static config
// ---------------------------------------------------------

const PHOTO_SLOTS: PhotoSlotConfig[] = [
    { id: "frontView", label: "Front View", hint: "Hood, bumper, grille" },
    { id: "rearView", label: "Rear View", hint: "Boot, bumper, lights" },
    { id: "driverSide", label: "Driver Side", hint: "Left doors, fenders" },
    { id: "passengerSide", label: "Passenger Side", hint: "Right doors, fenders" },
    { id: "interior", label: "Interior", hint: "Cabin damage if any" },
    { id: "dashboard", label: "Dashboard / ODO", hint: "Mileage & dashboard" },
];

const DAMAGE_AREAS: DamageAreaRow[] = [
    [{ id: "frontBumper", label: "Front Bumper" }],
    [
        { id: "lFrontFender", label: "L. Front Fender" },
        { id: "hood", label: "Hood" },
        { id: "rFrontFender", label: "R. Front Fender" },
    ],
    [{ id: "windscreen", label: "Windscreen" }],
    [
        { id: "lDoor", label: "L. Door" },
        { id: "roof", label: "Roof" },
        { id: "rDoor", label: "R. Door" },
    ],
    [{ id: "rearGlass", label: "Rear Glass" }],
    [
        { id: "lRearFender", label: "L. Rear Fender" },
        { id: "boot", label: "Boot" },
        { id: "rRearFender", label: "R. Rear Fender" },
    ],
    [{ id: "rearBumper", label: "Rear Bumper" }],
];

const ACCEPTED_TYPES: string[] = ["image/png", "image/jpeg", "application/pdf"];
const MAX_SIZE_MB = 10;

// ---------------------------------------------------------
// Component
// ---------------------------------------------------------

export default function EvidenceUpload({ onBack, onContinue }: EvidenceUploadProps) {
    const [photos, setPhotos] = useState<PhotoMap>(() =>
        PHOTO_SLOTS.reduce((acc, slot) => {
            acc[slot.id] = null;
            return acc;
        }, {} as PhotoMap)
    );

    const [damagedAreas, setDamagedAreas] = useState<Set<DamageAreaId>>(() => new Set());
    const [extraFiles, setExtraFiles] = useState<UploadedFileInfo[]>([]);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const slotInputRef = useRef<HTMLInputElement | null>(null);
    const activeSlotId = useRef<PhotoSlotId | null>(null);
    const browseInputRef = useRef<HTMLInputElement | null>(null);
    const dragCounter = useRef<number>(0);

    const uploadedCount = Object.values(photos).filter(Boolean).length;
    const totalSlots = 1;
    const canContinue = uploadedCount === totalSlots;

    const validateFile = (file: File): string | null => {
        if (!ACCEPTED_TYPES.includes(file.type)) {
            return "Only PNG, JPG or PDF files are allowed.";
        }
        if (file.size > MAX_SIZE_MB * 1024 * 1024) {
            return `Files must be under ${MAX_SIZE_MB}MB.`;
        }
        return null;
    };

    const readFile = (file: File): Promise<UploadedFileInfo> =>
        new Promise((resolve) => {
            const info: UploadedFileInfo = { name: file.name, size: file.size, url: null };
            if (file.type.startsWith("image/")) {
                const reader = new FileReader();
                reader.onload = () => resolve({ ...info, url: reader.result as string });
                reader.onerror = () => resolve(info);
                reader.readAsDataURL(file);
            } else {
                resolve(info);
            }
        });

    // ---- Vehicle photo slot handlers ----
    const openSlotPicker = (slotId: PhotoSlotId): void => {
        activeSlotId.current = slotId;
        slotInputRef.current?.click();
    };

    const handleSlotFileChange = async (e: ChangeEvent<HTMLInputElement>): Promise<void> => {
        const file = e.target.files?.[0];
        const slotId = activeSlotId.current;
        e.target.value = ""; // allow re-selecting the same file
        if (!file || !slotId) return;

        const validationError = validateFile(file);
        if (validationError) {
            setError(validationError);
            return;
        }
        setError("");
        const info = await readFile(file);
        setPhotos((prev) => ({ ...prev, [slotId]: info }));
    };

    const removePhoto = (slotId: PhotoSlotId, e: React.MouseEvent<HTMLSpanElement>): void => {
        e.stopPropagation();
        setPhotos((prev) => ({ ...prev, [slotId]: null }));
    };

    // ---- Damage map handlers ----
    const toggleArea = (areaId: DamageAreaId): void => {
        setDamagedAreas((prev) => {
            const next = new Set(prev);
            if (next.has(areaId)) {
                next.delete(areaId);
            } else {
                next.add(areaId);
            }
            return next;
        });
    };

    // ---- Drag & drop / browse for general evidence files ----
    const addExtraFiles = useCallback(async (fileList: FileList): Promise<void> => {
        const files = Array.from(fileList);
        const valid: UploadedFileInfo[] = [];
        let firstError = "";

        for (const file of files) {
            const validationError = validateFile(file);
            if (validationError) {
                firstError = firstError || validationError;
                continue;
            }
            valid.push(await readFile(file));
        }

        if (firstError) setError(firstError);
        else setError("");

        if (valid.length) {
            setExtraFiles((prev) => [...prev, ...valid]);
        }
    }, []);

    const handleBrowseChange = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.files?.length) addExtraFiles(e.target.files);
        e.target.value = "";
    };

    const handleDragEnter = (e: DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
        dragCounter.current += 1;
        setIsDragging(true);
    };

    const handleDragLeave = (e: DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
        dragCounter.current -= 1;
        if (dragCounter.current <= 0) {
            dragCounter.current = 0;
            setIsDragging(false);
        }
    };

    const handleDragOver = (e: DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
        dragCounter.current = 0;
        setIsDragging(false);
        if (e.dataTransfer.files?.length) addExtraFiles(e.dataTransfer.files);
    };

    const removeExtraFile = (index: number): void => {
        setExtraFiles((prev) => prev.filter((_, i) => i !== index));
    };

    const handleContinueClick = (): void => {
        onContinue?.({
            photos,
            damagedAreas: Array.from(damagedAreas),
            extraFiles,
        });
    };

    return (
        <div className="evidence-upload">
            <header className="evidence-upload__header">
                <h1 className="evidence-upload__title">
                    Evidence <span className="evidence-upload__title--accent">Upload</span>
                </h1>
                <p className="evidence-upload__subtitle">
                    Upload all supporting documents. Clear, high-resolution files speed up approval.
                </p>
            </header>

            {error && (
                <div className="evidence-upload__alert" role="alert">
                    {error}
                </div>
            )}

            <div className="evidence-upload__panels">
                {/* Vehicle Photos panel */}
                <section className="evidence-upload__panel">
                    <div className="evidence-upload__panel-head">
                        <h2 className="evidence-upload__panel-title">Vehicle Photos</h2>
                        <span className="evidence-upload__panel-meta">
                            {uploadedCount}/{totalSlots} uploaded
                        </span>
                    </div>

                    <div className="evidence-upload__photo-grid">
                        {PHOTO_SLOTS.map((slot) => {
                            const uploaded = photos[slot.id];
                            return (
                                <button
                                    type="button"
                                    key={slot.id}
                                    className={
                                        "evidence-upload__photo-slot" +
                                        (uploaded ? " evidence-upload__photo-slot--uploaded" : "")
                                    }
                                    onClick={() => openSlotPicker(slot.id)}
                                >
                                    {uploaded && (
                                        <span
                                            className="evidence-upload__photo-remove"
                                            onClick={(e) => removePhoto(slot.id, e)}
                                            title="Remove photo"
                                        >
                                            <FiX />
                                        </span>
                                    )}

                                    <span className="evidence-upload__photo-icon">
                                        {uploaded ? <FiCheck /> : <FiCamera />}
                                    </span>
                                    <span className="evidence-upload__photo-label">{slot.label}</span>
                                    <span className="evidence-upload__photo-hint">
                                        {uploaded ? uploaded.name : slot.hint}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </section>

                {/* Body Damage Map panel */}
                <section className="evidence-upload__panel">
                    <div className="evidence-upload__panel-head">
                        <h2 className="evidence-upload__panel-title">Body Damage Map</h2>
                        <span className="evidence-upload__panel-meta">
                            {damagedAreas.size} area{damagedAreas.size === 1 ? "" : "s"} selected
                        </span>
                    </div>

                    <p className="evidence-upload__panel-instruction">
                        Tap on the damaged areas of your vehicle.
                    </p>

                    <div className="evidence-upload__damage-map">
                        {DAMAGE_AREAS.map((row, i) => (
                            <div className="evidence-upload__damage-row" key={i}>
                                {row.map((area) => (
                                    <button
                                        type="button"
                                        key={area.id}
                                        className={
                                            "evidence-upload__area-btn" +
                                            (damagedAreas.has(area.id)
                                                ? " evidence-upload__area-btn--selected"
                                                : "")
                                        }
                                        onClick={() => toggleArea(area.id)}
                                    >
                                        {area.label}
                                    </button>
                                ))}
                            </div>
                        ))}
                    </div>

                    <p className="evidence-upload__legend">
                        <span className="evidence-upload__legend-dot" /> Orange = marked as damaged
                        &nbsp;&middot;&nbsp; Click to toggle
                    </p>
                </section>
            </div>

            {/* Generic drag & drop zone */}
            <div
                className={
                    "evidence-upload__dropzone" +
                    (isDragging ? " evidence-upload__dropzone--active" : "")
                }
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                <span className="evidence-upload__dropzone-icon">
                    <FiUploadCloud />
                </span>
                <p className="evidence-upload__dropzone-title">Drag &amp; Drop Files Here</p>
                <p className="evidence-upload__dropzone-hint">PNG, JPG, PDF up to {MAX_SIZE_MB}MB each</p>
                <button
                    type="button"
                    className="evidence-upload__browse-btn"
                    onClick={() => browseInputRef.current?.click()}
                >
                    Browse Files
                </button>

                {extraFiles.length > 0 && (
                    <ul className="evidence-upload__file-list">
                        {extraFiles.map((file, i) => (
                            <li className="evidence-upload__file-item" key={`${file.name}-${i}`}>
                                <FiFile className="evidence-upload__file-icon" />
                                <span className="evidence-upload__file-name">{file.name}</span>
                                <button
                                    type="button"
                                    className="evidence-upload__file-remove"
                                    onClick={() => removeExtraFile(i)}
                                    aria-label={`Remove ${file.name}`}
                                >
                                    <FiX />
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <footer className="evidence-upload__footer">
                <button
                    type="button"
                    className="evidence-upload__btn evidence-upload__btn--ghost"
                    onClick={onBack}
                >
                    <FiArrowLeft /> Back
                </button>
                <button
                    type="button"
                    className="evidence-upload__btn evidence-upload__btn--primary"
                    disabled={!canContinue}
                    onClick={handleContinueClick}
                >
                    Continue <FiArrowRight />
                </button>
            </footer>

            {/* Hidden inputs */}
            <input
                ref={slotInputRef}
                type="file"
                accept={ACCEPTED_TYPES.join(",")}
                className="evidence-upload__hidden-input"
                onChange={handleSlotFileChange}
            />
            <input
                ref={browseInputRef}
                type="file"
                multiple
                accept={ACCEPTED_TYPES.join(",")}
                className="evidence-upload__hidden-input"
                onChange={handleBrowseChange}
            />
        </div>
    );
}