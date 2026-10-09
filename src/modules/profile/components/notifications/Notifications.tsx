import React from 'react';
import { LuPlane } from 'react-icons/lu';
import { FiRefreshCw, FiFileText, FiSend, FiCheckCircle, FiShield } from 'react-icons/fi';
import './Notifications.scss';

type NotifKind = 'road-tax' | 'claim' | 'travel' | 'payment' | 'security';

interface Notification {
    id: string;
    kind: NotifKind;
    title: string;
    message: string;
    time: string;
    unread?: boolean;
}

const NOTIFICATIONS: Notification[] = [
    { id: 'n1', kind: 'road-tax', title: 'Road Tax Expiring Soon', message: 'WXD 1234 road tax expires in 36 days. Renew now.', time: '2h ago', unread: true },
    { id: 'n2', kind: 'claim', title: 'Claim Update', message: 'Adjuster Hafiz has been assigned to your claim CLM-88421.', time: '1d ago', unread: true },
    { id: 'n3', kind: 'travel', title: 'Travel Policy Issued', message: 'Your AXA Premium travel policy for Japan is now active.', time: '2d ago' },
    { id: 'n4', kind: 'payment', title: 'Premium Payment Confirmed', message: 'RM 1,240 motor insurance premium received.', time: '5d ago' },
    { id: 'n5', kind: 'security', title: 'Security Alert', message: 'New login from MacBook Pro · Subang Jaya, Selangor.', time: '1w ago' },
];

const KIND_ICON: Record<NotifKind, React.ElementType> = {
    'road-tax': FiRefreshCw,
    claim: FiFileText,
    travel: LuPlane,
    payment: FiCheckCircle,
    security: FiShield,
};

const Notifications: React.FC = () => (
    <section className="nt-root">
        <div className="nt-root__header">
            <h2 className="nt-root__heading">Notifications</h2>
            <button type="button" className="nt-root__mark-read">Mark all read</button>
        </div>

        <ul className="nt-root__list">
            {NOTIFICATIONS.map((item) => {
                const Icon = KIND_ICON[item.kind];
                return (
                    <li key={item.id} className={`nt-row${item.unread ? ' nt-row--unread' : ''}`}>
                        {item.unread && <span className="nt-row__dot" />}
                        <span className={`nt-row__icon nt-row__icon--${item.kind}`}><Icon /></span>
                        <div className="nt-row__body">
                            <span className="nt-row__title">{item.title}</span>
                            <span className="nt-row__message">{item.message}</span>
                        </div>
                        <span className="nt-row__time">{item.time}</span>
                    </li>
                );
            })}
        </ul>
    </section>
);

export default Notifications;
