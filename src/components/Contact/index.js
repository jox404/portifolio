import React from "react";
import "./style/contact.css";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";

const Contact = (props) => {
  return (
    <div className="contactContainer">
      <div className="contact">
        <h1>Contato</h1>
        <div className="contactListLinks">
          <a href="https://www.linkedin.com/in/joaocosta105/" target="_blank">
            <FaLinkedinIn color="#8be9fd" size={30} />
          </a>
          <a href="https://wa.me/11987984340" target={"_blank"}>
            <AiOutlineWhatsApp color="#50fa7b" size={30} />
          </a>
          <a href="https://github.com/jox404" target={"_blank"}>
            <AiFillGithub color="#f8f8f2" size={30} />
          </a>
        </div>
        <div className="contactList">
          {/* <p>11-987984340 || Joaovitorribeiroc1@gmail.com</p> */}
          <p>Email: Joaovitorribeiroc1@gmail.com</p>
          <p>Telefone: (11) 987984340</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
