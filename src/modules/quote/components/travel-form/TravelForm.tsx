import React, { useState } from 'react'
import { IoSearchOutline, IoCalendarOutline } from 'react-icons/io5'
import { FaArrowRight } from 'react-icons/fa'
import '../form.style.scss'
import { useNavigate } from 'react-router-dom'

const tripTypes = [
    {
        value: 'Solo or Group',
        title: 'Solo or Group',
        desc: 'For individuals, friends & relatives travelling together',
    },
    {
        value: 'Family',
        title: 'Family',
        desc: 'For immediate family members travelling together',
    },
]

const TravelForm = () => {
    const [destination, setDestination] = useState('')
    const [departDate, setDepartDate] = useState('')
    const [returnDate, setReturnDate] = useState('')
    const [tripType, setTripType] = useState('Solo or Group')
    const navigate = useNavigate();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        navigate("/travel")
    }

    return (
        <form className="quote-form" onSubmit={handleSubmit}>
            <div className="quote-form__grid quote-form__grid--single">
                {/* Destination */}
                <div className="quote-form__form-group">
                    <label className="quote-form__input-label">
                        Destination<span className="quote-form__input-required">*</span>
                    </label>
                    <div className="quote-form__input-wrap">
                        <IoSearchOutline className="quote-form__input-icon icon" />
                        <input
                            type="text"
                            className="quote-form__input quote-form__input--with-icon"
                            placeholder="Select your destination"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="quote-form__grid" style={{ marginTop: 6 }}>
                {/* Depart Date */}
                <div className="quote-form__form-group">
                    <label className="quote-form__input-label">
                        Depart Date<span className="quote-form__input-required">*</span>
                    </label>
                    <div className="quote-form__input-wrap">
                        <input
                            type="text"
                            className="quote-form__input"
                            placeholder="yyyy-mm-dd"
                            value={departDate}
                            onChange={(e) => setDepartDate(e.target.value)}
                        />
                        <IoCalendarOutline className="quote-form__calendar-icon icon" />
                    </div>
                </div>

                {/* Return Date */}
                <div className="quote-form__form-group">
                    <label className="quote-form__input-label">
                        Return Date<span className="quote-form__input-required">*</span>
                    </label>
                    <div className="quote-form__input-wrap">
                        <input
                            type="text"
                            className="quote-form__input"
                            placeholder="yyyy-mm-dd"
                            value={returnDate}
                            onChange={(e) => setReturnDate(e.target.value)}
                        />
                        <IoCalendarOutline className="quote-form__calendar-icon icon" />
                    </div>
                </div>

                {/* Trip type */}
                {tripTypes.map((option) => (
                    <button
                        key={option.value}
                        type="button"
                        className={`quote-form__option-card${tripType === option.value ? ' active' : ''}`}
                        onClick={() => setTripType(option.value)}
                    >
                        <p className="quote-form__option-card-title">{option.title}</p>
                        <p className="quote-form__option-card-desc">{option.desc}</p>
                    </button>
                ))}
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

export default TravelForm