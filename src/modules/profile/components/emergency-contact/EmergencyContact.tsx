import React from 'react';
import { FiPlus } from 'react-icons/fi';
import './EmergencyContact.scss';

// ---------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------
type AvatarColor = 'teal' | 'blue' | 'pink' | 'orange';

interface Member {
    id: string;
    initials: string;
    avatarColor: AvatarColor;
    name: string;
    relation: string;
    dob: string;
}

// ---------------------------------------------------------------------
// Static data — swap with API data later
// ---------------------------------------------------------------------
const MEMBERS: Member[] = [
    {
        id: 'm1',
        initials: 'SR',
        avatarColor: 'teal',
        name: 'Siti Rahimah binti Ismail',
        relation: 'Spouse',
        dob: '22 Aug 1987',
    },
    {
        id: 'm2',
        initials: 'AD',
        avatarColor: 'blue',
        name: 'Ahmad Darwisyah',
        relation: 'Son',
        dob: '10 Jun 2015',
    },
];

// ---------------------------------------------------------------------
// Member card
// ---------------------------------------------------------------------
const MemberCard: React.FC<{ member: Member }> = ({ member }) => (
    <div className="emergency-contact__card">
        <div className="emergency-contact__card-top">
            <span
                className={`emergency-contact__avatar emergency-contact__avatar--${member.avatarColor}`}
            >
                {member.initials}
            </span>
            <div className="emergency-contact__info">
                <span className="emergency-contact__name">{member.name}</span>
                <span className="emergency-contact__meta">
                    {member.relation} &middot; DOB {member.dob}
                </span>
            </div>
        </div>

        <div className="emergency-contact__actions">
            <button type="button" className="emergency-contact__btn">
                Edit
            </button>
            <button type="button" className="emergency-contact__btn">
                Documents
            </button>
        </div>
    </div>
);

// ---------------------------------------------------------------------
// EmergencyContact — main export
// ---------------------------------------------------------------------
const EmergencyContact: React.FC = () => {
    return (
        <section className="emergency-contact">
            <div className="emergency-contact__header">
                <div>
                    <h2 className="emergency-contact__heading">Emergency Contact</h2>
                    <p className="emergency-contact__lead">
                        Manage dependents, nominees, and shared policies.
                    </p>
                </div>
                <button type="button" className="emergency-contact__add-btn">
                    <FiPlus />
                    Add Member
                </button>
            </div>

            <div className="emergency-contact__grid">
                {MEMBERS.map((member) => (
                    <MemberCard key={member.id} member={member} />
                ))}
            </div>
        </section>
    );
};

export default EmergencyContact;