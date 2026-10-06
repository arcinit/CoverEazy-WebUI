import React, { useState } from "react";
import "./RatingSection.scss";
import { FaStar } from "react-icons/fa";

interface Testimonial {
    quote: string;
    name: string;
    role: string;
    initial: string;
}

const testimonials: Testimonial[] = [
    {
        quote:
            "Renewed my motor insurance and road tax in under 3 minutes. The doorstep delivery genuinely surprised me.",
        name: "Aisha Rahman",
        role: "Family Doctor · Kuala Lumpur",
        initial: "A",
    },
    {
        quote:
            "Compared 12 insurers, picked the best plan, and saved RM 380. The cleanest insurance experience in Malaysia.",
        name: "Zhi Wei Tan",
        role: "Software Engineer · Penang",
        initial: "Z",
    },
    {
        quote:
            "Submitted a claim through the app — approved within 36 hours, payout via DuitNow same day. Brilliant.",
        name: "Daniel Lim",
        role: "Small Business Owner",
        initial: "D",
    },
];

const RatingSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="rating">
            <div className="rating__container">
                <h2 className="rating__heading">
                    LOVED BY THOUSANDS OF <span className="rating__highlight">MALAYSIANS</span>
                </h2>

                <div className="rating__grid">
                    {testimonials.map((t) => (
                        <div className="rating__card" key={t.name}>
                            <div className="rating__stars">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className="rating__rating-star" />
                                ))}
                            </div>

                            <p className="rating__quote">&quot;{t.quote}&quot;</p>

                            <div className="rating__divider" />

                            <div className="rating__footer">
                                <span className="rating__avatar">{t.initial}</span>
                                <span className="rating__person">
                                    <strong className="rating__name">{t.name}</strong>
                                    <small className="rating__role">{t.role}</small>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="rating__pagination">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`rating__dot ${index === activeIndex ? 'rating__dot--active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RatingSection;