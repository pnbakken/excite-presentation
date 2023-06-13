import React from "react";
import style from "./index.style.module.scss";
import Link from "next/link";

const Banner = () => {
  return (
    <div
      className={`${style.Banner} full-width justify-center gap-sm flex-c tw-mt-24`}
    >
      <div className="flex-r wrap">
        <div>
          <h1> Caseintervju frontendutvikler</h1>
          <p className="tag-text">
            Interaktiv presentasjon for Excite Tech AS.
          </p>
        </div>
        <div className={`flex-r wrap gap-sm align-center full-width`}>
          <span>Pål N. Bakken</span>
          <span className={`small-text`}>14/6/2023</span>
        </div>
      </div>
      <div>
        <Link className="pseudo-button" href="/svar">
          Se svar
        </Link>
      </div>
    </div>
  );
};

export default Banner;
