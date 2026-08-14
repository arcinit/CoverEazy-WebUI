import React from 'react';
import {
    FiUser, FiPhone, FiMapPin, FiHeart, FiEdit2, FiCheckCircle,
} from 'react-icons/fi';
import './PersonalInformation.scss';

// ---------------------------------------------------------------------
// Static data
// ---------------------------------------------------------------------
interface FieldItem {
    label: string;
    value: string;
    verified?: boolean;
}

const PROFILE_COMPLETION = {
    percent: 88,
    hint: 'Add employment details to reach 100%',
};

const PERSONAL_DETAILS: FieldItem[] = [
    { label: 'Full Name', value: 'Ahmad Rizal bin Ismail', verified: true },
    { label: 'IC Number', value: '850315-10-XXXX', verified: true },
    { label: 'Date of Birth', value: '15 March 1985' },
    { label: 'Gender', value: 'Male' },
    { label: 'Race', value: 'Malay' },
    { label: 'Nationality', value: 'Malaysian' },
];

const CONTACT_DETAILS: FieldItem[] = [
    { label: 'Mobile Number', value: '+60 12-345 6789', verified: true },
    { label: 'Work Phone', value: '+60 3-1234 5678' },
    { label: 'Email Address', value: 'ahmad.rizal@email.com', verified: true },
];

const ADDRESS: FieldItem[] = [
    { label: 'Address Line 1', value: 'No. 12, Jalan Kenanga 5/2' },
    { label: 'City', value: 'Subang Jaya' },
    { label: 'Postcode', value: '47500' },
    { label: 'State', value: 'Selangor' },
    { label: 'Country', value: 'Malaysia' },
];

const EMERGENCY_CONTACT: FieldItem[] = [
    { label: 'Contact Name', value: 'Siti Rahimah binti Ismail' },
    { label: 'Relationship', value: 'Spouse' },
    { label: 'Mobile Number', value: '+60 12-987 6543' },
    { label: 'Email', value: 'siti.rahimah@email.com' },
];

// ---------------------------------------------------------------------
// Reusable field-group card
// ---------------------------------------------------------------------
interface InfoCardProps {
    icon: React.ElementType;
    tone: 'blue' | 'green' | 'orange' | 'red';
    title: string;
    fields: FieldItem[];
}

const InfoCard: React.FC<InfoCardProps> = ({ icon: Icon, tone, title, fields }) => (
    <section className="personal-info__card">
        <div className="personal-info__card-header">
            <div className="personal-info__card-heading">
                <span className={`personal-info__card-icon personal-info__card-icon--${tone}`}>
                    <Icon />
                </span>
                <h3 className="personal-info__card-title">{title}</h3>
            </div>
            <button type="button" className="personal-info__card-edit">
                <FiEdit2 />
                Edit
            </button>
        </div>

        <div className="personal-info__fields">
            {fields.map(({ label, value, verified }) => (
                <div className="personal-info__field" key={label}>
                    <span className="personal-info__field-label">{label}</span>
                    <span className="personal-info__field-value">
                        {value}
                        {verified && (
                            <FiCheckCircle className="personal-info__field-verified" />
                        )}
                    </span>
                </div>
            ))}
        </div>
    </section>
);

// ---------------------------------------------------------------------
// PersonalInformation
// ---------------------------------------------------------------------
const PersonalInformation: React.FC = () => {
    return (
        <div className="personal-info">
            <div className="personal-info__heading">
                <div>
                    <h2 className="personal-info__title">Personal Information</h2>
                    <p className="personal-info__subtitle">
                        Manage your personal details and contact information.
                    </p>
                </div>
                <button type="button" className="personal-info__edit-all">
                    <FiEdit2 />
                    Edit All
                </button>
            </div>

            {/* Profile Completion */}
            <section className="personal-info__completion">
                <div className="personal-info__completion-row">
                    <span className="personal-info__completion-label">Profile Completion</span>
                    <span className="personal-info__completion-value">
                        {PROFILE_COMPLETION.percent}%
                    </span>
                </div>
                <div className="personal-info__completion-track">
                    <div
                        className="personal-info__completion-fill"
                        style={{ width: `${PROFILE_COMPLETION.percent}%` }}
                    />
                </div>
                <span className="personal-info__completion-hint">
                    {PROFILE_COMPLETION.hint}
                </span>
            </section>

            <InfoCard
                icon={FiUser}
                tone="blue"
                title="Personal Details"
                fields={PERSONAL_DETAILS}
            />

            <InfoCard
                icon={FiPhone}
                tone="green"
                title="Contact Details"
                fields={CONTACT_DETAILS}
            />

            <InfoCard
                icon={FiMapPin}
                tone="orange"
                title="Address"
                fields={ADDRESS}
            />

            <InfoCard
                icon={FiHeart}
                tone="red"
                title="Emergency Contact"
                fields={EMERGENCY_CONTACT}
            />
        </div>
    );
};

export default PersonalInformation;