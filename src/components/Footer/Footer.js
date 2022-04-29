import React from "react";
import "./Footer.css";
export const Footer = () => {
  return (
    <div>
      {" "}
      <footer>
        <section className="contact" id="contact">
          <div className="title">
            <h2 className="titleText">
              <span>C</span>ontact Us
            </h2>
          </div>
          <div className="contactForm">
            <h3>Send Message</h3>
            <div className="inputBx">
              <input type="text" name="" placeholder="Name" />
            </div>
            <div className="inputBx">
              <input type="text" name="" placeholder="Email" />
            </div>
            <div className="inputBx">
              <textarea placeholder="Message"></textarea>
            </div>
            <div className="inputBx">
              <input type="submit" value="Send" />
            </div>
          </div>
        </section>
        <div className="copyrightText">
          <p>
            Copyright © 2022 <a href="/">By Sangeetha</a>
          </p>
        </div>
      </footer>
    </div>
  );
};
