import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carrusel.css';

const Carrusel = () => {
  const logos = [
  '/Logo1.png',
  '/Logo2.png',
  '/Logo3.png',
  '/Logo4.png',
];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="carrusel-container">
      <h2 className="carrusel-title">Companies supplying</h2>
      <Slider {...settings}>
        {logos.map((src, index) => (
          <div key={index} className="logo-slide">
            <img src={src} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carrusel;
