import React, { useState } from "react";
import "./styles/mainContent.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function MainContent() {
  const imageArray = [
    "https://lumiere-a.akamaihd.net/v1/images/retina--2000-x-835_80c07de4.jpeg?region=0,0,2000,835",

    "https://lumiere-a.akamaihd.net/v1/images/cover-2000-x-835_1_e15da45d.png?region=0,0,2000,835",

    "https://lumiere-a.akamaihd.net/v1/images/disneyjr-memorablemoments-cover-2000x835-08-12-20_1_dd1b7dff.jpeg?region=0,0,2001,836",

    "https://lumiere-a.akamaihd.net/v1/images/djindia_2000x835_d73d9379.jpeg?region=0,0,2000,835",
  ];

  const [count, setCount] = useState(0);

  return (
    <div className="mainContent">
      <div className="image-box">
        <img src={imageArray[count]} alt="" />
        <div className="buttons">
          <button
            onClick={() => {
              if (count > 0) setCount(count - 1);
              else setCount(imageArray.length - 1);
            }}
          >
            <KeyboardArrowLeftIcon />
          </button>
          <button
            className="right"
            onClick={() => {
              if (count < imageArray.length - 1) setCount(count + 1);
              else setCount(0);
            }}
          >
            <KeyboardArrowRightIcon />
          </button>
        </div>
        {console.log(count)}
      </div>
    </div>
  );
}
