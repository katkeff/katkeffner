import React from "react";
import "../styles/contact.css";
import resume from "../assets/Kat-Keffner-Resume.pdf";
import {
  Instagram,
  Linkedin,
  Github,
  EnvelopePaperHeart,
  MusicNoteBeamed,
  FilePerson,
} from "react-bootstrap-icons";

function Contact() {
  return (
    <div className="container">
      <h2>Let's connect!</h2>
      <p>
        Down to work together? Talk coding bootcamp? Music? I'd love to hear
        from you!{" "}
      </p>
      <div className="iconContainer">
        <a href={"https://www.linkedin.com/in/kkeffner/"}>
          <Linkedin className="icon" />
        </a>
        <a href={"https://github.com/katkeff"}>
          <Github className="icon" />
        </a>
        <a href={resume}>
          <FilePerson className="icon" />
        </a>
        <a href={"mailto: kat.keffner@gmail.com"}>
          <EnvelopePaperHeart className="icon" />
        </a>
        <a href={"http://instagram.com/katkeff"}>
          <Instagram className="icon" />
        </a>
        <a href={"https://linktr.ee/katkeff"}>
          <MusicNoteBeamed className="icon" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
