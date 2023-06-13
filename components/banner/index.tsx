import React from "react";
import style from "./index.style.module.scss";

const Banner = () => {
  return (
    <div className={`${style.Banner} full-width gap-sm flex-c tw-mt-24`}>
      <div>
        <h1> Caseintervju frontendutvikler</h1>
        <p className="tag-text">Interaktiv presentasjon for Excite Tech AS.</p>
      </div>
      <div className={`flex-r wrap gap-sm align-center full-width`}>
        <span>Pål N. Bakken</span>
        <span className={`small-text`}>14/6/2023</span>
      </div>
    </div>
  );
};

export default Banner;
