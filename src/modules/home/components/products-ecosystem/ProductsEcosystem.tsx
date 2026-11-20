import React from 'react'
import "./ProductsEcosystem.scss"
import { FaArrowRight, FaBicycle, FaBriefcase, FaCarSide, FaHeartbeat, FaPlane, FaShieldAlt, FaStar, FaStopwatch, FaUsers } from 'react-icons/fa'
import { CiFileOn, CiLock, CiPlay1 } from "react-icons/ci";
import { LuZap } from 'react-icons/lu';

import tickCircle from "./images/tick-circle.png"
import closeCircle from "./images/close-circle.png"
import car from "./images/car.png"
import more from "./images/more.png"
import { GoShieldCheck } from "react-icons/go";
import { TbDeviceMobileFilled } from "react-icons/tb";
import { Ri24HoursLine } from "react-icons/ri";
import { MdVerifiedUser } from 'react-icons/md';

const ProductsEcosystem = () => {

    const products = [
        {
            id: "motor", class: "motor", title: "Motor Insurance",
            desc: "Comprehensive coverage from 20+ insurers with up to 55% NCD protection.",
            action: "Compare now", icon: <FaCarSide />
        },
        {
            id: "takaful", class: "takaful", title: "General Takaful",
            desc: "Shariah-compliant protection with transparent surplus sharing.",
            action: "View plans", icon: <FaShieldAlt />
        },
        {
            id: "travel", class: "travel", title: "Travel Insurance",
            desc: "Global coverage for flight delays, medical, and lost baggage.",
            action: "Get protected", icon: <FaPlane />
        },
        {
            id: "health", class: "health", title: "Health Insurance",
            desc: "Cashless hospital admissions across 200+ panel hospitals.",
            action: "Find plan", icon: <FaHeartbeat />
        },
        {
            id: "motorcycle", class: "motorcycle", title: "Motorcycle Insurance",
            desc: "Affordable coverage for bikes with rider personal accident.",
            action: "Insure ride", icon: <FaBicycle />
        },
        {
            id: "sme", class: "sme", title: "SME Insurance",
            desc: "Business liability, fire & property protection for local enterprises.",
            action: "Business quote", icon: <FaBriefcase />
        },
        {
            id: "family", class: "family", title: "Family Insurance",
            desc: "All-in-one protection for you and your loved ones.",
            action: "Secure family", icon: <FaUsers />
        },
        {
            id: "ai", class: "ai", title: "AI Recommends",
            desc: "Not sure which plan? Our AI matches you to the best policy in seconds.",
            action: "Match me", icon: <FaStar />
        },

    ]

    return <>

        <section className="pes">
            <div className="pes__header">
                <div className="pes__header-copy">
                    <p className="pes__heading">PRODUCTS ECOSYSTEM</p>
                    <h1 className="pes__title">Insurance for every journey</h1>
                    <p className="pes__subtitle">From your first car to your family's future — explore protection plans built for the Malaysian lifestyle.</p>
                </div>
                <button className="pes__all-products">View all products <FaArrowRight /></button>
            </div>
            <div className="pes__products-grid">
                {
                    products.map((product) => {
                        return (
                            <div className={`pes__product-card ${product.class}`} key={product.id}>
                                <div className="pes__product-icon">{product.icon}</div>
                                <div className="pes__product-info">
                                    <div className="pes__p-title">{product.title}</div>
                                    <div className="pes__p-text">{product.desc}</div>
                                    <button className="pes__card-action-btn">{product.action} <FaArrowRight className='icon' /></button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {/* <div className="renew-rt">
                <div className="renew-rt__block-title">The Transformation</div>
                <div className="renew-rt__container">
                    <div className="renew-rt__left">
                        <div className="renew-rt__heading">Renew Road Tax. <span>Done in <br /> Minutes</span></div>
                        <div className="renew-rt__desc">Renew road tax for any registered motor vehicle with secure digital verification and instant processing.</div>
                        <div className="renew-rt__action-btns">
                            <button className="renew-rt__action-btn"><LuZap className='icon' />Renew now <FaArrowRight /></button>
                            <button className="renew-rt__action-btn hiw"><CiPlay1 className='icon' />See how it works</button>
                        </div>
                        <div className="renew-rt__features">
                            <div className="renew-rt__feature-block">
                                <div className="renew-rt__feature-icon-block">
                                    <GoShieldCheck className='icon'/>
                                </div>
                                <div className="renew-rt__featur-desc">Instant JPJ Verification</div>
                            </div>
                            <div className="renew-rt__feature-block">
                                <div className="renew-rt__feature-icon-block">
                                    <CiLock className='icon' />
                                </div>
                                <div className="renew-rt__featur-desc">Instant JPJ Verification</div>
                            </div>
                            <div className="renew-rt__feature-block">
                                <div className="renew-rt__feature-icon-block">
                                    <CiFileOn className='icon' />
                                </div>
                                <div className="renew-rt__featur-desc">Instant JPJ Verification</div>
                            </div>
                            <div className="renew-rt__feature-block">
                                <div className="renew-rt__feature-icon-block">
                                    <GoShieldCheck className='icon' />
                                </div>
                                <div className="renew-rt__featur-desc">Instant JPJ Verification</div>
                            </div>
                        </div>
                    </div>
                    <div className="renew-rt__right">
                        <div className="renew-rt__renew-ways">
                            <div className="renew-rt__renew-way-card">
                                <div className="renew-rt__card-title">THE OLD WAY</div>
                                <div className="renew-rt__card-row">
                                    <img src={closeCircle} alt="" className="renew-rt__tick-circle" />
                                    <CiFileOn className='renew-rt__renew-icon' />
                                    <span className="renew-rt__way-desc">Paper forms & queues</span>
                                </div>
                                <div className="renew-rt__card-row">
                                    <img src={closeCircle} alt="" className="renew-rt__tick-circle" />
                                    <CiFileOn className='renew-rt__renew-icon' />
                                    <span className="renew-rt__way-desc">Paper forms & queues</span>
                                </div>
                                <div className="renew-rt__card-row">
                                    <img src={closeCircle} alt="" className="renew-rt__tick-circle" />
                                    <CiFileOn className='renew-rt__renew-icon' />
                                    <span className="renew-rt__way-desc">Paper forms & queues</span>
                                </div>
                                <div className="renew-rt__card-row">
                                    <img src={closeCircle} alt="" className="renew-rt__tick-circle" />
                                    <CiFileOn className='renew-rt__renew-icon' />
                                    <span className="renew-rt__way-desc">Paper forms & queues</span>
                                </div>
                            </div>

                            <div className="renew-rt__renew-way-card new-way-card">
                                <div className="renew-rt__card-title">THE COVEREAZY WAY</div>
                                <div className="renew-rt__card-row">
                                    <img src={tickCircle} alt="" className="renew-rt__tick-circle" />
                                    <CiFileOn className='renew-rt__renew-icon' />
                                    <span className="renew-rt__way-desc">Paper forms & queues</span>
                                </div>
                                <div className="renew-rt__card-row">
                                    <img src={tickCircle} alt="" className="renew-rt__tick-circle" />
                                    <CiFileOn className='renew-rt__renew-icon' />
                                    <span className="renew-rt__way-desc">Paper forms & queues</span>
                                </div>
                                <div className="renew-rt__card-row">
                                    <img src={tickCircle} alt="" className="renew-rt__tick-circle" />
                                    <CiFileOn className='renew-rt__renew-icon' />
                                    <span className="renew-rt__way-desc">Paper forms & queues</span>
                                </div>
                                <div className="renew-rt__card-row">
                                    <img src={tickCircle} alt="" className="renew-rt__tick-circle" />
                                    <CiFileOn className='renew-rt__renew-icon' />
                                    <span className="renew-rt__way-desc">Paper forms & queues</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="renew-rt__motor-vehicles">
                    <div className="renew-rt__motor-vehicles-content">
                        <div className="renew-rt__motor-vehicles-heading">All Motor Vehicles</div>
                        <div className="renew-rt__motor-vehicles-desc">One platform for every type of vehicle</div>
                    </div>
                    <div className="renew-rt__motor-vehicles-grid">
                        <div className="renew-rt__motor-vehicle-box">
                            <div className="renew-rt__vehicle-image-box">
                                <img src={car} alt="car" />
                            </div>
                            <div className="renew-rt__vehicle-type">Cars</div>
                        </div>
                        <div className="renew-rt__motor-vehicle-box">
                            <div className="renew-rt__vehicle-image-box">
                                <img src={car} alt="car" />
                            </div>
                            <div className="renew-rt__vehicle-type">Cars</div>
                        </div>
                        <div className="renew-rt__motor-vehicle-box">
                            <div className="renew-rt__vehicle-image-box">
                                <img src={car} alt="car" />
                            </div>
                            <div className="renew-rt__vehicle-type">Cars</div>
                        </div>
                        <div className="renew-rt__motor-vehicle-box">
                            <div className="renew-rt__vehicle-image-box">
                                <img src={car} alt="car" />
                            </div>
                            <div className="renew-rt__vehicle-type">Cars</div>
                        </div>
                        <div className="renew-rt__motor-vehicle-box">
                            <div className="renew-rt__vehicle-image-box">
                                <img src={car} alt="car" />
                            </div>
                            <div className="renew-rt__vehicle-type">Cars</div>
                        </div>
                        <div className="renew-rt__motor-vehicle-box">
                            <div className="renew-rt__vehicle-image-box">
                                <img src={car} alt="car" />
                            </div>
                            <div className="renew-rt__vehicle-type">Cars</div>
                        </div>
                        <div className="renew-rt__motor-vehicle-box">
                            <div className="renew-rt__vehicle-image-box more">
                                <img src={more} alt="car" />
                            </div>
                            <div className="renew-rt__vehicle-type">More</div>
                        </div>
                    </div>
                </div>

                <div className="renew-rt__benifites-row">
                    <div className="renew-rt__benifit-block">
                        <div className="renew-rt__benifit-icon-block">
                            <FaStopwatch className='icon' />
                        </div>
                        <div className="renew-rt__benifit-content">
                            <div className="renew-rt__benifit-val">40 Sec</div>
                            <div className="renew-rt__benifit-title">Average Renewal</div>
                        </div>
                    </div>
                    <div className="renew-rt__benifit-block">
                        <div className="renew-rt__benifit-icon-block">
                            <TbDeviceMobileFilled className='icon' />
                        </div>
                        <div className="renew-rt__benifit-content">
                            <div className="renew-rt__benifit-val">40 Sec</div>
                            <div className="renew-rt__benifit-title">Average Renewal</div>
                        </div>
                    </div>
                    <div className="renew-rt__benifit-block">
                        <div className="renew-rt__benifit-icon-block">
                            <Ri24HoursLine className='icon' />
                        </div>
                        <div className="renew-rt__benifit-content">
                            <div className="renew-rt__benifit-val">40 Sec</div>
                            <div className="renew-rt__benifit-title">Average Renewal</div>
                        </div>
                    </div>
                    <div className="renew-rt__benifit-block">
                        <div className="renew-rt__benifit-icon-block">
                            <MdVerifiedUser className='icon' />
                        </div>
                        <div className="renew-rt__benifit-content">
                            <div className="renew-rt__benifit-val">40 Sec</div>
                            <div className="renew-rt__benifit-title">Average Renewal</div>
                        </div>
                    </div>
                </div>
            </div> */}
        </section>

    </>
}

export default ProductsEcosystem