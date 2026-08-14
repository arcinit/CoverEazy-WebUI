import React, { useState } from 'react';
import {
    FiTruck, FiSend, FiDownload, FiRefreshCw, FiFileText,
    FiFolder, FiAlertCircle, FiGrid, FiList, FiX, FiChevronDown,
    FiPrinter, FiMail, FiAlignLeft,
} from 'react-icons/fi';
import './PolicyWallet.scss';
import { MdFlight } from 'react-icons/md';

// ---------------------------------------------------------------------
// Static data
// ---------------------------------------------------------------------
type PolicyType = 'Motor' | 'Travel' | 'Road Tax';

interface PolicyDetail {
    label: string;
    value: string;
}

interface DocumentFile {
    name: string;
    date: string;
    size: string;
    version: string;
}

interface DocumentGroup {
    title: string;
    files: DocumentFile[];
}

interface Policy {
    id: string;
    policyNumber: string;
    type: PolicyType;
    icon: React.ElementType;
    tone: 'blue' | 'green';
    title: string;
    subtitle: string;
    status: 'Active' | 'Expiring' | 'Expired';
    stats: PolicyDetail[]; // Premium, Coverage, Expires, Status
    info: PolicyDetail[]; // Holder, Vehicle No / Insured, Start Dt, End Dt
    warnings: string[];
    documentGroups: DocumentGroup[];
}

const POLICIES: Policy[] = [
    {
        id: 'motor-88721',
        policyNumber: 'POL-2026-2001',
        type: 'Motor',
        icon: FiTruck,
        tone: 'blue',
        title: 'Motor Insurance',
        subtitle: 'Etiqa Takaful · MOTO-88721',
        status: 'Active',
        stats: [
            { label: 'Premium', value: 'RM 1,240/yr' },
            { label: 'Coverage', value: 'RM 85,000' },
            { label: 'Expires', value: '31 Dec 2026' },
            { label: 'Status', value: 'Active' },
        ],
        info: [
            { label: 'Holder:', value: 'Ahmad Rizal' },
            { label: 'Vehicle No.:', value: 'ABX 4897' },
            { label: 'Start Dt:', value: '31 Dec 2025' },
            { label: 'End Dt:', value: '31 Dec 2026' },
        ],
        warnings: ['Renewal due in 36 days', 'Road Tax expires in 36 days'],
        documentGroups: [
            {
                title: 'Policy Documents',
                files: [
                    { name: 'Policy Certificate.pdf', date: '02 Jan 2025', size: '184 KB', version: 'v1' },
                    { name: 'Policy Schedule.pdf', date: '02 Jan 2025', size: '212 KB', version: 'v1' },
                    { name: 'Policy Wording.pdf', date: '02 Jan 2025', size: '1.1 MB', version: 'v2' },
                ],
            },
            {
                title: 'Payment Documents',
                files: [
                    { name: 'Premium Receipt.pdf', date: '03 Jan 2025', size: '92 KB', version: 'v1' },
                    { name: 'Tax Invoice.pdf', date: '03 Jan 2025', size: '88 KB', version: 'v1' },
                ],
            },
        ],
    },
    {
        id: 'travel-44821',
        policyNumber: 'POL-2026-3312',
        type: 'Travel',
        icon: MdFlight,
        tone: 'green',
        title: 'Travel Insurance',
        subtitle: 'AXA Travel · TRV-2026-44821',
        status: 'Active',
        stats: [
            { label: 'Premium', value: 'RM 348' },
            { label: 'Coverage', value: 'RM 100,000' },
            { label: 'Expires', value: '2 Jul 2026' },
            { label: 'Status', value: 'Active' },
        ],
        info: [
            { label: 'Holder:', value: 'Ahmad Rizal' },
            { label: 'Insured:', value: 'Japan · 2 travellers' },
            { label: 'Start Dt:', value: '20 Jun 2026' },
            { label: 'End Dt:', value: '2 Jul 2026' },
        ],
        warnings: ['Visa document not uploaded'],
        documentGroups: [
            {
                title: 'Policy Documents',
                files: [
                    { name: 'Policy Certificate.pdf', date: '20 Jun 2026', size: '176 KB', version: 'v1' },
                    { name: 'Travel Itinerary.pdf', date: '20 Jun 2026', size: '96 KB', version: 'v1' },
                ],
            },
            {
                title: 'Payment Documents',
                files: [
                    { name: 'Premium Receipt.pdf', date: '20 Jun 2026', size: '84 KB', version: 'v1' },
                ],
            },
        ],
    },
];

