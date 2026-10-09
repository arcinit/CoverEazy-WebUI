import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import './ClaimsFooter.scss';

export const CLAIMS_FOOTER_SLOT_ID = 'claims-footer-slot';

interface ClaimsFooterProps {
    onBack?: () => void;
    onContinue?: () => void;
    continueDisabled?: boolean;
    continueLabel?: string;
    // Optional outline button shown just left of Continue (e.g. "Edit Details" on the review screen)
    secondary?: { label: string; onClick: () => void };
}

// The Back / Continue bar sits at the bottom of every claim screen, full width and pinned to the viewport
// bottom. It is rendered into the slot provided by ClaimsFlow so it can escape the 1240px content column.
const ClaimsFooter = ({ onBack, onContinue, continueDisabled, continueLabel = 'Continue', secondary }: ClaimsFooterProps) => {
    const [slot, setSlot] = useState<HTMLElement | null>(null);

    useEffect(() => {
        setSlot(document.getElementById(CLAIMS_FOOTER_SLOT_ID));
    }, []);

    if (!slot) return null;

    return createPortal(
        <div className="claims-footer">
            <div className="claims-footer__inner">
                <button type="button" className="claims-footer__back" onClick={onBack}>
                    <FiArrowLeft /> Back
                </button>
                <div className="claims-footer__actions">
                    {secondary && (
                        <button type="button" className="claims-footer__secondary" onClick={secondary.onClick}>
                            {secondary.label}
                        </button>
                    )}
                    <button
                        type="button"
                        className="claims-footer__continue"
                        disabled={continueDisabled}
                        onClick={onContinue}
                    >
                        {continueLabel} <FiArrowRight />
                    </button>
                </div>
            </div>
        </div>,
        slot
    );
};

export default ClaimsFooter;
