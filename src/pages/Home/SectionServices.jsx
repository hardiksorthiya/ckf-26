import { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './css/SectionServices.css';
import mapSvg from '../../assets/images/home/world-map.svg';
import servicesCloudIcon from '../../assets/images/home/service.png';

// Inner circle (4 items): Protect & Backup, Business Hosting, Cloud, (one more)
const innerCircleServices = [
  { label: 'Protect & Backup', color: 'green', icon: 'shield', angle: -100 }, // top-left
  { label: 'Business Hosting', color: 'red', icon: 'building', angle: -28 }, // top-right
  { label: 'Cloud', color: 'purple-light', icon: 'cloud', angle: 25 }, // bottom-right
  { label: 'AI', color: 'red', icon: 'ai', angle: 76 }, // bottom-left
];

// Outer circle (5 items): Fast Deployment, VPS, Email, Graphics, Marketing
const outerCircleServices = [
  { label: 'Fast Deployment', color: 'red', icon: 'deploy', angle: -90 }, // top
  { label: 'VPS', color: 'purple', icon: 'servers', angle: -54 }, // 
  { label: 'Email', color: 'red', icon: 'envelope', angle: -5 }, // top-right
  { label: 'Graphics', color: 'purple-light', icon: 'palette', angle: 54 }, // opposite VPS (-54° + 180° = 126°)
  { label: 'Marketing', color: 'green', icon: 'megaphone', angle: 100 }, // opposite Fast Deployment (-90° + 180° = 90°)
];

const stats = [
  { value: 120, suffix: '+', label: 'Customers', bg: 'green' },
  { value: 120, suffix: '+', label: 'Customers', bg: 'orange' },
  { value: 120, suffix: '+', label: 'Customers', bg: 'blue' },
];

const subtitle = 'If you are planning on developing a product landing';

function CounterValue({ target, suffix = '', run }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!run) return;
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);
    return () => clearInterval(timer);
  }, [run, target]);

  return <>{count}{suffix}</>;
}

function SectionServices() {
  const communityRef = useRef(null);
  const [countersVisible, setCountersVisible] = useState(false);

  useEffect(() => {
    const el = communityRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setCountersVisible(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
    <section className="section-services py-5">
      <Container>
        {/* Top: What We Can Help You */}
        <div className="section-services__top text-center mb-5">
          <h2 className="section-services__title mb-2">What We Can Help You ?</h2>
          <p className="section-services__subtitle mb-4 mb-lg-5">{subtitle}</p>
          <div className="section-services__center">
            {/* Center image - Replace the placeholder below with your image */}
            <div className="section-services__center-image">
              {/* 
                TO ADD YOUR CENTER IMAGE:
                1. Import your image: import centerImage from '../../assets/images/home/your-image.png';
                2. Replace the placeholder div below with: <img src={centerImage} alt="Services" className="w-100 h-100" style={{objectFit: 'contain'}} />
              */}
              <div className="section-services__center-placeholder">
                <div className="section-services__radial-lines" aria-hidden />
                <div className="section-services__cloud-icon">
                  <img src={servicesCloudIcon} alt="Cloud Icon" className="section-services__cloud-icon-img" />
                </div>
              </div>
            </div>

            {/* Inner circle - 4 bubbles */}
            {innerCircleServices.map((item) => (
              <div
                key={item.label}
                className={`section-services__bubble section-services__bubble--inner section-services__bubble--${item.color}`}
                style={{
                  transform: `rotate(${item.angle}deg) translateY(-370px) rotate(${-item.angle}deg)`
                }}
              >
                <span className="section-services__bubble-icon">
                  {item.icon === 'shield' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  )}
                  {item.icon === 'building' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 21h18M3 7v14M21 7v14M9 7v14M15 7v14M3 7l9-4 9 4M9 7V3l6 4"/></svg>
                  )}
                  {item.icon === 'cloud' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
                  )}
                  {item.icon === 'ai' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l1.6-1.6a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0l-1.6 1.6z"/><path d="M9.3 14.7a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l1.6-1.6a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0l-1.6 1.6z"/><path d="M6.3 9.3l1.6 1.6a1 1 0 0 0 1.4 0l1.6-1.6a1 1 0 0 0 0-1.4L9.3 6.3a1 1 0 0 0-1.4 0L6.3 7.9a1 1 0 0 0 0 1.4z"/><path d="M17.7 14.7l1.6 1.6a1 1 0 0 0 1.4 0l1.6-1.6a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0l-1.6 1.6a1 1 0 0 0 0 1.4z"/></svg>
                  )}
                </span>
                <span className="section-services__bubble-label">{item.label}</span>
              </div>
            ))}

            {/* Outer circle - 5 bubbles: Fast Deployment, VPS, Email, Graphics, Marketing */}
            {outerCircleServices.map((item) => (
              <div
                key={item.label}
                className={`section-services__bubble section-services__bubble--outer section-services__bubble--${item.color}`}
                style={{
                  transform: `rotate(${item.angle}deg) translateY(-527px) rotate(${-item.angle}deg)`
                }}
              >
                <span className="section-services__bubble-icon">
                  {item.icon === 'deploy' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/><path d="M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
                  )}
                  {item.icon === 'servers' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="8" rx="1"/><rect x="2" y="14" width="20" height="8" rx="1"/><path d="M6 6v0M6 18v0M12 6v0M12 18v0M18 6v0M18 18v0"/></svg>
                  )}
                  {item.icon === 'envelope' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
                  )}
                  {item.icon === 'palette' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="13.5" cy="6.5" r="1.5"/><circle cx="17.5" cy="10.5" r="1.5"/><circle cx="8.5" cy="10.5" r="1.5"/><circle cx="13.5" cy="14.5" r="1.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.7-.1 2.5-.4"/></svg>
                  )}
                  {item.icon === 'megaphone' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 8c0-2.2-1.8-4-4-4s-4 1.8-4 4v8c0 2.2 1.8 4 4 4s4-1.8 4-4V8z"/><path d="M22 10v4M2 8h4v8H2zM6 10l10-2v8L6 14z"/></svg>
                  )}
                </span>
                <span className="section-services__bubble-label">{item.label}</span>
              </div>
            ))}
            </div>
        </div>

       
      </Container>
    </section>

    <section className="section-services__map">
      <Container>
        <div className="section-services__map-wrap">
          <img src={mapSvg} alt="World Map" className="section-services__map-img" />
        </div>
      </Container>
    </section>

    <section className="section-community pb-5" ref={communityRef}>
      <Container>
        <div className="section-community__inner position-relative">
          {/* Dotted background patterns */}
          <div className="section-community__dots section-community__dots--left" aria-hidden />
          <div className="section-community__dots section-community__dots--right" aria-hidden />
          {/* Header */}
          <div className="text-center mb-4 mb-lg-5">
            <h2 className="section-community__title mb-2">Join our global community</h2>
            <p className="section-community__subtitle mb-0">{subtitle}</p>
          </div>
          {/* Stats row - Bootstrap grid */}
          <Row className="g-3 g-md-4 justify-content-center">
            {stats.map((item) => (
              <Col key={item.bg} xs={12} sm={6} md={4}>
                <div className={`section-community__card section-community__card--${item.bg} h-100 py-4 px-3 rounded-3 text-center d-flex align-items-center justify-content-around`}>
                  <span className="section-community__value d-block mb-1">
                    <CounterValue target={item.value} suffix={item.suffix} run={countersVisible} />
                  </span>
                  <span className="section-community__label d-block">{item.label}</span>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
    </>
  );
}

export default SectionServices;
