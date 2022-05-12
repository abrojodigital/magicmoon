import React from "react";
import Carousel from 'react-bootstrap/Carousel'

function Header() {
  return (
    <>

      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="https://abrojodigital.com">
          <img
            src="./assets/img/logo.png"
            height="60"
            alt="The magic moon logo"
            loading="lazy"
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
      <h1 className="text-center">Astrology and Tarot</h1>
      <p className="text-center">
      Do you know what characteristics your personality has? Do you know what's in store for your future? The moon will give you a guide for your life
      </p>

    </>
  );
}

export default Header;
