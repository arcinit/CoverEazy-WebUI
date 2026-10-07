import { useState } from "react";
import "./RatingSection.scss";
import starIcon from "./images/star.svg";
import aisha from "./images/aisha-rahman.png";
import zhiWei from "./images/zhi-wei-tan.png";
import daniel from "./images/daniel-lim.png";

interface Testimonial {
    quote: string;
    name: string;
    role: string;
    avatar: string;
}

const testimonials: Testimonial[] = [
    {
        quote: "“Renewed my motor insurance and road tax in under 3 minutes. The doorstep delivery genuinely surprised me!”",
        name: "Aisha Rahman",
        role: "Family Doctor, Kuala Lumpur",
        avatar: aisha,
    },
    {
        quote: "“Compared 12 insurers, picked the best plan, and saved RM380. The cleanest insurance experience in Malaysia.”",
        name: "Zhi Wei Tan",
        role: "Software Engineer, Penang",
        avatar: zhiWei,
    },
    {
        quote: "“Submitted a claim through the app, approved within 36 hours, payout via DuitNow same day. Brilliant!”",
        name: "Daniel Lim",
        role: "Small Business Owner",
        avatar: daniel,
    },
];

const DOT_COUNT = 5;

const RatingSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="rating">
            <div className="rating__container">
                <h2 className="rating__heading">LOVED BY THOUSANDS OF MALAYSIANS</h2>

                <div className="rating__grid">
                    {testimonials.map((t) => (
                        <article className="rating__card" key={t.name}>
                            <div className="rating__stars">
                                {[...Array(5)].map((_, i) => (
                                    <img key={i} src={starIcon} alt="" className="rating__star" />
                                ))}
                            </div>

                            <p className="rating__quote">{t.quote}</p>

                            <div className="rating__footer">
                                <img className="rating__avatar" src={t.avatar} alt={t.name} />
                                <span className="rating__person">
                                    <strong className="rating__name">{t.name}</strong>
                                    <span className="rating__role">{t.role}</span>
                                </span>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="rating__pagination">
                    {Array.from({ length: DOT_COUNT }).map((_, index) => (
                        <button
                            key={index}
                            className={`rating__dot ${index === activeIndex ? "rating__dot--active" : ""}`}
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
