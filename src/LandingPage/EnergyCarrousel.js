// src/components/EnergyCarousel.js
import React from "react";
import Slider from "react-slick";
import "../Styles/Landipage/energyCarrousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EnergyCarrousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Pantallas medianas (tabletas grandes y laptops)
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768, // Pantallas pequeñas (tabletas)
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480, // Celulares
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <section className="energy-carrousel">
      <Slider {...settings}>
        <div className="carrousel-logo"><img src="/assets/logo1.png" alt="Solar Capital" /></div>
        <div className="carrousel-logo"><img src="/assets/logo2.png" alt="EBR Energy" /></div>
        <div className="carrousel-logo"><img src="/assets/logo3.png" alt="ENF" /></div>
        <div className="carrousel-logo"><img src="/assets/logo4.png" alt="Advanced Energy" /></div>
      </Slider>
    </section>
  );
};

export default EnergyCarrousel;
