import React, { useState } from "react";
import "./FaqSection.scss";

interface FaqItem {
    question: string;
    answer: string;
}

const faqs: FaqItem[] = [
    {
        question: "How does insurance comparison work?",
        answer:
            "We pull live quotes from 20+ licensed Malaysian insurers based on your vehicle and driver details. Compare premiums, coverage, and benefits side-by-side in under 30 seconds.",
    },
    {
        question: "How fast are claims processed?",
        answer:
            "Most claims are reviewed within 24–48 hours. Dedicated case officers guide you through every step, from accident reporting to final settlement.",
    },
    {
        question: "Can I renew road tax through CoverEazy?",
        answer:
            "Yes. You can renew your road tax digitally in a few taps, and it's delivered straight to your doorstep — no branch visits needed.",
    },
    {
        question: "Is my data secure?",
        answer:
            "All your data is encrypted end-to-end and stored in compliance with Malaysia's Personal Data Protection Act (PDPA).",
    },
    {
        question: "What payment methods do you accept?",
        answer:
            "We accept FPX online banking, major credit and debit cards, e-wallets, and DuitNow payments.",
    },
    {
        question: "Which insurers do you work with?",
        answer:
            "We partner with over 20 BNM-licensed insurers across Malaysia, including both conventional and Takaful providers.",
    },
];

const PlusMinusIcon = ({ open }: { open: boolean }) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path
            d="M5 12h14"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
        />
        {!open && (
            <path
                d="M12 5v14"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
            />
        )}
    </svg>
);

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggle = (index: number) => {
        setOpenIndex((prev) => (prev === index ? -1 : index));
    };

    return (
        <section className="faq">
            <div className="faq__container">
                <span className="faq__eyebrow">FAQ</span>
                <h2 className="faq__heading">
                    <em>Everything</em> you need to know
                </h2>

                <div className="faq__list">
                    {faqs.map((item, index) => {
                        const isOpen = index === openIndex;
                        return (
                            <div
                                key={item.question}
                                className={`faq__item${isOpen ? " faq__item--open" : ""}`}
                            >
                                <button
                                    type="button"
                                    className="faq__trigger"
                                    onClick={() => toggle(index)}
                                    aria-expanded={isOpen}
                                >
                                    <span className="faq__question">{item.question}</span>
                                    <span className="faq__icon">
                                        <PlusMinusIcon open={isOpen} />
                                    </span>
                                </button>

                                {isOpen && <p className="faq__answer">{item.answer}</p>}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;