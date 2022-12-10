import React from 'react';
import './styles/about.css'
import kat from './assets/images/kat.png'
import katCool from './assets/images/katCool.png'
import { useState } from "react";

function AboutMe() {
  const [over, setOver] = useState(false);
  return (
    <section className="AboutMe">
      <div className="KatLogo"
      onMouseOver={() => setOver(true)}
      onMouseOut={() => setOver(false)}
      >
        <img
          src={over ? katCool : kat}
          alt={'insert cool pic of kat here'}
        />
    </div>   
    <div className='aboutmetxt'>
      <h2>Hello!</h2>
      <p>My name is Kat Keffner and I am a software engineer from New York.</p>
      <p>I have a passion for innovation and creativity.</p>
      <p>I utilized my skills as a self-taught musician and graphic designer to teach myself how to code.</p>
      <p>To further grow as a developer, I attended a coding bootcamp: 
          <a href="https://www.gracehopper.com/"> The Grace Hopper Program.</a>
      </p>
      <p>Now, my ambition as a developer is to be a part of something meaningful, and bigger than myself.</p>
      <p>Please check out my projects below, and let's get connected!</p>
    </div>
    </section>
  );
}

export default AboutMe;
