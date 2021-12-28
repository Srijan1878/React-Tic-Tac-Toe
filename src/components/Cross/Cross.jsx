import React, { useEffect, useRef } from "react";
import { crossStyles } from "../../constantStyles";
import classes from "./Cross.module.css";

export default function Cross() {
  const leftRef = useRef();
  const rightRef = useRef();
  useEffect(() => {
    leftRef.current.style.width = crossStyles;
    rightRef.current.style.width = crossStyles;
  }, []);
  return (
    <>
      <div className={classes.leftSegment} ref={leftRef}></div>
      <div className={classes.rightSegment} ref={rightRef}></div>
    </>
  );
}
