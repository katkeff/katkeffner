import React from 'react';
import KatPic from './KatPic';
import './styles/about.css'

function AboutMe() {
  return (
    <section className="AboutMe">
      <KatPic />
    <div className='aboutmetxt'>
      <h2>Hello!</h2>
      <p>My name is Kat and I am a software engineer from New York.</p>
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
