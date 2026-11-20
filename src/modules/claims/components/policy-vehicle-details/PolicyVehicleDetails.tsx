import React, { useState } from 'react';
import {
    FiSearch,
    FiUser,
    FiInfo,
    FiAlertCircle,
    FiChevronUp,
    FiChevronDown,
    FiCalendar,
    FiClock,
    FiMapPin,
    FiFileText,
    FiNavigation,
    FiArrowLeft,
    FiArrowRight,
    FiPlus,
    FiEdit2,
    FiTrash2,
} from 'react-icons/fi';
import { BsCheckCircleFill, BsCircle } from 'react-icons/bs';
import { PiCarProfileFill } from 'react-icons/pi';
import './PolicyVehicleDetails.scss';
import vehicleImage from "./images/vehicle.png"
import { MdOutlineShield } from 'react-icons/md';

/* ========================================================================
 * Shared primitives
 * ===================================================================== */

interface CollapsibleCardProps {
    icon: React.ReactNode;
    iconVariant?: 'blue' | 'green' | 'amber';
    title: string;
    subtitle?: string;
    defaultOpen?: boolean;
    children: React.ReactNode;
}

const CollapsibleCard: React.FC<CollapsibleCardProps> = ({
    icon,
    iconVariant = 'blue',
    title,
    subtitle,
    defaultOpen = true,
    children,
}) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <section className="collapsible-card">
            <button
                type="button"
                className="collapsible-card__header"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-expanded={isOpen}
            >
                <span className={`collapsible-card__icon collapsible-card__icon--${iconVariant}`}>
                    {icon}
                </span>

                <span className="collapsible-card__heading">
                    <span className="collapsible-card__title">{title}</span>
                    {subtitle && <span className="collapsible-card__subtitle">{subtitle}</span>}
                </span>

                <span className="collapsible-card__chevron" aria-hidden="true">
                    {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                </span>
            </button>

            {isOpen && <div className="collapsible-card__body">{children}</div>}
        </section>
    );
};

interface FormFieldProps {
    label?: string;
    required?: boolean;
    labelSuffix?: string;
    labelEnd?: string;
    helper?: string;
    className?: string;
    children: React.ReactNode;
}

const FormField: React.FC<FormFieldProps> = ({
    label,
    required,
    labelSuffix,
    labelEnd,
    helper,
    children,
    className = '',
}) => {
    return (
        <div className={`form-field ${className}`.trim()}>
            {label && (
                <div className="form-field__label-row">
                    <label className="form-field__label">
                        {label}
                        {required && <span className="form-field__required">*</span>}
                        {labelSuffix && <span className="form-field__label-suffix">{labelSuffix}</span>}
                    </label>
                    {labelEnd && <span className="form-field__label-end">{labelEnd}</span>}
                </div>
            )}
            {children}
            {helper && <span className="form-field__helper">{helper}</span>}
        </div>
    );
};

/* ========================================================================
 * Section: Search Policy
 * ===================================================================== */

const VEHICLE_DETAILS = [
    { label: 'Cubic Capacity', value: '1000 CC' },
    { label: 'Variant', value: 'Camry ZXi' },
    { label: 'Transmission Type', value: 'Automatic' },
];

const POLICY_DETAILS = [
    { label: 'Coverage', value: 'Comprehensive' },
    { label: 'Sum Insured', value: 'RM 85,000' },
    { label: 'Expiry', value: 'Dec 2026' },
];

