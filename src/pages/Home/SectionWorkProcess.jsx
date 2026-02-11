import { Container, Row, Col } from 'react-bootstrap';
import './css/SectionWorkProcess.css';

const subheading = 'Our Work Process';
const mainTitle = 'We are building great future together, Be with us';
const subtitle = 'If you are planning on developing a product landing';

const defaultDescription =
  'CloudKodeForm Technologies is a modern technology partner helping businesses build, scale, and secure their digital ecosystem.';

const steps = [
  { title: 'Initiation & Planning', description: defaultDescription, variant: 'default' },
  { title: 'Execution & Development', description: defaultDescription, variant: 'center' },
  { title: 'Testing & Maintenance', description: defaultDescription, variant: 'default' },
];

function ProcessIcon({ variant }) {
  const isCenter = variant === 'center';
  const color = isCenter ? '#7A9ABF' : '#64A8AE';
  return (
    <svg
      className="section-work-process__pentagon-icon"
      viewBox="0 0 48 48"
      fill="none"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="12" y="6" width="24" height="36" rx="3" />
      <circle cx="18" cy="16" r="1.5" fill={color} />
      <path d="M22 16h8M18 21h12M18 26h8" />
      <path d="M28 14l4-2v4l-4 2" />
    </svg>
  );
}

