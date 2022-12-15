import React from 'react';
import kat from '../assets/images/kat.png'
import katCool from '../assets/images/katCool.png'
import { useState } from "react";
import '../styles/about.scss'

function AboutMe() {
  const [over, setOver] = useState(false);
  return (
    <div className="aboutcontainer">  
      <div className='aboutmetxt'>
      <div class="center">
  <h1 class="center__text glitch is-glitching" data-text="Hi, I'm Kat!">Hi, I'm Kat!</h1>
</div>
        <p>I'm a Full Stack Developer from New York.</p>
        <p>I have a passion for innovation and creativity.</p>
        <p>I utilized my skills as a self-taught musician and graphic designer to teach myself how to code.</p>
        <p>To further grow as a developer, I attended a coding bootcamp: 
            <a href="https://www.gracehopper.com/"> The Grace Hopper Program.</a>
        </p>
        <p>Now, my ambition as a developer is to be a part of something meaningful, and bigger than myself.</p>
        <p>Please check out my portfolio below, and let's get connected!</p>
      <div className="KatLogo"
      onMouseOver={() => setOver(true)}
      onMouseOut={() => setOver(false)}
      >
        <img
          src={over ? katCool : kat}
          alt={'insert cool pic of kat here'}
        />
      </div>
      </div>
    </div>
  );
}

export default AboutMe;
