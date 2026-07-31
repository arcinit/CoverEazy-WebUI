import React from 'react'
import "./ProductsEcosystem.scss"
import { FaArrowRight, FaStopwatch } from 'react-icons/fa'
import { CiFileOn, CiLock, CiPlay1 } from "react-icons/ci";
import product1Image from "./images/product1.png";
import product2Image from "./images/product2.png";
import product3Image from "./images/product3.png";
import product4Image from "./images/product4.png";
import { LuZap } from 'react-icons/lu';

import tickCircle from "./images/tick-circle.png"
import closeCircle from "./images/close-circle.png"
import car from "./images/car.png"
import more from "./images/more.png"
import { GoShieldCheck } from "react-icons/go";
import { IoWatch } from 'react-icons/io5';
import { TbDeviceMobileFilled } from "react-icons/tb";
import { Ri24HoursLine } from "react-icons/ri";
import { MdVerifiedUser } from 'react-icons/md';

const ProductsEcosystem = () => {

    const products = [
        {
            id: 1, img: product1Image,
            type: "moter_insurance", class: "m-insurance", title: "Motor Insurance",
            desc: "Single-trip and annual plans for 180+ destinations."
        },
        {
            id: 1, img: product2Image,
            type: "travel_insurance", class: "t-insurance", title: "Travel Insurance",
            desc: "Single-trip and annual plans for 180+ destinations."
        },
        {
            id: 1, img: product3Image,
            type: "road_tax", class: "t-tax", title: "Road Tax Renewal",
            desc: "Single-trip and annual plans for 180+ destinations."
        },
        {
            id: 1, img: product4Image,
            type: "claims", class: "claims", title: "Claims",
            desc: "Single-trip and annual plans for 180+ destinations."
        },

    ]

    return <>

        <section className="pes">
            <div className="pes__header">
                <p className="pes__heading">PRODUCTS ECOSYSTEM</p>
                <h1 className="pes__title">Insurance for <span> every journey</span></h1>
                <p className="pes__subtitle">From your first car to your family's future — explore protection plans built for the Malaysian lifestyle.</p>
            </div>
            <div className="pes__products-grid">
                {
                    products?.map((product) => {
                        return (
                            <div className={`pes__product-card ${product.class}`}>
                                <div className="pes__product-info">
                                    <div className="pes__p-title">{product.title}</div>
                                    <div className="pes__p-text">{product.desc}</div>
                                    <button className="pes__card-action-btn">Get quote <FaArrowRight className='icon' /></button>
                                </div>
                                <div className="pes__product-image-wrap">
                                    <img src={product.img} className="pes__product-img"></img>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="renew-rt">
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
            </div>
        </section>

    </>
}

export default ProductsEcosystem