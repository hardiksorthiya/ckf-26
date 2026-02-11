import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './css/SectionContact.css';
import worldMapSvg from '../../assets/images/home/contact.svg';
import robotImage from '../../assets/images/home/robot_contact.webp';

const preHeading = 'Free Consultation';
const mainTitle = 'Book a Free Consultation';
const subtitle = 'If you are planning on developing a product landing';

const contactInfo = [
  {
    icon: 'pin',
    label: 'Location',
    value: 'Mau, Uttar Pradesh, India - 221603',
    href: null,
  },
  {
    icon: 'phone',
    label: 'Phone',
    value: '+91 965 079 2424',
    href: 'tel:+919650792424',
  },
  {
    icon: 'email',
    label: 'Email',
    value: 'info@cloudkodeform.com',
    href: 'mailto:info@cloudkodeform.com',
  },
];

function IconPin() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function IconEnvelope() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

function IconCloud() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
    </svg>
  );
}

function ContactIcon({ type }) {
  const className = 'section-contact__icon';
  if (type === 'pin') return <span className={className}><IconPin /></span>;
  if (type === 'phone') return <span className={className}><IconPhone /></span>;
  if (type === 'email') return <span className={className}><IconEnvelope /></span>;
  return null;
}

// Map SVG Background - Uses contact.svg file
function MapBackground() {
  return (
    <div className="section-contact__map-bg" aria-hidden>
      <img src={worldMapSvg} alt="" className="section-contact__map-img" />
    </div>
  );
}

function SectionContact() {
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="section-contact py-5">
      <Container>
        <Row>
          <Col lg={12} className="section-contact__robot-col mt-0">
            <div className="section-contact__robot-wrap">
              <img src={robotImage} alt="Contact Robot" className="section-contact__robot-img" />
            </div>
          </Col>
        </Row>
        <Row className="g-4 g-lg-5 align-items-stretch bg-contact-hp-sorath">
          <Col lg={6} className="section-contact__left-col mt-0">
            <MapBackground />
            <div className="section-contact__info">
              <p className="section-contact__preheading mb-2">{preHeading}</p>
              <h2 className="section-contact__title mb-2">{mainTitle}</h2>
              <p className="section-contact__subtitle mb-4">{subtitle}</p>
              <ul className="section-contact__list list-unstyled mb-0">
                {contactInfo.map((item) => (
                  <li key={item.label} className="section-contact__item">
                    <ContactIcon type={item.icon} />
                    {item.href ? (
                      <a href={item.href} className="section-contact__link">
                        {item.value}
                      </a>
                    ) : (
                      <span className="section-contact__text">{item.value}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          <Col lg={6} className="section-contact__form-col mt-0">
            
            <div className="section-contact__card shadow-sm">
              <Form onSubmit={handleSubmit}>
                <Row className="g-3">
                  <Col xs={12} sm={6}>
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      className="section-contact__input"
                      required
                    />
                  </Col>
                  <Col xs={12} sm={6}>
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      className="section-contact__input"
                      required
                    />
                  </Col>
                  <Col xs={12} sm={6}>
                    <Form.Control
                      type="email"
                      placeholder="E-mail"
                      className="section-contact__input"
                      required
                    />
                  </Col>
                  <Col xs={12} sm={6}>
                    <Form.Control
                      type="tel"
                      placeholder="Phone"
                      className="section-contact__input"
                    />
                  </Col>
                  <Col xs={12}>
                    <Form.Control
                      type="text"
                      placeholder="Reason for Inquiry"
                      className="section-contact__input"
                    />
                  </Col>
                  <Col xs={12}>
                    <Form.Control
                      as="textarea"
                      placeholder="Message"
                      rows={4}
                      className="section-contact__input section-contact__textarea"
                    />
                  </Col>
                  <Col xs={12}>
                    <Form.Group className="d-flex flex-wrap align-items-start gap-2">
                      <Form.Check
                        type="checkbox"
                        id="privacy-check"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="section-contact__checkbox"
                        required
                      />
                      <Form.Label htmlFor="privacy-check" className="section-contact__label mb-0">
                        I agree to CloudKodeForm&apos;s privacy terms.{' '}
                        <Link to="/privacy-policy" className="section-contact__policy-link">
                          You can read our Privacy Policy.
                        </Link>
                      </Form.Label>
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Button type="submit" className="section-contact__btn w-100 rounded-3">
                      Book A Consultation
                      <span className="section-contact__btn-icon" aria-hidden>
                        <IconCloud />
                      </span>
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SectionContact;
