import React from 'react'
import "./InsurerForms.scss"
import CheckBox from '../../../../shared/ui/check-box/CheckBox'
import { FaArrowRight, FaInfoCircle, FaChevronDown } from 'react-icons/fa'
import { LuSparkles, LuClock } from 'react-icons/lu'
import { MdDirectionsCar } from 'react-icons/md'

const InsurerForms = () => {
    return <>

        <section className="insu-forms-s">
            <div className="insu-forms-s__heading">One intelligent surface for <span>every quote</span> you need.</div>
            <div className="insu-forms-s__subheading">Switch between products instantly. Real partner pricing, transparent breakdowns, no inbox follow-ups.</div>
            <div className="insu-forms-s__form-card-outer">

           
            <div className="insu-forms-s__form-card">
                <div className="insu-forms-s__tabs">
                    <button className="insu-forms-s__tab active">Motor Insurance</button>
                    <button className="insu-forms-s__tab">Travel Insurance</button>
                    <button className="insu-forms-s__tab">Road Tax Renewal</button>
                </div>
                <form action="" className="insu-forms-s__form">
                    <div className="insu-forms-s__form-grid-row">
                        <div className="insu-forms-s__form-group">
                            <div className="insu-forms-s__form-label">Ownership <span>*</span></div>
                            <div className="insu-forms-s__input-wrapper insu-forms-s__input-wrapper--select">
                                <select className="insu-forms-s__form-input">
                                    <option>Private</option>
                                </select>
                                <FaChevronDown className="insu-forms-s__select-icon" />
                            </div>
                        </div>
                        <div className="insu-forms-s__form-group">
                            <div className="insu-forms-s__form-label">Vehicle Reg. <span>*</span></div>
                            <div className="insu-forms-s__input-wrapper">
                                <MdDirectionsCar className="insu-forms-s__field-icon" />
                                <input type="text" className="insu-forms-s__form-input insu-forms-s__form-input--with-icon" defaultValue="VAB 1234" />
                            </div>
                        </div>
                        <div className="insu-forms-s__form-group">
                            <div className="insu-forms-s__form-label">ID Type <span>*</span></div>
                            <div className="insu-forms-s__input-wrapper insu-forms-s__input-wrapper--select">
                                <select className="insu-forms-s__form-input">
                                    <option>NRIC/ My Kad</option>
                                </select>
                                <FaChevronDown className="insu-forms-s__select-icon" />
                            </div>
                        </div>
                    </div>
                    <div className="insu-forms-s__form-grid-row">
                        <div className="insu-forms-s__form-group">
                            <div className="insu-forms-s__form-label">ID Number <span>*</span></div>
                            <div className="insu-forms-s__input-wrapper">
                                <input type="text" className="insu-forms-s__form-input" defaultValue="1234 5678 9012" />
                            </div>
                        </div>
                        <div className="insu-forms-s__form-group">
                            <div className="insu-forms-s__form-label">Postcode <span>*</span></div>
                            <div className="insu-forms-s__input-wrapper">
                                <input type="text" className="insu-forms-s__form-input" placeholder="eg. 54320" />
                            </div>
                        </div>
                        <div className="insu-forms-s__form-group">
                            <div className="insu-forms-s__form-label">Martial Status <span>*</span></div>
                            <div className="insu-forms-s__input-wrapper insu-forms-s__input-wrapper--select">
                                <select className="insu-forms-s__form-input">
                                    <option>Unmarried</option>
                                </select>
                                <FaChevronDown className="insu-forms-s__select-icon" />
                            </div>
                        </div>
                    </div>

                    <div className="insu-forms-s__row-two">
                        <div className="insu-forms-s__checkbox-group">
                            <CheckBox />
                            <span className="insu-forms-s__checkbox-instruction">My vehicle is not used for, and has no history of e-hailing.</span>
                            <FaInfoCircle />
                        </div>
                        <button className="insu-forms-s__submit-btn">
                            Get Quote <FaArrowRight className='icon' />
                        </button>
                    </div>
                </form>

                <div className="insu-forms-s__covereazy-message-box">
                    <div className="insu-forms-s__message"><LuSparkles className='icon' /><b>CoverEazy AI</b>&nbsp;matches you with 12 licensed insurers in under 30 seconds.</div>
                    <div className="insu-forms-s__covereazy-avg-sec"><LuClock className='icon' />Avg quote · 22s</div>
                </div>
            </div>
            </div>
        </section>

    </>
}

export default InsurerForms