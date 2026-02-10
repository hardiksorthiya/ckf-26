import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './css/Hero.css';

import hero1 from '../../assets/images/home/ckf-hero-1.webp';
import hero2 from '../../assets/images/home/ckf-hero-2.webp';
import hero3 from '../../assets/images/home/ckf-hero-3.webp';

const slides = [
  { id: 1, image: hero1 },
  { id: 2, image: hero2 },
  { id: 3, image: hero3 },
];

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-80-hp py-lg-10-hp bg-hp-sorath d-flex align-items-center min-vh-50">
      <Container>
        <Row className="g-4 g-lg-4 align-items-center flex-column-reverse flex-lg-row">
          <Col xl={4} lg={5} className="text-lg-start text-center">
            <h1 className="display-5 fw-medium text-primary-color mb-3 lh-sm">
              Boost your cloud journey with our certified teams.
            </h1>
            <p className="text-secondary mb-4 fs-6 mx-auto mx-lg-0" style={{ maxWidth: '28rem' }}>
            Our team of skilled and motivated experts is committed to achieving excellence in every project. 
            </p>
            <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start">
              <Link to="/contact" className="primary-btn">
                Book A Consultation
                <span className="primary-btn__icon" aria-hidden>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                  </svg>
                </span>
              </Link>
              <Link to="/about" className="primary-btn">
                About Us
              </Link>
            </div>
          </Col>

          <Col xl={8} lg={7}>
            <div className="overflow-hidden hero-slider br-30-hp">
              <div className="position-relative hero-slider__track">
                <img
                  src={slides[activeIndex].image}
                  alt=""
                  className="w-100 rounded-3 hero-slider__sizer"
                  aria-hidden
                />
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`position-absolute top-0 start-0 w-100 h-100 hero-slide rounded-3 ${index === activeIndex ? 'hero-slide--active' : ''} ${index < activeIndex ? 'hero-slide--prev' : ''} ${index > activeIndex ? 'hero-slide--next' : ''}`}
                  >
                    <img
                      src={slide.image}
                      alt=""
                      className="w-100 h-100 rounded-3 d-block hero-slide__img"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="d-flex justify-content-center gap-2 mt-3 hero-dots">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`hero-dot border-0 rounded-circle p-0 ${index === activeIndex ? 'hero-dot--active' : ''}`}
                  style={{ width: '10px', height: '10px' }}
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
