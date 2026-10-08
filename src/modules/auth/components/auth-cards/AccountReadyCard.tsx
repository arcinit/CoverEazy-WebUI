import React from 'react'
import './AuthCards.scss'
import { LuShield, LuSparkles, LuGlobe, LuRefreshCw, LuPlane, LuFileText } from 'react-icons/lu'

const FEATURES = [
    { Icon: LuGlobe, color: '#0f5bff', bg: '#ecf2ff', lines: ['Compare Insurance'] },
    { Icon: LuRefreshCw, color: '#ff6b00', bg: '#fff4eb', lines: ['Renew Road', 'Tax'] },
    { Icon: LuPlane, color: '#00b894', bg: '#ebfaf7', lines: ['Travel', 'Insurance'] },
    { Icon: LuFileText, color: '#f700ff', bg: '#ffebff', lines: ['Submit Claim'] },
]

const AccountReadyCard = ({ onGetStarted }: { onGetStarted: () => void }) => (
    <div className="acard acard--ready">
        <div className="acard__shield"><LuShield size={34} strokeWidth={1.6} /></div>
        <div className="acard__ready-label">
            <LuSparkles size={16} strokeWidth={1.8} />
            <span>Account Ready</span>
        </div>
        <h2 className="acard__title acard__title--ready">Welcome to CoverEazy!</h2>
        <p className="acard__ready-sub">
            Your digital insurance wallet is ready. All your policies, claims and renewals — one secure place.
        </p>
        <div className="acard__features">
            {FEATURES.map(({ Icon, color, bg, lines }) => (
                <div className="acard__feature" key={lines.join(' ')}>
                    <span className="acard__feature-icon" style={{ background: bg, color }}>
                        <Icon size={18} strokeWidth={1.7} />
                    </span>
                    <span className="acard__feature-text">
                        {lines.map((l) => <span key={l}>{l}</span>)}
                    </span>
                </div>
            ))}
        </div>
        <button type="button" className="acard__primary acard__primary--ready" onClick={onGetStarted}>Get Started!</button>
        <p className="acard__terms">
            By continuing, you agree to CoverEazy's <b>Terms of Service</b>
        </p>
    </div>
)

export default AccountReadyCard
