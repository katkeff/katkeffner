import React from "react";
import katImg from './assets/images/kat.png'
import katCool from './assets/images/katCool.png'
import { useState } from "react";

const KatPic = () =>  {
  const [over, setOver] = useState(false);
  return (
    <div
      onMouseOver={() => setOver(true)}
      onMouseOut={() => setOver(false)}
    >
        <img
          src={over ? katCool : katImg}
          alt={'insert cool pic of kat here'}
        />
    </div>   
  )
  }

export default KatPic
