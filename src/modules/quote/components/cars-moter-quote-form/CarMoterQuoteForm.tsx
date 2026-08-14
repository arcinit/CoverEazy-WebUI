import React, { useState } from 'react'
import { IoChevronDownOutline, IoCardOutline } from 'react-icons/io5'
import { FaArrowRight } from 'react-icons/fa'
import '../form.style.scss'
import { useNavigate } from 'react-router-dom'

const CarMotorForm = () => {
    const [ownership, setOwnership] = useState('Private')
    const [idType, setIdType] = useState('NRIC/ My Kad')
    const [maritalStatus, setMaritalStatus] = useState('Unmarried')
    const [vehicleReg, setVehicleReg] = useState('VAB 1234')
    const [idNumber, setIdNumber] = useState('1234 5678 9012')
    const [postcode, setPostcode] = useState('');
    const navigate=useNavigate();

    const handleSubmit = (e:any) => {
        e.preventDefault()
        navigate("/moters")
    }

    return (
        <form className="quote-form" onSubmit={handleSubmit}>
            <div className="quote-form__grid">
                {/* Ownership */}
                <div className="quote-form__form-group">
                    <label className="quote-form__input-label">
                        Ownership<span className="quote-form__input-required">*</span>
                    </label>
                    <div className="quote-form__input-wrap">
                        <select
                            className="quote-form__select"
                            value={ownership}
                            onChange={(e) => setOwnership(e.target.value)}
                        >
                            <option>Private</option>
                            <option>Company</option>
                        </select>
                        <IoChevronDownOutline className="quote-form__chevron icon" />
                    </div>
                </div>

                {/* Vehicle Reg */}
                <div className="quote-form__form-group">
                    <label className="quote-form__input-label">Vehicle Reg</label>
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

                {/* ID Type */}
                <div className="quote-form__form-group">
                    <label className="quote-form__input-label">ID Type</label>
                    <div className="quote-form__input-wrap">
                        <select
                            className="quote-form__select"
                            value={idType}
                            onChange={(e) => setIdType(e.target.value)}
                        >
                            <option>NRIC/ My Kad</option>
                            <option>Passport</option>
                        </select>
                        <IoChevronDownOutline className="quote-form__chevron icon" />
                    </div>
                </div>

                {/* ID Number */}
                <div className="quote-form__form-group">
                    <label className="quote-form__input-label">ID Number</label>
                    <div className="quote-form__input-wrap">
                        <input
                            type="text"
                            className="quote-form__input"
                            placeholder="eg. 1234 5678 9012"
                            value={idNumber}
                            onChange={(e) => setIdNumber(e.target.value)}
                        />
                    </div>
                </div>

                {/* Postcode */}
                <div className="quote-form__form-group">
                    <label className="quote-form__input-label">
                        Postcode<span className="quote-form__input-required">*</span>
                    </label>
                    <div className="quote-form__input-wrap">
                        <input
                            type="text"
                            className="quote-form__input"
                            placeholder="eg. 54320"
                            value={postcode}
                            onChange={(e) => setPostcode(e.target.value)}
                        />
                    </div>
                </div>

                {/* Marital Status */}
                <div className="quote-form__form-group">
                    <label className="quote-form__input-label">
                        Marital Status<span className="quote-form__input-required">*</span>
                    </label>
                    <div className="quote-form__input-wrap">
                        <select
                            className="quote-form__select"
                            value={maritalStatus}
                            onChange={(e) => setMaritalStatus(e.target.value)}
                        >
                            <option>Unmarried</option>
                            <option>Married</option>
                        </select>
                        <IoChevronDownOutline className="quote-form__chevron icon" />
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

export default CarMotorForm