const SearchPolicyCard: React.FC = () => {
    const [query, setQuery] = useState('WXD 1234');

    return (
        <CollapsibleCard
            icon={<FiSearch />}
            iconVariant="amber"
            title="Search Policy"
            subtitle="Locate your policy by vehicle plate or policy number."
        >
            <div className="search-policy">
                <form className="search-policy__bar" onSubmit={(e) => e.preventDefault()}>
                    <div className="search-policy__input-shell">
                        <FiSearch className="search-policy__input-icon" aria-hidden="true" />
                        <input
                            type="text"
                            className="search-policy__input"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Enter vehicle plate or policy number"
                        />
                    </div>

                    <button type="submit" className="search-policy__submit">
                        <FiSearch aria-hidden="true" />
                        <span>Search</span>
                    </button>
                </form>

                <div className="search-policy__results">
                    <article className="search-policy__result-card">
                        <div className="search-policy__result-header">
                            <div className="search-policy__vehicle-thumb">
                                <img src={vehicleImage} alt="vehicle" />
                            </div>

                            <div className="search-policy__result-heading">
                                <span className="search-policy__eyebrow">Insured Vehicle</span>
                                <h3 className="search-policy__result-title">WXD 1234</h3>
                                <p className="search-policy__result-caption">
                                    Toyota Camry 2.5V &middot; 2022 &middot; Pearl White
                                </p>
                            </div>

                            <span className="search-policy__badge search-policy__badge--verified">
                                <BsCheckCircleFill aria-hidden="true" />
                                Verified
                            </span>
                        </div>

                        <dl className="search-policy__detail-grid">
                            {VEHICLE_DETAILS.map((item) => (
                                <div className="search-policy__detail-item" key={item.label}>
                                    <dt>{item.label}</dt>
                                    <dd>{item.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </article>

                    <article className="search-policy__result-card">
                        <div className="search-policy__result-header">
                            <div className="search-policy__result-heading search-policy__result-heading--grow">
                                <span className="search-policy__eyebrow">Insurance Provider</span>
                                <h3 className="search-policy__result-title">Etiqa Takaful Berhad</h3>
                                <p className="search-policy__result-caption">MOTO-88721</p>
                            </div>

                            <span className="search-policy__badge search-policy__badge--active">
                                <BsCheckCircleFill aria-hidden="true" />
                                Active
                            </span>

                            <span className="search-policy__logo">etiqa</span>
                        </div>

                        <dl className="search-policy__detail-grid">
                            {POLICY_DETAILS.map((item) => (
                                <div className="search-policy__detail-item" key={item.label}>
                                    <dt>{item.label}</dt>
                                    <dd>{item.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </article>
                </div>
            </div>
        </CollapsibleCard>
    );
};

/* ========================================================================
 * Section: Driver Details (dynamic — Vehicle Owner vs Driving Other Vehicle)
 * ===================================================================== */

type DriverOption = 'owner' | 'other';

const DRIVER_OPTIONS: { id: DriverOption; label: string }[] = [
    { id: 'owner', label: 'Vehicle Owner' },
    { id: 'other', label: 'Driving Other Vehicle' },
];

interface EmergencyContact {
    id: string;
    name: string;
    relation: string;
    phone: string;
}

const INITIAL_CONTACTS: EmergencyContact[] = [
    { id: 'c1', name: 'Tan Mei Ling', relation: 'Spouse', phone: '+61 12-22-4411' },
    { id: 'c2', name: 'Ismail', relation: 'Father', phone: '+61 12-22-4411' },
];

// Owner-mode fields: read-only, auto-filled from the matched policy.
const OwnerFields: React.FC = () => (
    <div className="driver-details__fields">
        <FormField label="Owner Name" required labelSuffix="(auto-filled)">
            <div className="driver-details__readonly-input">
                <FiUser className="driver-details__readonly-icon" aria-hidden="true" />
                <span>Ahmad Rizal bin Ismail</span>
            </div>
        </FormField>

        <FormField label="Owner IC Number" required labelSuffix="(auto-filled)">
            <div className="driver-details__readonly-input">
                <span>850315-10-XXXX</span>
            </div>
        </FormField>
    </div>
);

// Other-driver-mode fields: editable identity + address form.
interface OtherDriverFormState {
    name: string;
    identificationType: string;
    identificationNumber: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zipcode: string;
    country: string;
}

const OtherDriverFields: React.FC<{
    form: OtherDriverFormState;
    onChange: (field: keyof OtherDriverFormState, value: string) => void;
}> = ({ form, onChange }) => (
    <div className="driver-form">
        <div className="driver-form__row">
            <FormField label="Name" required>
                <div className="driver-form__input">
                    <FiUser className="driver-form__icon" aria-hidden="true" />
                    <input
                        type="text"
                        value={form.name}
                        onChange={(e) => onChange('name', e.target.value)}
                        placeholder="Enter full name"
                    />
                </div>
            </FormField>

            <FormField label="Identification Type" required>
                <div className="driver-form__select">
                    <span className="driver-form__select-value">
                        {form.identificationType || 'Select Identification Type'}
                    </span>
                    <FiChevronDown aria-hidden="true" />
                </div>
            </FormField>

            <FormField label="Identification Number" required>
                <div className="driver-form__input">
                    <input
                        type="text"
                        value={form.identificationNumber}
                        onChange={(e) => onChange('identificationNumber', e.target.value)}
                        placeholder="e.g. 850315-10-XXXX"
                    />
                </div>
            </FormField>
        </div>

        <div className="driver-form__row">
            <FormField label="Address 1" required>
                <div className="driver-form__input">
                    <input
                        type="text"
                        value={form.address1}
                        onChange={(e) => onChange('address1', e.target.value)}
                        placeholder="Enter address"
                    />
                </div>
            </FormField>

            <FormField label="Address 2">
                <div className="driver-form__input">
                    <input
                        type="text"
                        value={form.address2}
                        onChange={(e) => onChange('address2', e.target.value)}
                        placeholder="Enter address"
                    />
                </div>
            </FormField>

            <FormField label="City" required>
                <div className="driver-form__input">
                    <input
                        type="text"
                        value={form.city}
                        onChange={(e) => onChange('city', e.target.value)}
                        placeholder="Enter city"
                    />
                </div>
            </FormField>
        </div>

        <div className="driver-form__row">
            <FormField label="State" required>
                <div className="driver-form__select">
                    <span className="driver-form__select-value">{form.state || 'Select State'}</span>
                    <FiChevronDown aria-hidden="true" />
                </div>
            </FormField>

            <FormField label="Zipcode" required>
                <div className="driver-form__input">
                    <input
                        type="text"
                        value={form.zipcode}
                        onChange={(e) => onChange('zipcode', e.target.value)}
                        placeholder="Zipcode"
                    />
                </div>
            </FormField>

            <FormField label="Country">
                <div className="driver-form__select">
                    <span className="driver-form__country">
                        <img
                            src="https://flagcdn.com/w40/my.png"
                            alt=""
                            aria-hidden="true"
                        />
                        <span className="driver-form__select-value">{form.country}</span>
                    </span>
                    <FiChevronDown aria-hidden="true" />
                </div>
            </FormField>
        </div>
    </div>
);

// Emergency contact picker — only relevant when driving someone else's vehicle.
const EmergencyContactSection: React.FC<{
    contacts: EmergencyContact[];
    selectedId: string | null;
    onSelect: (id: string) => void;
    onAdd: () => void;
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
}> = ({ contacts, selectedId, onSelect, onAdd, onEdit, onDelete }) => (
    <div className="emergency-contact">
        <div className="emergency-contact__header">
            <div className="emergency-contact__heading">
                <span className="emergency-contact__icon">
                    <FiUser aria-hidden="true" />
                </span>
                <span className="emergency-contact__heading-text">
                    <span className="emergency-contact__title">Emergency Contact</span>
                    <span className="emergency-contact__subtitle">
                        Select an existing contact or add a new one.
                    </span>
                </span>
            </div>

            <button type="button" className="emergency-contact__add-btn" onClick={onAdd}>
                <FiPlus aria-hidden="true" />
                <span>Add Contact</span>
            </button>
        </div>

        <div className="emergency-contact__list">
            {contacts.map((contact) => {
                const isSelected = contact.id === selectedId;
                return (
                    <div
                        key={contact.id}
                        role="button"
                        tabIndex={0}
                        className={`emergency-contact__card ${isSelected ? 'emergency-contact__card--selected' : ''
                            }`}
                        onClick={() => onSelect(contact.id)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') onSelect(contact.id);
                        }}
                    >
                        <div className="emergency-contact__card-info">
                            <span className="emergency-contact__card-name">{contact.name}</span>
                            <span className="emergency-contact__card-meta">
                                {contact.relation} &middot; {contact.phone}
                            </span>
                        </div>

                        <div className="emergency-contact__card-actions">
                            <button
                                type="button"
                                className="emergency-contact__card-action"
                                aria-label={`Edit ${contact.name}`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onEdit(contact.id);
                                }}
                            >
                                <FiEdit2 aria-hidden="true" />
                            </button>
                            <button
                                type="button"
                                className="emergency-contact__card-action emergency-contact__card-action--danger"
                                aria-label={`Delete ${contact.name}`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onDelete(contact.id);
                                }}
                            >
                                <FiTrash2 aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
);

const DriverDetailsCard: React.FC = () => {
    const [selectedDriver, setSelectedDriver] = useState<DriverOption>('owner');

    const [otherDriverForm, setOtherDriverForm] = useState<OtherDriverFormState>({
        name: 'Ahmad Rizal bin Ismail',
        identificationType: '',
        identificationNumber: '850315-10-XXXX',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zipcode: '',
        country: 'Malaysia',
    });

    const [contacts, setContacts] = useState<EmergencyContact[]>(INITIAL_CONTACTS);
    const [selectedContactId, setSelectedContactId] = useState<string | null>('c1');

    const handleOtherDriverChange = (field: keyof OtherDriverFormState, value: string) => {
        setOtherDriverForm((prev) => ({ ...prev, [field]: value }));
    };

    const handleAddContact = () => {
        const name = window.prompt('Contact name?');
        if (!name) return;
        const relation = window.prompt('Relation? (e.g. Spouse, Father, Friend)') || 'Contact';
        const phone = window.prompt('Phone number?') || '';
        const newContact: EmergencyContact = {
            id: `c${Date.now()}`,
            name,
            relation,
            phone,
        };
        setContacts((prev) => [...prev, newContact]);
        setSelectedContactId(newContact.id);
    };

    const handleEditContact = (id: string) => {
        setContacts((prev) =>
            prev.map((c) => {
                if (c.id !== id) return c;
                const name = window.prompt('Contact name?', c.name) || c.name;
                const relation = window.prompt('Relation?', c.relation) || c.relation;
                const phone = window.prompt('Phone number?', c.phone) || c.phone;
                return { ...c, name, relation, phone };
            })
        );
    };

    const handleDeleteContact = (id: string) => {
        setContacts((prev) => prev.filter((c) => c.id !== id));
        setSelectedContactId((prev) => (prev === id ? null : prev));
    };

    return (
        <CollapsibleCard
            icon={<FiUser />}
            iconVariant="green"
            title="Driver Details"
            subtitle="Who was driving the vehicle at the time of the incident?"
        >
            <div className="driver-details">
                <div className="driver-details__toggle-group" role="radiogroup">
                    {DRIVER_OPTIONS.map((option) => {
                        const isSelected = selectedDriver === option.id;
                        return (
                            <button
                                key={option.id}
                                type="button"
                                role="radio"
                                aria-checked={isSelected}
                                className={`driver-details__toggle ${isSelected ? 'driver-details__toggle--selected' : ''
                                    }`}
                                onClick={() => setSelectedDriver(option.id)}
                            >
                                {isSelected ? (
                                    <BsCheckCircleFill className="driver-details__toggle-icon" />
                                ) : (
                                    <BsCircle className="driver-details__toggle-icon driver-details__toggle-icon--muted" />
                                )}
                                <span>{option.label}</span>
                            </button>
                        );
                    })}
                </div>

                {selectedDriver === 'owner' ? (
                    <OwnerFields />
                ) : (
                    <OtherDriverFields form={otherDriverForm} onChange={handleOtherDriverChange} />
                )}

                <div className="driver-details__notice">
                    <MdOutlineShield aria-hidden="true" />
                    <span>
                        Your personal data is protected under PDPA (Personal Data Protection Act) regulations.
                    </span>
                </div>

                {selectedDriver === 'other' && (
                    <EmergencyContactSection
                        contacts={contacts}
                        selectedId={selectedContactId}
                        onSelect={setSelectedContactId}
                        onAdd={handleAddContact}
                        onEdit={handleEditContact}
                        onDelete={handleDeleteContact}
                    />
                )}
            </div>
        </CollapsibleCard>
    );
};

/* ========================================================================
 * Section: Incident Details
 * ===================================================================== */

const MAX_DESCRIPTION_LENGTH = 500;

const IncidentDetailsCard: React.FC = () => {
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('Abc Street, Road No 1, Kuala Lumpur, Malaysia');

    return (
        <CollapsibleCard
            icon={<FiAlertCircle />}
            iconVariant="amber"
            title="Incident Details"
            subtitle="Describe the incident — date, time, location, and circumstances."
        >
            <div className="incident-details">
                <div className="incident-details__grid incident-details__grid--three">
                    <FormField label="Claim Type" required>
                        <div className="incident-details__select-shell">
                            <span className="incident-details__placeholder">Select Claim Type</span>
                            <FiChevronDown aria-hidden="true" />
                        </div>
                    </FormField>

                    <FormField label="Date of Incident" required>
                        <div className="incident-details__input-shell">
                            <FiCalendar className="incident-details__icon" aria-hidden="true" />
                            <span>24/06/2026</span>
                            <BsCheckCircleFill className="incident-details__check" aria-hidden="true" />
                        </div>
                    </FormField>

                    <FormField label="Time of Incident" required>
                        <div className="incident-details__input-shell">
                            <FiClock className="incident-details__icon" aria-hidden="true" />
                            <span>08:24 PM</span>
                            <BsCheckCircleFill className="incident-details__check" aria-hidden="true" />
                        </div>
                    </FormField>
                </div>

                <div className="incident-details__grid incident-details__grid--two">
                    <FormField label="Notice Date &amp; Time">
                        <div className="incident-details__input-shell">
                            <FiCalendar className="incident-details__icon" aria-hidden="true" />
                            <span>24/06/2026&nbsp;&nbsp;08:24 PM</span>
                            <BsCheckCircleFill className="incident-details__check" aria-hidden="true" />
                        </div>
                    </FormField>

                    <FormField label="Loss Date &amp; Time">
                        <div className="incident-details__input-shell">
                            <FiClock className="incident-details__icon" aria-hidden="true" />
                            <span>24/06/2026&nbsp;&nbsp;08:24 PM</span>
                            <BsCheckCircleFill className="incident-details__check" aria-hidden="true" />
                        </div>
                    </FormField>
                </div>

                <div className="incident-details__address-row">
                    <div className="incident-details__input-shell incident-details__input-shell--address">
                        <FiMapPin className="incident-details__icon" aria-hidden="true" />
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="incident-details__address-input"
                        />
                    </div>
                    <button type="button" className="incident-details__gps-btn">
                        <FiNavigation aria-hidden="true" />
                        <span>GPS</span>
                    </button>
                </div>

                <div className="incident-details__map">
                    <FiMapPin aria-hidden="true" />
                    <span>Location will appear on map</span>
                </div>

                <div className="incident-details__classification">
                    <span className="incident-details__section-label">Incident Classification</span>

                    <div className="incident-details__grid incident-details__grid--two">
                        <FormField label="Loss Type">
                            <div className="incident-details__select-shell">
                                <span className="incident-details__placeholder">Loss type</span>
                                <FiChevronDown aria-hidden="true" />
                            </div>
                        </FormField>

                        <FormField label="Police Report Number">
                            <div className="incident-details__input-shell">
                                <FiFileText className="incident-details__icon" aria-hidden="true" />
                                <input
                                    type="text"
                                    placeholder="e.g. KL/001234/2025"
                                    className="incident-details__address-input"
                                />
                            </div>
                        </FormField>
                    </div>
                </div>

                <FormField
                    label="Accident Description"
                    required
                    labelEnd={`${description.length} chars`}
                    className="incident-details__description-field"
                >
                    <textarea
                        className="incident-details__textarea"
                        maxLength={MAX_DESCRIPTION_LENGTH}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Describe clearly: what happened, how, vehicles involved, direction of travel..."
                        rows={4}
                    />
                </FormField>
            </div>
        </CollapsibleCard>
    );
};

/* ========================================================================
 * Page: Policy & Vehicle Details
 * ===================================================================== */

interface PolicyVehicleDetailsProps {
    onBack?: () => void;
    onContinue?: () => void;
}

const PolicyVehicleDetails: React.FC<PolicyVehicleDetailsProps> = ({ onBack, onContinue }) => {
    return (
        <div className="policy-vehicle-details">
            <header className="policy-vehicle-details__header">
                <h1 className="policy-vehicle-details__title">
                    Policy &amp; Vehicle{' '}
                    <span className="policy-vehicle-details__title-accent">Details</span>
                </h1>
                <p className="policy-vehicle-details__subtitle">
                    Locate your policy to begin the claim. AI will verify eligibility instantly.
                </p>
            </header>

            <main className="policy-vehicle-details__body">
                <SearchPolicyCard />
                <DriverDetailsCard />
                <IncidentDetailsCard />
            </main>

            <footer className="policy-vehicle-details__footer">
                <button
                    type="button"
                    className="policy-vehicle-details__btn policy-vehicle-details__btn--ghost"
                    onClick={onBack}
                >
                    <FiArrowLeft aria-hidden="true" />
                    <span>Back</span>
                </button>

                <button
                    type="button"
                    className="policy-vehicle-details__btn policy-vehicle-details__btn--primary"
                    onClick={onContinue}
                >
                    <span>Continue</span>
                    <FiArrowRight aria-hidden="true" />
                </button>
            </footer>
        </div>
    );
};

export default PolicyVehicleDetails;