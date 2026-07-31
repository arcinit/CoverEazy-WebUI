import React from 'react'
import "./PaymentInfo.scss"
import { IoWalletOutline, IoCarSportOutline, IoBarChart } from 'react-icons/io5'
import { HiOutlineUsers } from 'react-icons/hi2'
import { FaCheck, FaShieldAlt, FaClock } from 'react-icons/fa'
import { LuLock, LuSmartphone, LuShieldCheck, LuArrowRight, LuTrendingUp } from 'react-icons/lu'

const PaymentInfo = () => {
    return <>

        <section className="pay-i">
            <main className="pay-i__container">

                {/* LEFT SIDE */}
                <div className="pay-i__left">
                    <div className="pay-i__heading"><IoWalletOutline className='icon' /> Pay Monthly</div>
                    <div className="pay-i__title">Flexible payments. <span>Stay protected.</span></div>
                    <div className="pay-i__desc">Split your premium into easy monthly payments and get covered instantly</div>

                    {/* VISUAL BLOCK */}
                    <div className="pay-i__visual">

                        {/* ACTIVE POLICY CARD */}
                        <div className="pay-i__policy-card">
                            <div className="pay-i__policy-card__top">
                                <span>ACTIVE POLICY</span>
                                <span className="live"><LuLock size={11} /> LIVE</span>
                            </div>

                            <div className="pay-i__policy-card__body">
                                <div className="shield-icon"><FaShieldAlt /></div>
                                <div className="info">
                                    <span className="label">Motor Comprehensive</span>
                                    <span className="value">Protected <FaCheck size={10} color="#4ade80" /></span>
                                </div>
                            </div>

                            <div className="pay-i__policy-card-footer">
                                <div className="pay-i__policy-card__next">
                                    <span>Next payment</span>
                                    <span className="amount">RM 100</span>
                                </div>

                                <div className="pay-i__policy-card__progress">
                                    <span className="done"></span>
                                    <span className="done"></span>
                                    <span className="done"></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>

                        </div>

                        {/* PAYMENT SCHEDULE CARD */}
                        {/* PAYMENT SCHEDULE CARD */}
                        <div className="pay-i__schedule-card">
                            <div className="pay-i__schedule-card__top">
                                <span className="label">Payment Schedule</span>
                                <span className="pill">12 mo</span>
                            </div>

                            <div className="pay-i__schedule-card__list">
                                {[
                                    { m: "Jan", done: true },
                                    { m: "Feb", done: true },
                                    { m: "Mar", done: true },
                                    { m: "Apr", done: false },
                                ].map((row) => (
                                    <div className="pay-i__schedule-card__row" key={row.m}>
                                        <span className="month">
                                            <span className={`dot ${row.done ? "" : "pending"}`}>
                                                {row.done ? <FaCheck size={8} /> : <FaClock size={8} />}
                                            </span>
                                            {row.m}
                                        </span>
                                        <span className="amount">RM 100</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* SAVED UPFRONT — now a separate floating pill, outside the white card */}
                        <div className="pay-i__saved-pill">
                            <LuTrendingUp size={14} color="#16a34a" /> RM 1,100 saved upfront
                        </div>

                        {/* SHIELD BADGE */}
                        <div className="pay-i__shield-badge">
                            <FaShieldAlt />
                        </div>
                    </div>

                    {/* INFO BANNER */}
                    <div className="pay-i__info-banner">
                        <div className="avatar"><HiOutlineUsers /></div>
                        <p>Most customers choose monthly payments to reduce upfront costs and maintain continuous coverage.</p>
                    </div>
                </div>

                {/* RIGHT SIDE — PRICING CARD */}
                <div className="pay-i__right">
                    <div className="pay-i__price-card">

                        <div className="pay-i__price-top">
                            <div className="type">
                                <div className="icon-wrap"><IoCarSportOutline /></div>
                                <div>
                                    <div className="label">Motor Insurance</div>
                                    <div className="name">Premium</div>
                                </div>
                            </div>
                            <div className="eligible"><FaCheck size={10} /> Eligible</div>
                        </div>

                        <div className="pay-i__price-amount">
                            <span className="currency">RM</span>
                            <span className="value">1,200</span>
                            <span className="period">/ year</span>
                        </div>

                        <div className="pay-i__price-options">
                            <div className="pay-i__price-option pay-i__price-option--strike">
                                <div className="label">Pay annually</div>
                                <div className="value">RM 1,200</div>
                                <div className="sub">One-time payment</div>
                            </div>

                            <div className="pay-i__price-or">or</div>

                            <div className="pay-i__price-option pay-i__price-option--active">
                                <div className="label">Pay monthly</div>
                                <div className="value">RM 400 <span style={{ fontSize: 13, fontWeight: 500 }}>/mo</span></div>
                                <div className="sub">3 easy payments</div>
                            </div>
                        </div>

                        <div className="pay-i__features">
                            <div className="pay-i__features__row"><span className="check"><FaCheck size={10} /></span> 0% Interest</div>
                            <div className="pay-i__features__row"><span className="check"><FaCheck size={10} /></span> Instant activation</div>
                            <div className="pay-i__features__row"><span className="check"><FaCheck size={10} /></span> Cancel anytime</div>
                        </div>

                        <button className="pay-i__cta">
                            Get Started <LuArrowRight />
                        </button>
                    </div>
                </div>

            </main>

            {/* BOTTOM TRUST BAR */}
            <div className="pay-i__trust">
                <div className="pay-i__trust__item">
                    <div className="icon-wrap"><LuLock /></div>
                    <div>
                        <div className="title">Secure Online Payments</div>
                        <div className="desc">Your transaction are safe and encrypted.</div>
                    </div>
                </div>

                <div className="pay-i__trust__item">
                    <div className="icon-wrap"><LuSmartphone /></div>
                    <div>
                        <div className="title">Approved Partners</div>
                        <div className="desc">We work with trusted financing partners</div>
                    </div>
                </div>

                <div className="pay-i__trust__item">
                    <div className="icon-wrap"><LuShieldCheck /></div>
                    <div>
                        <div className="title">Eligibility Check</div>
                        <div className="desc">Quick and hassle-free eligibility check.</div>
                    </div>
                </div>

                <div className="pay-i__trust__item">
                    <div className="icon-wrap"><IoBarChart /></div>
                    <div>
                        <div className="title">Real-Time Tracking</div>
                        <div className="desc">Track your payments anytime, anywhere.</div>
                    </div>
                </div>
            </div>
        </section>

    </>
}

export default PaymentInfo