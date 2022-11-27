import React from "react";
import HoverImage from "react-hover-image";
import katImg from './assets/images/kat.png'
import katCool from './assets/images/katCool.png'

const KatPic: React.SFC = () => {
  return (
    <div>
      <HoverImage src={katImg} hoverSrc={katCool} />
    </div>
  );
};

export default KatPic;
