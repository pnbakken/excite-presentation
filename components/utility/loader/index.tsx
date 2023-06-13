import React from "react";
import style from "./index.style.module.scss";

const Loader = () => {
  return (
    <div
      className={`full-width full-height flex-c align-center justify-center`}
    >
      <div className={`${style.Loader}`} />
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
