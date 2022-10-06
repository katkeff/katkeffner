import React from 'react';
import katImg from './assets/images/kat.png'
import './styles/about.css'

function AboutMe() {
  return (
    <section className="AboutMe">
      <div classname='katImg'>
        <img src={katImg} width="325" height="325" />
      </div>

    <div className='aboutmetxt'>
      <h2>Welcome!</h2>
      <p>Hi! My name is Kat and I am a software engineer from New York.</p>
      <p>I have a passion for innovation and creativity.</p>
      <p>I utilized my skills as a self-taught musician and graphic designer to teach myself how to code.</p>
      <p>To further grow as a developer, I attended a coding bootcamp: 
          <a href="https://www.gracehopper.com/"> The Grace Hopper Program.</a>
      </p>
      <p>Now, my ambition as a developer is to be a part of something meaningful, and bigger than myself.</p>
    </div>

    </section>
  );
}

export default AboutMe;
