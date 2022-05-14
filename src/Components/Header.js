import React from "react";
import Carousel from 'react-bootstrap/Carousel'

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <a className="navbar-brand" href="https://magicmoon.netlify.app/">
          <img
            src="./assets/img/logo.png"
            height="60"
            alt="The magic moon logo"
            loading="lazy"
            class="rounded-pill"
          />
          <small>The Magic Moon</small>
        </a>
      </nav>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/img/carousel/1.jpg"
            alt="Astrological charts"
          />
          <Carousel.Caption>
            <h3>Astrological charts</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/img/carousel/2.jpg"
            alt="Online horoscope"
          />
          <Carousel.Caption>
            <h3>Online Horoscope</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/img/carousel/3.jpg"
            alt="Tarot"
          />
          <Carousel.Caption>
            <h3>Tarot </h3>
            <p>Would you like to know yourself in depth and understand your past, present and future?</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </>
  );
}

export default Header;
