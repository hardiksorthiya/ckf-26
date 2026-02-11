import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './css/SectionAllServices.css';

const sectionTitle = 'Innovative Our It Solutions And Services';
const sectionSubtitle = 'If you are planning on developing a product landing';

const defaultDescription =
  'CloudKodeForm Technologies is a modern technology partner helping businesses build, scale, and secure their digital ecosystem.';

const services = [
  { title: 'Mobile App Development', description: defaultDescription, icon: 'mobile', href: '/services/mobile-app' },
  { title: 'Web Development', description: defaultDescription, icon: 'web', href: '/services/web' },
  { title: 'Cloud Solutions', description: defaultDescription, icon: 'cloud', href: '/services/cloud' },
  { title: 'Cybersecurity', description: defaultDescription, icon: 'shield', href: '/services/cybersecurity' },
  { title: 'AI & Machine Learning', description: defaultDescription, icon: 'ai', href: '/services/ai' },
  { title: 'Digital Marketing', description: defaultDescription, icon: 'marketing', href: '/services/marketing' },
];

function ServiceIcon({ type }) {
  const iconClass = `section-all-services__icon-wrap section-all-services__icon-wrap--${type}`;
  const svgProps = { width: 32, height: 32, 'aria-hidden': true };
  switch (type) {
    case 'mobile':
      return (
        <div className={iconClass}>
          <svg {...svgProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="5" y="2" width="14" height="20" rx="2" />
            <path d="M12 18h.01" />
            <circle cx="12" cy="14" r="1" />
          </svg>
        </div>
      );
    case 'web':
      return (
        <div className={iconClass}>
          <svg {...svgProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        </div>
      );
    case 'cloud':
      return (
        <div className={iconClass}>
          <svg {...svgProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
          </svg>
        </div>
      );
    case 'shield':
      return (
        <div className={iconClass}>
          <svg {...svgProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>
      );
    case 'ai':
      return (
        <div className={iconClass}>
          <svg {...svgProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2a4 4 0 0 0-4 4v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z" />
            <path d="M9 14l2 2 4-4" />
          </svg>
        </div>
      );
    case 'marketing':
      return (
        <div className={iconClass}>
          <svg {...svgProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
      );
    default:
      return (
        <div className={iconClass}>
          <svg {...svgProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        </div>
      );
  }
}

function SectionAllServices() {
  return (
    <section className="section-all-services py-5">
      <div className="section-all-services__bg-pattern" aria-hidden />
      <Container>
        <div className="text-center mb-4 mb-lg-5">
          <h2 className="section-all-services__title mb-2">{sectionTitle}</h2>
          <p className="section-all-services__subtitle mb-0">{sectionSubtitle}</p>
        </div>
        <Row className="g-4">
          {services.map((item) => (
            <Col key={item.title} xs={12} sm={6} lg={4}>
              <article className="section-all-services__card h-100 position-relative rounded-3">
                <ServiceIcon type={item.icon} />
                <h3 className="section-all-services__card-title">{item.title}</h3>
                <p className="section-all-services__card-desc mb-0">{item.description}</p>
                <hr className="section-all-services__card-hr" />
                <Link to={item.href} className="section-all-services__link">
                  Read More
                  <span className="section-all-services__link-arrow" aria-hidden>→</span>
                </Link>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default SectionAllServices;
