import React from "react";
import style from "./index.style.module.scss";

const OverflowWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className={style.OverflowWrapper}>{children}</div>;
};

export default OverflowWrapper;
