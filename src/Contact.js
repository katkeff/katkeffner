import React from "react";
import './styles/contact.css'
import resume from './assets/Kat-Keffner-Resume.pdf'
import { Instagram, Linkedin, Github, EnvelopePaperHeart, MusicNoteBeamed, FilePerson } from 'react-bootstrap-icons';

function Contact() {
  return (
      <div className="icons">
        <h2 className="title">Let's connect!</h2>
        <a href={"https://www.linkedin.com/in/kkeffner/"}>
          <Linkedin className="linkedin" />
        </a>
        <a href={"https://github.com/katkeff"}>
          <Github className="github" />
        </a>
        <a href={resume}>
          <FilePerson className='fileperson' />
        </a>
        <a href={"mailto: kat.keffner@gmail.com"}>
          <EnvelopePaperHeart className="mail" />
        </a>
        <a href={"http://instagram.com/katkeff"}>
          <Instagram className="instagram" />
        </a>
        <a href={"https://linktr.ee/katkeff"}>
          <MusicNoteBeamed className="music" />
        </a>
    </div>
  )
}

export default Contact;
