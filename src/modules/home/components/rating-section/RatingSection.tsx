import React from "react";
import "./RatingSection.scss";
import { MdOutlineStarPurple500 } from "react-icons/md";

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
    return (
        <section className="rating">
            <div className="rating__container">
                <span className="rating__eyebrow">Trusted by Malaysians</span>

                <h2 className="rating__heading">
                    250,000+ <em>policies.</em> 4.9
                    <MdOutlineStarPurple500 className="star" />
                    rating.
                </h2>

                <div className="rating__grid">
                    {testimonials.map((t) => (
                        <div className="rating__card" key={t.name}>
                            <div className="rating__stars">
                                <MdOutlineStarPurple500  className="rating__rating-star"/>
                                <MdOutlineStarPurple500 className="rating__rating-star" />
                                <MdOutlineStarPurple500 className="rating__rating-star" />
                                <MdOutlineStarPurple500 className="rating__rating-star" />
                                <MdOutlineStarPurple500 className="rating__rating-star" />
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
            </div>
        </section>
    );
};

export default RatingSection;