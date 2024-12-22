import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import s1 from '../assets/s1.jpg';
import s2 from '../assets/s2.jpg';
import cloud1 from '../assets/cloud1.png';
import cloud2 from '../assets/cloud2.png';
// import balloon from '../assets/balloon.png';

const Slider = () => {
  const slides = [
    {
      backgroundImage: `url(${s1})`,
      title: 'Welcome to Our World',
      description: 'Discover the beauty and adventure awaiting you.',
      buttonText: 'Explore Now',
      buttonLink: '/explore',
    },
    {
      backgroundImage: `url(${s2})`,
      title: 'Your Dream Awaits',
      description: 'Start your journey with us today.',
      buttonText: 'Get Started',
      buttonLink: '/get-started',
    },
  ];
// animated elements
  const animatedElements = [
    {
      src: cloud1,
      alt: 'Cloud 1',
      className: 'absolute top-10 left-10 w-20 md:w-32 animate-float',
      style: { animationDuration: '6s' },
    },
    {
      src: cloud2,
      alt: 'Cloud 2',
      className: 'absolute top-10 right-10 w-24 md:w-36 animate-float-reverse',
      style: { animationDuration: '7s' },
    },
    // {
    //   src: balloon,
    //   alt: 'Balloon 1',
    //   className: 'absolute bottom-20 left-1/4 w-16 md:w-24 animate-rise',
    //   style: { animationDuration: '5s' },
    // },
    // {
    //   src: balloon,
    //   alt: 'Balloon 2',
    //   className: 'absolute top-1/2 right-1/4 transform -translate-y-1/2 w-20 md:w-28 animate-rise-slow',
    //   style: { animationDuration: '8s' },
    // },
    {
      src: cloud1,
      alt: 'Cloud 3',
      className: 'absolute bottom-10 left-10 w-24 md:w-36 animate-float',
      style: { animationDuration: '7s' },
    },
  ];
  

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: slide.backgroundImage }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-4xl md:text-6xl text-white font-bold mb-4 animate-fadeInDown">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl text-white mb-6 animate-fadeInUp">
              {slide.description}
            </p>
            <Link
              to={slide.buttonLink}
              className="px-6 py-3 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition-transform duration-300 animate-bounce"
            >
              {slide.buttonText}
            </Link>
          </div>
        </div>
      ))}

      {/* Animated Clouds and Balloons */}
      {animatedElements.map((element, index) => (
        <img
          key={index}
          src={element.src}
          alt={element.alt}
          className={element.className}
          style={element.style}
        />
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        &larr;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        &rarr;
      </button>
    </div>
  );
};

export default Slider;