function PentagonShape({ variant, children }) {
  const isCenter = variant === 'center';
  const fillColor = isCenter ? '#D5E0EB' : '#DCE6E7';
  const strokeColor = isCenter ? '#7A9ABF' : '#12565E';
  const strokeDasharray = isCenter ? 'none' : '4,4';
  
  return (
    <div className={`section-work-process__pentagon-wrap section-work-process__pentagon-wrap--${variant}`}>
      <svg
        className="section-work-process__pentagon-svg"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 188 188"
        aria-hidden
      >
        <path
          className="section-work-process__pentagon-fill"
          d="M82.2,8.5c7-5.1,16.5-5.1,23.5,0l65.9,47.9c7,5.1,9.9,14.1,7.3,22.4l-25.2,77.5c-2.7,8.2-10.4,13.8-19,13.8
	H53.3c-8.7,0-16.3-5.6-19-13.8L9.1,78.8c-2.7-8.2,0.3-17.3,7.3-22.4L82.2,8.5z"
          fill={fillColor}
        />
        <path
          className="section-work-process__pentagon-stroke"
          d="M152.5,57.5l3.2,2.3v0l-0.3,0.4l1.6,1.2c0.6,0.4,1.1,0.8,1.6,1.3l0.3-0.4c1,0.9,2,2,2.8,3.1l-0.4,0.3
	c0.8,1.1,1.5,2.3,2,3.5l0.5-0.2c0.6,1.3,1,2.6,1.3,4l-0.5,0.1c0.3,1.3,0.4,2.7,0.4,4.1h0.5c0,1.4-0.1,2.8-0.4,4.2l-0.5-0.1
	c-0.1,0.5-0.2,1-0.4,1.5l-0.2,0.5l-0.6,1.9l0.5,0.2l-1.2,3.8l-0.5-0.2l-1.2,3.8l0.5,0.2l-1.2,3.8l-0.5-0.2l-1.2,3.8l0.5,0.2
	l-1.2,3.8l-0.5-0.2l-1.2,3.8l0.5,0.2l-1.2,3.8l-0.5-0.2l-1.2,3.8l0.5,0.2l-1.2,3.8l-0.5-0.2l-1.2,3.8l0.5,0.2l-1.2,3.8l-0.5-0.2
	l-1.2,3.8l0.5,0.2l-1.2,3.8l-0.5-0.2l-1.2,3.8l0.5,0.2l-1.2,3.8l-0.5-0.2l-0.6,1.9c-0.2,0.7-0.5,1.3-0.7,1.9l0.5,0.2
	c-0.6,1.3-1.3,2.5-2.1,3.6l-0.4-0.3c-0.8,1.1-1.7,2.1-2.7,3l0.3,0.4c-1,0.9-2.2,1.8-3.4,2.5l-0.2-0.4c-1.2,0.7-2.4,1.2-3.7,1.7
	l0.2,0.5c-1.3,0.4-2.7,0.7-4.1,0.9l-0.1-0.5c-0.7,0.1-1.4,0.1-2,0.1h-2v0.5h-4v-0.5h-4v0.5h-4v-0.5h-4v0.5h-4v-0.5h-4v0.5h-4v-0.5
	h-4v0.5h-4v-0.5h-4v0.5h-4v-0.5h-4v0.5h-4v-0.5h-4v0.5h-4v-0.5h-2c-0.7,0-1.4,0-2-0.1l-0.1,0.5c-1.4-0.1-2.8-0.4-4.1-0.9l0.2-0.5
	c-1.3-0.4-2.5-1-3.7-1.7l-0.2,0.4c-1.2-0.7-2.3-1.5-3.4-2.5l0.3-0.4c-1-0.9-1.9-1.9-2.7-3l-0.4,0.3c-0.8-1.1-1.5-2.3-2.1-3.6
	l0.5-0.2c-0.3-0.6-0.5-1.3-0.7-1.9l-0.6-1.9l-0.5,0.2l-1.2-3.8h0l0.5-0.2l-1.2-3.8l-0.5,0.2h0l-1.2-3.8h0l0.5-0.2l-1.2-3.8l-0.5,0.2
	h0l-1.2-3.8h0l0.5-0.2l-1.2-3.8l-0.5,0.2h0l-1.2-3.8h0l0.5-0.2l-1.2-3.8l-0.5,0.2l-1.2-3.8l0.5-0.2l-1.2-3.8l-0.5,0.2l-1.2-3.8
	l0.5-0.2l-1.2-3.8l-0.5,0.2l-1.2-3.8l0.5-0.2l-1.2-3.8l-0.5,0.2L24,85.3l0.5-0.2l-0.6-1.9l-0.2-0.5c-0.1-0.5-0.3-1-0.4-1.5l-0.5,0.1
	c-0.3-1.4-0.4-2.8-0.4-4.2h0.5c0-1.4,0.1-2.7,0.4-4.1l-0.5-0.1c0.3-1.4,0.7-2.7,1.3-4l0.5,0.2c0.6-1.2,1.2-2.4,2-3.5l-0.4-0.3
	c0.8-1.1,1.7-2.2,2.8-3.1l0.3,0.4c0.4-0.3,0.8-0.7,1.2-1l0.4-0.3l1.6-1.2l-0.3-0.4l0,0l3.2-2.3l0.3,0.4l3.2-2.3l-0.3-0.4l0,0
	l3.2-2.3l0.3,0.4l3.2-2.3l-0.3-0.4l3.2-2.3l0,0l0.3,0.4l3.2-2.3l-0.3-0.4l3.2-2.3l0,0l0.3,0.4l3.2-2.3L58,41.1l0,0l3.2-2.3l0.3,0.4
	l3.2-2.3l-0.3-0.4l3.2-2.3l0,0l0.3,0.4l3.2-2.3L71,31.7l3.2-2.3l0,0l0.3,0.4l3.2-2.3l-0.3-0.4l0,0l3.2-2.3l0.3,0.4l1.6-1.2
	c0.6-0.4,1.1-0.8,1.7-1.1L84,22.4c1.2-0.7,2.5-1.3,3.8-1.7l0.2,0.5c1.3-0.4,2.6-0.7,4-0.8l-0.1-0.5c1.4-0.1,2.8-0.1,4.2,0L96,20.3
	c1.3,0.1,2.7,0.4,4,0.8l0.2-0.5c1.3,0.4,2.6,1,3.8,1.7l-0.2,0.4c0.6,0.3,1.2,0.7,1.7,1.1l1.6,1.2l0.3-0.4l3.2,2.3v0l-0.3,0.4
	l3.2,2.3l0.3-0.4v0l3.2,2.3h0l-0.3,0.4l3.2,2.3l0.3-0.4v0l3.2,2.3h0l-0.3,0.4l3.2,2.3l0.3-0.4l3.2,2.3v0l-0.3,0.4l3.2,2.3l0.3-0.4v0
	l3.2,2.3l-0.3,0.4l3.2,2.3l0.3-0.4v0l3.2,2.3l-0.3,0.4l3.2,2.3l0.3-0.4v0l3.2,2.3v0l-0.3,0.4l3.2,2.3L152.5,57.5z"
          fill="none"
          stroke={strokeColor}
          strokeDasharray={strokeDasharray}
        />
      </svg>
      <div className="section-work-process__pentagon-inner">
        {children}
      </div>
    </div>
  );
}

