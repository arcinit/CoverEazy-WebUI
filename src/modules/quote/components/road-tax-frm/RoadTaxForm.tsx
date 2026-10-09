import React, { useState } from 'react'
import { IoCardOutline } from 'react-icons/io5'
import { FaArrowRight } from 'react-icons/fa'
import '../form.style.scss'
import { useNavigate } from 'react-router-dom'

const RoadTaxForm = () => {
    const [vehicleReg, setVehicleReg] = useState('VAB 1234')
    const navigate = useNavigate();

    const handleSubmit = (e:any) => {
        e.preventDefault();
        navigate("/road-tax")
    }

    return (
        <form className="quote-form" onSubmit={handleSubmit}>
            <div className="quote-form__grid quote-form__grid--single">
                {/* Vehicle Reg */}
                <div className="quote-form__form-group">
                    <label className="quote-form__input-label">
                        Vehicle Reg<span className="quote-form__input-required">*</span>
                    </label>
                    <div className="quote-form__input-wrap">
                        <IoCardOutline className="quote-form__input-icon icon" />
                        <input
                            type="text"
                            className="quote-form__input quote-form__input--with-icon"
                            placeholder="eg. VAB 1234"
                            value={vehicleReg}
                            onChange={(e) => setVehicleReg(e.target.value)}
                        />
                    </div>
                </div>

            </div>

            <div className="quote-form-actions">
                <button type="submit" className="quote-form__submit-btn">
                    Search
                    <FaArrowRight className="icon" />
                </button>
            </div>
        </form>
    )
}

export default RoadTaxForm