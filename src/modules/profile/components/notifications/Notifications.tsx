import React from 'react';
import {
    FiRefreshCw, FiFileText, FiSend, FiGift, FiLock,
} from 'react-icons/fi';
import './Notifications.scss';

// ---------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------
type NotifKind = 'road-tax' | 'claim' | 'travel' | 'payment' | 'security';

interface Notification {
    id: string;
    kind: NotifKind;
    title: string;
    message: string;
    time: string;
    unread?: boolean;
}

// ---------------------------------------------------------------------
// Static data — swap with API data later
// ---------------------------------------------------------------------
const NOTIFICATIONS: Notification[] = [
    {
        id: 'n1',
        kind: 'road-tax',
        title: 'Road Tax Expiring Soon',
        message: 'WXD 1234 road tax expires in 36 days. Renew now.',
        time: '2d ago',
        unread: true,
    },
    {
        id: 'n2',
        kind: 'claim',
        title: 'Claim Update',
        message: 'Adjuster Hafiz has been assigned to your claim CLM-88421.',
        time: '1d ago',
        unread: true,
    },
    {
        id: 'n3',
        kind: 'travel',
        title: 'Travel Policy Issued',
        message: 'Your AXA Premium travel policy for Japan is active.',
        time: '3d ago',
    },
    {
        id: 'n4',
        kind: 'payment',
        title: 'Premium Payment Confirmed',
        message: 'RM 1,240 road tax insurance premium received.',
        time: '5d ago',
    },
    {
        id: 'n5',
        kind: 'security',
        title: 'Security Alert',
        message: 'New login from MacBook Pro - Selangor, Malaysia.',
        time: '1w ago',
    },
];

const KIND_ICON: Record<NotifKind, React.ElementType> = {
    'road-tax': FiRefreshCw,
    claim: FiFileText,
    travel: FiSend,
    payment: FiGift,
    security: FiLock,
};

// ---------------------------------------------------------------------
// Notification row
// ---------------------------------------------------------------------
const NotificationRow: React.FC<{ item: Notification }> = ({ item }) => {
    const Icon = KIND_ICON[item.kind];

    return (
        <li
            className={`notifications__row${item.unread ? ' notifications__row--unread' : ''
                }`}
        >
            <span className={`notifications__icon notifications__icon--${item.kind}`}>
                <Icon />
            </span>

            <div className="notifications__body">
                <span className="notifications__title">
                    {item.unread && <span className="notifications__dot" />}
                    {item.title}
                </span>
                <span className="notifications__message">{item.message}</span>
            </div>

            <span className="notifications__time">{item.time}</span>
        </li>
    );
};

// ---------------------------------------------------------------------
// Notifications — main export
// ---------------------------------------------------------------------
const Notifications: React.FC = () => {
    return (
        <section className="notifications">
            <div className="notifications__header">
                <h2 className="notifications__heading">Notifications</h2>
                <button type="button" className="notifications__mark-read">
                    Mark all read
                </button>
            </div>

            <ul className="notifications__list">
                {NOTIFICATIONS.map((item) => (
                    <NotificationRow key={item.id} item={item} />
                ))}
            </ul>
        </section>
    );
};

export default Notifications;