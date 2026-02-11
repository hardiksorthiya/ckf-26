import { Container, Row, Col } from 'react-bootstrap';
import './css/SectionClients.css';
import satinLogo from '../../assets/images/home/satin.webp';
import cognoLogo from '../../assets/images/home/cogno.webp';

const clients = [
  {
    logoImage: satinLogo,
  },
  {
    logoImage: cognoLogo,
  },
];


function SectionClients() {
  return (
    <section className="section-clients">
      <div className="section-clients__header">
        <h2 className="section-clients__title">Trusted Clients</h2>
      </div>
      <div className="section-clients__gradient">
        <div className="section-clients__marquee">
          <div className="section-clients__marquee-track">
            {/* Original logos */}
            {clients.map((client, index) => (
              <div key={`client-${index}`} className="section-clients__card">
                <img src={client.logoImage} alt={client.name || `Client ${index + 1}`} className="section-clients__logo-img" />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionClients;
