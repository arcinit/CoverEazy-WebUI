import React from 'react'
import "./TrustedInsurers.scss";

import insurer1 from "./images/insurer-1.png"
import insurer2 from "./images/insurer-2.png"
import insurer3 from "./images/insurer-3.png"
import insurer4 from "./images/insurer-4.png"
import insurer5 from "./images/insurer-5.png"

const TrustedInsurers = () => {
  const insurers = [
    { id: 1, img: insurer1, name: "AmGeneral" },
    { id: 2, img: insurer2, name: "Berjaya Sompo" },
    { id: 3, img: insurer3, name: "Lonpac" },
    { id: 4, img: insurer4, name: "Generali" },
    { id: 5, img: insurer5, name: "Zurich" },
    { id: 6, img: insurer3, name: "MSIG" }
  ]

  return <>
    <section className="trusted-insu">
      <div className="trusted-insu__container">
        <div className="trusted-insu__heading">
          Trusted by over <span>250,000 Malaysians</span>
        </div>

        <div className="trusted-insu__logos-wrapper">
          <div className="trusted-insu__logos-track">
            {insurers?.map((insurer) => (
              <div className="trusted-insu__logo-item" key={insurer.id}>
                <img
                  src={insurer.img}
                  alt={insurer.name}
                  className="trusted-insu__logo-img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
}

export default TrustedInsurers