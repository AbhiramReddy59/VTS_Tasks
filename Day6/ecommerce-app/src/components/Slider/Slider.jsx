import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styles from './Slider.module.css';
import slide1 from '../../assets/images/slide1.jpg';
import slide2 from '../../assets/images/slide2.jpg';
import slide3 from '../../assets/images/slide3.jpg';
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: slide1,
      title: 'New Arrivals',
      description: 'Check out our latest collection'
    },
    {
      id: 2,
      image: slide2,
      title: 'Summer Sale',
      description: 'Up to 50% off on selected items'
    },
    {
      id: 3,
      image: slide3,
      title: 'Special Offers',
      description: 'Limited time deals'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => 
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide(current => 
      current === slides.length - 1 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide(current => 
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  return (
    <div className={styles.slider}>
      <button 
        className={`${styles.arrow} ${styles.leftArrow}`} 
        onClick={prevSlide}
      >
        <FaArrowLeft />
      </button>

      <div className={styles.slide}>
        <img 
          src={slides[currentSlide].image} 
          alt={slides[currentSlide].title} 
        />
        <div className={styles.slideContent}>
          <h2>{slides[currentSlide].title}</h2>
          <p>{slides[currentSlide].description}</p>
        </div>
      </div>

      <button 
        className={`${styles.arrow} ${styles.rightArrow}`} 
        onClick={nextSlide}
      >
        <FaArrowRight />
      </button>

      <div className={styles.dots}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${currentSlide === index ? styles.active : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider; 