function ArrowConnector() {
  return (
    <div className="section-work-process__arrow" aria-hidden>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 151 46"
        className="section-work-process__arrow-svg"
      >
        <path
          className="section-work-process__arrow-path"
          d="M0.1,18.7c-0.3,1.1,0.3,2.2,1.4,2.5l17.3,5c1.1,0.3,2.2-0.3,2.5-1.4c0.3-1.1-0.3-2.2-1.4-2.5L4.5,17.9L9,2.6
	c0.3-1.1-0.3-2.2-1.4-2.5C6.5-0.2,5.4,0.4,5.1,1.4L0.1,18.7z M147,18.9c-0.2-1.1-1.3-1.8-2.4-1.6L127,21c-1.1,0.2-1.8,1.3-1.6,2.4
	c0.2,1.1,1.3,1.8,2.4,1.6l15.7-3.2l3.2,15.7c0.2,1.1,1.3,1.8,2.4,1.6c1.1-0.2,1.8-1.3,1.6-2.4L147,18.9z M76.3,29.6l1.4-1.5
	l-0.1-0.1l-0.1,0L76.3,29.6z M2,19.3L3,21c13.8-7.6,25.5-10,36.8-8.2c11.3,1.8,22.6,8.1,35.3,18.3l1.3-1.6l1.3-1.6
	c-13-10.4-24.8-17.1-37.2-19.1C28,6.9,15.4,9.7,1,17.5L2,19.3z M76.3,29.6l-1.4,1.5c6.5,6.1,17.8,13.4,30.9,14.1
	c13.3,0.8,27.9-5.3,40.8-24.9l-1.7-1.1l-1.7-1.1c-12.3,18.6-25.7,23.7-37.3,23.1c-11.8-0.7-22.3-7.3-28.4-13.1L76.3,29.6z"
          fill="#12565E"
        />
      </svg>
    </div>
  );
}

function SectionWorkProcess() {
  return (
    <section className="section-work-process py-5">
      <Container>
        <div className="text-center mb-4 mb-lg-5 d-flex flex-column align-items-center justify-content-center">
          <p className="section-work-process__subheading mb-2">{subheading}</p>
          <h2 className="section-work-process__title mb-2">{mainTitle}</h2>
          <p className="section-work-process__subtitle mb-0">{subtitle}</p>
        </div>

        <div className="section-work-process__steps-wrap position-relative">
          <Row className="section-work-process__steps align-items-start justify-content-center">
            {steps.map((step) => (
              <Col key={step.title} xs={12} md={4} lg={4} className="section-work-process__step-col">
                <div className="section-work-process__step">
                  <PentagonShape variant={step.variant}>
                    <ProcessIcon variant={step.variant} />
                  </PentagonShape>
                  <h3 className="section-work-process__step-title">{step.title}</h3>
                  <p className="section-work-process__step-desc mb-0">{step.description}</p>
                </div>
              </Col>
            ))}
          </Row>
          <div className="section-work-process__arrow section-work-process__arrow--1 d-none d-md-block" aria-hidden>
            <ArrowConnector />
          </div>
          <div className="section-work-process__arrow section-work-process__arrow--2 d-none d-md-block" aria-hidden>
            <ArrowConnector />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionWorkProcess;
