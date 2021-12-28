import React, { useRef } from "react";
import { useEffect } from "react/cjs/react.development";
import classes from "./Circle.module.css";

export default function Circle() {
  const circleRef = useRef();

  //*Animation for the circle
  useEffect(()=>{
      circleRef.current.style.strokeDashoffset = "0"
      circleRef.current.style.transform = 'rotate(360deg)'
  })
  
  return (
    <svg>
      <circle
      ref={circleRef}
        className={classes.shape}
        cx="45"
        cy="45"
        r="40"
        strokeDasharray="1000"
        strokeDashoffset="1000"
      />
    </svg>
  );
}
