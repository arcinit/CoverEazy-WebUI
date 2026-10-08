import React from 'react'
import encryptionIcon from '../login-card/images/encryption.svg'
import pdpaIcon from '../login-card/images/pdpa.svg'
import licensedIcon from '../login-card/images/licensed.svg'
import secureAuthIcon from '../login-card/images/secure-auth.svg'

// Figma wraps these labels inside fixed-width text boxes ("Encrypt/ion", "Licen/sed"), so each line gets its own max width
const BADGES = [
    { icon: encryptionIcon, title: '256-bit', sub: 'Encryption', width: 58, subWidth: 46 },
    { icon: pdpaIcon, title: 'PDPA', sub: 'Compliant', width: 58 },
    { icon: licensedIcon, title: 'Licensed', sub: 'Platform', width: 48, titleWidth: 36 },
    { icon: secureAuthIcon, title: 'Secure', sub: 'Auth', width: 48 },
] as { icon: string; title: string; sub: string; width: number; titleWidth?: number; subWidth?: number }[]

export const TrustFooter = ({ onCreateAccount }: { onCreateAccount: () => void }) => (
    <div className="acard__footer">
        <div className="acard__badges">
            {BADGES.map((b) => (
                <div className="acard__badge" key={b.title}>
                    <img src={b.icon} alt="" />
                    <div className="acard__badge-text" style={{ width: b.width }}>
                        <b style={{ maxWidth: b.titleWidth }}>{b.title}</b>
                        <span style={{ maxWidth: b.subWidth }}>{b.sub}</span>
                    </div>
                </div>
            ))}
        </div>
        <p className="acard__signup">
            <span>Don't have an account?</span>
            <b role="button" tabIndex={0} onClick={onCreateAccount} onKeyDown={(e) => e.key === 'Enter' && onCreateAccount()}>
                Create Account
            </b>
        </p>
    </div>
)

export const MalaysiaFlag = () => (
    <svg width="20" height="14" viewBox="0 0 28 14" aria-hidden="true">
        <rect width="28" height="14" fill="#fff" />
        {[0, 2, 4, 6, 8, 10, 12].map((y) => (
            <rect key={y} y={y} width="28" height="1" fill="#cc0001" />
        ))}
        <rect width="14" height="8" fill="#010066" />
        <circle cx="5.2" cy="4" r="2.6" fill="#ffcc00" />
        <circle cx="6" cy="4" r="2.1" fill="#010066" />
        <circle cx="9.6" cy="4" r="1.1" fill="#ffcc00" />
    </svg>
)
