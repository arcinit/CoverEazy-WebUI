import React from 'react'
import "./DigitalPolicyWallet.scss"
import cardsImage from "./images/cards.png"
import {  FaQrcode } from 'react-icons/fa'
import { MdOutlineFileDownload, MdOutlineNotifications } from 'react-icons/md'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'

const DigitalPolicyWallet = () => {
    return <>

        <section className="dig-w">
            <main className="dig-w__container">
                <div className="dig-w__left">
                    <div className="dig-w__cards-container">
                        <img src={cardsImage} alt="" className="dig-w__cards-img" />
                    </div>
                </div>
                <div className="dig-w__right">
                    <div className="dig-w__heading">DIGITAL POLICY WALLET</div>
                    <div className="dig-w__title">One <em>wallet</em>. Every policy.</div>
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
                                <IoCheckmarkCircleOutline className='icon' />
                            </div>
                            <div className="dig-w__feature-name">Road Tax Sync</div>
                        </div>
                        <div className="dig-w__feature-block">
                            <div className="dig-w__feature-icon">
                                <MdOutlineNotifications className='icon' />
                            </div>
                            <div className="dig-w__feature-name">Renewal Reminders</div>
                        </div>
                    </div>
                </div>
            </main>
        </section>

    </>
}

export default DigitalPolicyWallet