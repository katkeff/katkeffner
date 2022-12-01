import React from "react";
import './styles/contact.css'
import { Instagram, Linkedin, Github, EnvelopePaperHeart } from 'react-bootstrap-icons';

function Contact() {
  return (
      <div className="icons">
        <h2 className="title">Let's connect!</h2>
        <a href={"http://instagram.com/katkeff"}>
          <Instagram className="instagram" />
        </a>
        <a href={"https://www.linkedin.com/in/kkeffner/"}>
          <Linkedin className="linkedin" />
        </a>
        <a href={"https://github.com/katkeff"}>
          <Github className="github" />
        </a>
        <a href={"mailto: kat.keffner@gmail.com"}>
          <EnvelopePaperHeart className="mail" />
        </a>
    </div>
  )
}

export default Contact;