const FILTER_TABS: Array<'All' | PolicyType> = ['All', 'Motor', 'Travel', 'Road Tax'];

// ---------------------------------------------------------------------
// Documents modal — opened from "View Documents" on a policy card
// ---------------------------------------------------------------------
interface DocumentsModalProps {
    policy: Policy;
    onClose: () => void;
}

const DocumentsModal: React.FC<DocumentsModalProps> = ({ policy, onClose }) => {
    const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(
        () =>
            Object.fromEntries(policy.documentGroups.map((group) => [group.title, true])) as Record<
                string,
                boolean
            >,
    );

    const toggleGroup = (title: string) => {
        setOpenGroups((prev) => ({ ...prev, [title]: !prev[title] }));
    };

    return (
        <div className="doc-modal__overlay" onClick={onClose}>
            <div className="doc-modal" onClick={(event) => event.stopPropagation()}>
                <div className="doc-modal__header">
                    <div className="doc-modal__heading">
                        <span className="doc-modal__heading-icon">
                            <FiAlignLeft />
                        </span>
                        <h3 className="doc-modal__title">{policy.policyNumber}</h3>
                    </div>
                    <button
                        type="button"
                        className="doc-modal__close"
                        onClick={onClose}
                        aria-label="Close"
                    >
                        <FiX />
                    </button>
                </div>

                <div className="doc-modal__body">
                    {policy.documentGroups.map((group) => (
                        <section className="doc-group" key={group.title}>
                            <button
                                type="button"
                                className="doc-group__header"
                                onClick={() => toggleGroup(group.title)}
                            >
                                <span className="doc-group__title">{group.title}</span>
                                <FiChevronDown
                                    className={`doc-group__chevron${openGroups[group.title] ? ' doc-group__chevron--open' : ''
                                        }`}
                                />
                            </button>

                            {openGroups[group.title] && (
                                <div className="doc-group__files">
                                    {group.files.map((file) => (
                                        <div className="doc-file" key={file.name}>
                                            <span className="doc-file__icon">
                                                <FiFileText />
                                            </span>

                                            <div className="doc-file__text">
                                                <span className="doc-file__name">{file.name}</span>
                                                <span className="doc-file__meta">
                                                    {file.date} &bull; {file.size} &bull; {file.version}
                                                </span>
                                            </div>

                                            <div className="doc-file__actions">
                                                <button
                                                    type="button"
                                                    className="doc-file__action doc-file__action--print"
                                                    aria-label="Print"
                                                >
                                                    <FiPrinter />
                                                </button>
                                                <button
                                                    type="button"
                                                    className="doc-file__action doc-file__action--download"
                                                    aria-label="Download"
                                                >
                                                    <FiDownload />
                                                </button>
                                                <button
                                                    type="button"
                                                    className="doc-file__action doc-file__action--mail"
                                                    aria-label="Email"
                                                >
                                                    <FiMail />
                                                </button>
                                                <button
                                                    type="button"
                                                    className="doc-file__action doc-file__action--send"
                                                    aria-label="Send"
                                                >
                                                    <FiSend />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
};

// ---------------------------------------------------------------------
// PolicyWallet
// ---------------------------------------------------------------------
const PolicyWallet: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<'All' | PolicyType>('All');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [activeDocPolicyId, setActiveDocPolicyId] = useState<string | null>(null);

    const filteredPolicies =
        activeFilter === 'All'
            ? POLICIES
            : POLICIES.filter((policy) => policy.type === activeFilter);

    const activeDocPolicy = POLICIES.find((policy) => policy.id === activeDocPolicyId) ?? null;

    return (
        <div className="policy-wallet">
            <div className="policy-wallet__heading">
                <h2 className="policy-wallet__title">Policy Wallet</h2>
                <p className="policy-wallet__subtitle">
                    All your insurance policies in one place.
                </p>
            </div>

            <div className="policy-wallet__toolbar">
                <div className="policy-wallet__tabs">
                    {FILTER_TABS.map((tab) => (
                        <button
                            type="button"
                            key={tab}
                            onClick={() => setActiveFilter(tab)}
                            className={`policy-wallet__tab${activeFilter === tab ? ' policy-wallet__tab--active' : ''
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="policy-wallet__view-toggle">
                    <button
                        type="button"
                        onClick={() => setViewMode('grid')}
                        className={`policy-wallet__view-btn${viewMode === 'grid' ? ' policy-wallet__view-btn--active' : ''
                            }`}
                        aria-label="Grid view"
                    >
                        <FiGrid />
                    </button>
                    <button
                        type="button"
                        onClick={() => setViewMode('list')}
                        className={`policy-wallet__view-btn${viewMode === 'list' ? ' policy-wallet__view-btn--active' : ''
                            }`}
                        aria-label="List view"
                    >
                        <FiList />
                    </button>
                </div>
            </div>

            <div className={`policy-wallet__grid policy-wallet__grid--${viewMode}`}>
                {filteredPolicies.map((policy) => (
                    <article className="policy-card" key={policy.id}>
                        <div className="policy-card__header">
                            <div className="policy-card__heading">
                                <span className={`policy-card__icon policy-card__icon--${policy.tone}`}>
                                    <policy.icon />
                                </span>
                                <div className="policy-card__heading-text">
                                    <h3 className="policy-card__title">{policy.title}</h3>
                                    <p className="policy-card__subtitle">{policy.subtitle}</p>
                                </div>
                            </div>
                            <span className="policy-card__status">{policy.status}</span>
                        </div>

                        <div className="policy-card__stats">
                            {policy.stats.map(({ label, value }) => (
                                <div className="policy-card__stat" key={label}>
                                    <span className="policy-card__stat-label">{label}</span>
                                    <span className="policy-card__stat-value">{value}</span>
                                </div>
                            ))}
                        </div>

                        <div className="policy-card__divider" />

                        <div className="policy-card__info">
                            {policy.info.map(({ label, value }) => (
                                <div className="policy-card__info-row" key={label}>
                                    <span className="policy-card__info-label">{label}</span>
                                    <span className="policy-card__info-value">{value}</span>
                                </div>
                            ))}
                        </div>

                        {policy.warnings.length > 0 && (
                            <div className="policy-card__warnings">
                                {policy.warnings.map((warning) => (
                                    <span className="policy-card__warning" key={warning}>
                                        <FiAlertCircle className="policy-card__warning-icon" />
                                        {warning}
                                    </span>
                                ))}
                            </div>
                        )}

                        <div className="policy-card__actions">
                            <button type="button" className="policy-card__action">
                                <FiDownload />
                                Download
                            </button>
                            <button type="button" className="policy-card__action policy-card__action--blue">
                                <FiRefreshCw />
                                Renew
                            </button>
                            <button type="button" className="policy-card__action policy-card__action--blue">
                                <FiFileText />
                                Claim
                            </button>
                            <button
                                type="button"
                                className="policy-card__action policy-card__action--green"
                                onClick={() => setActiveDocPolicyId(policy.id)}
                            >
                                <FiFolder />
                                View Documents
                            </button>
                        </div>
                    </article>
                ))}
            </div>

            {activeDocPolicy && (
                <DocumentsModal
                    policy={activeDocPolicy}
                    onClose={() => setActiveDocPolicyId(null)}
                />
            )}
        </div>
    );
};

export default PolicyWallet;