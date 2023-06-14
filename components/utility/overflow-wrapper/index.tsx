import React from "react";
import style from "./index.style.module.scss";

/**
 *
 * Part of the ongoing effort to accomodate the unedited HTML from the provided material.
 */
const OverflowWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className={style.OverflowWrapper}>{children}</div>;
};

export default OverflowWrapper;
