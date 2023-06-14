import React from "react";
import style from "./index.style.module.scss";

const Footer = () => {
  return (
    <footer
      className={`${style.Footer} tw-p-3 tw-mt-5 full-width top-level-indent`}
    >
      <div className="full-width xl-component-width">
        <a href="https://pnbakken.no">pnb</a>
      </div>
    </footer>
  );
};

export default Footer;
