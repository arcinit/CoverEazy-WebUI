import { useEffect } from 'react'
import './VasModal.scss'
import { IoClose, IoArrowForward } from 'react-icons/io5'
import {
    LuCarFront,
    LuClipboardList,
    LuFileText,
    LuFuel,
    LuSnowflake,
    LuZap,
    LuCircleDot,
    LuDisc3,
    LuBatteryCharging,
    LuWind,
    LuUmbrella,
    LuThermometerSnowflake,
} from 'react-icons/lu'
import allianzLogo from '../compare-plans/images/plans-images/allianz.png'

const services: any = [
    { label: 'Car Water Wash + Interior Vacuuming', icon: LuCarFront, color: '#e5483d' },
    { label: '62 point digital check up', icon: LuClipboardList, color: '#6b7fd7' },
    { label: 'Digital Car Health Report', icon: LuFileText, color: '#586474' },
    { label: 'Oil & Filter Check', icon: LuFuel, color: '#e8a317' },
    { label: 'Coolant Top up', icon: LuSnowflake, color: '#2f7fe0' },
    { label: 'Spark Plug Check', icon: LuZap, color: '#d6483d' },
    { label: 'Tyre Life Check + Rotation', icon: LuCircleDot, color: '#4b5563' },
    { label: 'Brake System Check', icon: LuDisc3, color: '#d6483d' },
    { label: 'Electrical System Check', icon: LuBatteryCharging, color: '#e8a317' },
    { label: 'Ac Performance Check', icon: LuThermometerSnowflake, color: '#2f9be0' },
    { label: 'Wiper Check', icon: LuUmbrella, color: '#2f7fe0' },
    { label: 'Battery Health Check', icon: LuWind, color: '#6b7fd7' },
]

const sections: any = [
    [
        'CoverEazy car insurance customers get free & exclusive Value Added Services Voucher from MyTVS',
        'Available in MyTVS network garage areas',
        'Can be availed once per policy period',
        'Prices for Consumables and parts will be charged & payable separately by the customer',
    ],
    [
        'Vouchers issued with policy documents are active and can be used anytime.',
        "Services won't affect No Claim Bonus (NCB).",
        'Services provided by approved network garages only.',
        'Vouchers non-transferable and non-reimbursable if unused.',
    ],
    [
        'Book appointment via PB app, call centre, WhatsApp, or myTVS app/WhatsApp.',
        'Choose nearby workshop from provided list.',
        'Receive instant booking confirmation.',
        'Avail complimentary service at workshop on scheduled date/time.',
    ],
]

const BulletList = ({ items, large }: any) => (
    <ul className={`vas-modal__bullets${large ? ' vas-modal__bullets--large' : ''}`}>
        {items.map((t: string) => (
            <li key={t}>{t}</li>
        ))}
    </ul>
)

const VasModal = ({ open, onClose }: any) => {
    useEffect(() => {
        if (!open) return
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        document.addEventListener('keydown', onKey)
        const prev = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        return () => {
            document.removeEventListener('keydown', onKey)
            document.body.style.overflow = prev
        }
    }, [open, onClose])

    if (!open) return null

    return (
        <div className="vas-modal" onClick={onClose} role="presentation">
            <div
                className="vas-modal__panel"
                role="dialog"
                aria-modal="true"
                aria-labelledby="vas-modal-title"
                onClick={(e) => e.stopPropagation()}
            >
                <button type="button" className="vas-modal__close" onClick={onClose} aria-label="Close">
                    <IoClose />
                </button>
                <h2 className="vas-modal__title" id="vas-modal-title">Get Complimentary Car Servicing</h2>
                <BulletList items={sections[0]} />

                <h3 className="vas-modal__heading">List of Value Added Services</h3>
                <div className="vas-modal__grid">
                    {services.map((s: any) => {
                        const Icon = s.icon
                        return (
                            <div className="vas-modal__tile" key={s.label}>
                                <Icon className="vas-modal__tile-icon" style={{ color: s.color }} />
                                <span>{s.label}</span>
                            </div>
                        )
                    })}
                </div>

                <h3 className="vas-modal__heading vas-modal__heading--spaced">List of Value Added Services</h3>
                <BulletList items={sections[1]} large />

                <h3 className="vas-modal__heading vas-modal__heading--spaced">List of Value Added Services</h3>
                <BulletList items={sections[2]} large />

                <div className="vas-modal__footer">
                    <img className="vas-modal__logo" src={allianzLogo} alt="Allianz" />
                    <div className="vas-modal__stat vas-modal__stat--plan">
                        <span className="vas-modal__stat-label">SELECTED PLAN</span>
                        <span className="vas-modal__stat-value">Allianz General</span>
                    </div>
                    <div className="vas-modal__stat">
                        <span className="vas-modal__stat-label">PREMIUM</span>
                        <span className="vas-modal__stat-value">RM 1,284</span>
                    </div>
                    <div className="vas-modal__stat">
                        <span className="vas-modal__stat-label">MONTHLY</span>
                        <span className="vas-modal__stat-value">RM 107</span>
                    </div>
                    <div className="vas-modal__stat">
                        <span className="vas-modal__stat-label">SAVINGS</span>
                        <span className="vas-modal__stat-value vas-modal__stat-value--green">RM 196</span>
                    </div>
                    <button type="button" className="vas-modal__cta" onClick={onClose}>
                        Continue to Checkout <IoArrowForward />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default VasModal
