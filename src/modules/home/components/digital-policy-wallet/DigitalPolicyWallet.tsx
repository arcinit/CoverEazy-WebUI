import React from 'react'
import "./DigitalPolicyWallet.scss"
import { FaQrcode } from 'react-icons/fa'
import { MdOutlineFileDownload, MdOutlineNotifications } from 'react-icons/md'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'

const DigitalPolicyWallet = () => {
    return <>

        <section className="dig-w">
            <main className="dig-w__container">
                <div className="dig-w__left">
                    <div className="dig-w__cards-container">
                        <article className="dig-w__policy-card dig-w__policy-card--back">
                            <span className="dig-w__policy-dot" />
                            <span className="dig-w__policy-type">Policy</span>
                            <strong className="dig-w__policy-name">Family Shield Plus</strong>
                            <span className="dig-w__policy-expiry">Exp 08/2026</span>
                            <span className="dig-w__policy-category">Health</span>
                        </article>
                        <article className="dig-w__policy-card dig-w__policy-card--motor">
                            <span className="dig-w__policy-dot dig-w__policy-dot--gold" />
                            <span className="dig-w__policy-category dig-w__policy-category--premium">Premium</span>
                            <div className="dig-w__motor-details">
                                <span className="dig-w__policy-type">Motor Takaful</span>
                                <strong className="dig-w__policy-name">VCS 8842 · Comprehensive</strong>
                                <span className="dig-w__policy-expiry">Exp 12/2026</span>
                            </div>
                            <span className="dig-w__qr"><FaQrcode aria-hidden="true" /></span>
                        </article>
                        <article className="dig-w__policy-card dig-w__policy-card--road-tax">
                            <span className="dig-w__policy-dot dig-w__policy-dot--gold-soft" />
                            <span className="dig-w__policy-category dig-w__policy-category--active">Active</span>
                            <div className="dig-w__road-tax-details">
                                <span className="dig-w__policy-type">Road Tax</span>
                                <strong className="dig-w__policy-name">VCS 8842 · 1.5L</strong>
                                <span className="dig-w__policy-expiry">Exp 12/2026</span>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="dig-w__right">
                    <div className="dig-w__heading">DIGITAL POLICY WALLET</div>
                    <h2 className="dig-w__title">One wallet. Every policy.</h2>
                    <div className="dig-w__desc">All your policies, road tax, and insurance documents — securely stored in one premium digital wallet. Access anytime, anywhere.</div>
                    <div className="dig-w__features-grid">
                        <div className="dig-w__feature-block">
                            <div className="dig-w__feature-icon">
                                <FaQrcode className='icon' />
                            </div>
                            <div className="dig-w__feature-name">QR Verification</div>
                        </div>
                        <div className="dig-w__feature-block">
                            <div className="dig-w__feature-icon">
                                <MdOutlineFileDownload className='icon' />
                            </div>
                            <div className="dig-w__feature-name">PDF Downloads</div>
                        </div>
                        <div className="dig-w__feature-block">
                            <div className="dig-w__feature-icon">
                                <MdOutlineNotifications className='icon' />
                            </div>
                            <div className="dig-w__feature-name">Renewal Reminders</div>
                        </div>
                        <div className="dig-w__feature-block">
                            <div className="dig-w__feature-icon">
                                <IoCheckmarkCircleOutline className='icon' />
                            </div>
                            <div className="dig-w__feature-name">Road Tax Sync</div>
                        </div>
                    </div>
                </div>
            </main>
        </section>

    </>
}

export default DigitalPolicyWallet