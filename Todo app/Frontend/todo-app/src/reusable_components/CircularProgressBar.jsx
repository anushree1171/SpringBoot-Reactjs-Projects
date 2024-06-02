import React from "react";

// Import react-circular-progressbar module and styles
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


export default function CircularProgressBar({value}) {
  return (
    <>
      <div className="animated-progress-bar">
        <CircularProgressbar
            value={value}
            text={`${value}%`}
            strokeWidth={5}
          />
      </div>
    </>
  )
}
