import React from 'react'
import "./TrustedInsurers.scss";

import insurer1 from "./images/insurer-1.png"
import insurer2 from "./images/insurer-2.png"
import insurer3 from "./images/insurer-3.png"
import insurer4 from "./images/insurer-4.png"
import insurer5 from "./images/insurer-5.png"
import { IoPeopleSharp } from 'react-icons/io5';

const TrustedInsurers = () => {
  const insurers = [
    insurer1, insurer2, insurer3, insurer4, insurer5, insurer3
  ]
  const metaData = [
    { label: "Happy Customers", val: "25,000+" },
    { label: "Average Rating", val: "4.9/5" },
    { label: "Insurance Partners", val: "25+" },
    { label: "Licensed", val: "BNM" },
    { label: "Secure & Trusted", val: "100%" },
    { label: "Customer Support", val: "24/7" }
  ]
  return <>

    <section className="trusted-insu">
      <div className="trusted-insu__heading">Trusted by <span>Leading Insurers</span></div>
      <div className="trusted-insu__insurers-grid">
        {
          insurers?.map((ins) => {
            return (
              <div className="trusted-insu__card">
                <img src={ins} alt="" className="trusted-insu__insurer-img" />
              </div>
            )
          })
        }
      </div>
      <div className="trusted-insu__meta-section">
        <div className="trusted-insu__meta-grid">
          {
            metaData?.map((meta) => {
              return (
                <div className="trusted-insu__meta-card">
                  <div className="trusted-insu__meta-icon-wrap">
                    <IoPeopleSharp className='icon'/>
                  </div>
                  <div className="trusted-insu__meta-info">
                    <div className="trusted-insu__meta-val">{meta.val}</div>
                    <div className="trusted-insu__meta-label">{meta.label}</div>
                  </div>
                </div>
              )
            })
          }

        </div>

      </div>
    </section>

  </>
}

export default TrustedInsurers