import React from "react";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          Home<span>School</span>
        </h3>
        <p className="footer-company-name">HomeSchool &copy; 2020</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>Av. Chapultepec Sur 284</span> Guadalajara, Jalisco
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+52 33 31 32 33 34</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="/">contacto@homeschool.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>Acerca de Home School</span>
          Home School es la aplicación perfecta para <br /> organizar la vida escolar
          desde casa.
        </p>

        <div className="footer-icons">
          <a href="/#">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="/#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="/#">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="/#">
            <i className="fa fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
