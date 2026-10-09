import React from "react";
import { createRoot } from "react-dom/client";
import "../../../../styles/style.scss";
import ClaimDetails from "./ClaimDetails";
const s = document.createElement("style");
s.textContent = ".pv{background:#f8fafd;min-height:100vh;padding:178px 0 0;font-family:Inter,sans-serif}.pv *{font-family:Inter,sans-serif!important}.pv-c{max-width:1240px;margin:0 auto;padding:0 0}@media(max-width:1280px){.pv-c{padding:0 16px}}";
document.head.appendChild(s);
createRoot(document.getElementById("root")!).render(<div className="pv"><div className="pv-c"><ClaimDetails onBack={() => {}} /></div></div>);
