import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './css/SectionAbout.css';
import aboutImage from '../../assets/images/home/about.webp';
import aboutShape from '../../assets/images/home/about_shape 1.svg';

function SectionAbout() {
  return (
    <section className="section-about py-5">
      <div className="section-about__wrap">
        <Row className="align-items-center g-4 g-lg-5">
          <Col md={6} lg={6} className="section-about__visual order-2 order-md-1 ps-lg-0 mt-0">
            <div className="section-about__visual-inner">
              <img src={aboutImage} alt="About Us" className="section-about__visual-img" />
            </div>
          </Col>
          <Col md={6} lg={6} className="section-about__content order-1 order-md-2 mt-0">
            <Container className="ps-lg-4 pe-lg-3">
            <p className="section-about__label mb-1">ABOUT</p>
            <h2 className="section-about__subtitle mb-2">Who We Are</h2>
            <h2 className="section-about__heading mb-3">
              Innovative IT Solutions for Digital Growth & Cloud Transformation
            </h2>
            <p className="section-about__text mb-4">
              CloudKodeForm Technologies is a modern technology partner helping businesses build, scale, and secure their digital ecosystem. We specialize in cloud-first solutions, custom software development, and intelligent automation that drive measurable business growth.
            </p>
            <Link to="/contact" className="primary-btn">
              Book A Consultation
              <span className="primary-btn__icon" aria-hidden>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                </svg>
              </span>
            </Link>
            <div className="section-about__shape-wrap" aria-hidden>
              <img src={aboutShape} alt="" className="section-about__shape" />
            </div>
            </Container>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default SectionAbout;
