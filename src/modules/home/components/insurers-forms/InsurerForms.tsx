import React from 'react'
import './InsurerForms.scss'
import { Link } from 'react-router-dom'
import { FaCarSide } from 'react-icons/fa'
import { LuSparkles } from 'react-icons/lu'

const InsurerForms = () => (
    <section className="insu-forms-s" aria-label="Get an instant quote">
        <div className="insu-forms-s__form-card">
            <div className="insu-forms-s__card-heading">
                <div>
                    <h2 className="insu-forms-s__title">Get an Instant Quote</h2>
                    <p className="insu-forms-s__subtitle">
                        Compare 20+ insurers in under 30 seconds. No paperwork.
                    </p>
                </div>
                <span className="insu-forms-s__ai-badge">
                    <LuSparkles />
                    AI Powered
                </span>
            </div>

            <div className="insu-forms-s__quote-fields">
                <label className="insu-forms-s__field">
                    <span className="insu-forms-s__form-label">Vehicle Number</span>
                    <span className="insu-forms-s__input-wrapper">
                        <FaCarSide className="insu-forms-s__field-icon" />
                        <input
                            type="text"
                            className="insu-forms-s__form-input insu-forms-s__form-input--with-icon"
                            placeholder="e.g. VCS 8842"
                        />
                    </span>
                </label>
                <label className="insu-forms-s__field">
                    <span className="insu-forms-s__form-label">Vehicle Type</span>
                    <span className="insu-forms-s__input-wrapper">
                        <select className="insu-forms-s__form-input" defaultValue="Private Car">
                            <option>Private Car</option>
                            <option>Motorcycle</option>
                        </select>
                    </span>
                </label>
                <label className="insu-forms-s__field">
                    <span className="insu-forms-s__form-label">Existing Insurer</span>
                    <span className="insu-forms-s__input-wrapper">
                        <select className="insu-forms-s__form-input" defaultValue="Etiqa Takaful">
                            <option>Etiqa Takaful</option>
                            <option>Allianz</option>
                            <option>Zurich</option>
                            <option>Tokio Marine</option>
                        </select>
                    </span>
                </label>
                <label className="insu-forms-s__field">
                    <span className="insu-forms-s__form-label">NCD %</span>
                    <span className="insu-forms-s__input-wrapper">
                        <select className="insu-forms-s__form-input" defaultValue="55% (Max)">
                            <option>55% (Max)</option>
                            <option>45%</option>
                            <option>38.33%</option>
                            <option>30%</option>
                            <option>25%</option>
                            <option>0%</option>
                        </select>
                    </span>
                </label>
                <Link to="/get-quote" className="insu-forms-s__submit-btn">
                    Get Instant Quotes
                </Link>
            </div>

            <ul className="insu-forms-s__trust-list">
                <li>Smart autofill</li>
                <li>Plate recognition</li>
                <li>Instant preview</li>
                <li>Bank-grade encryption</li>
            </ul>
        </div>
    </section>
)

export default InsurerForms
