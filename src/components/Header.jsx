import { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import logoImg from '../assets/images/logo-ckf.webp';
import './css/Header.css';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/career', label: 'Career' },
  { to: '/blog', label: 'Blog' },
];

function Logo() {
  return (
    <div className="header-logo">
      <img
        src={logoImg}
        alt="CloudKodeForm Technologies"
        className="header-logo-img"
      />
    </div>
  );
}

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const closeSidebar = () => setSidebarOpen(false);

  useEffect(() => {
    document.body.classList.toggle('header-sidebar-open', sidebarOpen);
    return () => document.body.classList.remove('header-sidebar-open');
  }, [sidebarOpen]);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <Navbar className="header-navbar" expand="lg" variant="light">
        <Container className="header-container">
          <Navbar.Brand as={NavLink} to="/" className="header-brand">
            <Logo />
          </Navbar.Brand>

          {/* Custom hamburger for mobile: opens sidebar only */}
          <button
            type="button"
            className="header-toggler navbar-toggler d-lg-none"
            aria-controls="header-desktop-nav"
            aria-label="Open menu"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="navbar-toggler-icon" />
          </button>

          <Navbar.Collapse id="header-desktop-nav" className="header-desktop-nav d-none d-lg-flex">
            <div className="header-nav-wrap">
              <Nav className="header-nav">
                {navItems.map(({ to, label }) =>
                label === 'Services' ? (
                  <NavDropdown
                    key={to}
                    title="Services"
                    id="services-dropdown"
                    className={`header-dropdown ${isActive(to) ? 'active' : ''}`}
                  >
                    <NavDropdown.Item as={NavLink} to={to} onClick={closeSidebar}>
                      All Services
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <Nav.Link
                    key={to}
                    as={NavLink}
                    to={to}
                    end={to === '/'}
                    className={({ isActive: active }) => (active ? 'active' : '')}
                  >
                    {label}
                  </Nav.Link>
                )
              )}
              </Nav>
            </div>
            <div className="header-cta">
              <Button as={NavLink} to="/contact" className="header-btn-contact">
                Contact Us
                <span className="header-btn-icon" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                  </svg>
                </span>
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Mobile sidebar overlay */}
      <div
        className={`header-sidebar-backdrop ${sidebarOpen ? 'open' : ''}`}
        onClick={closeSidebar}
        onKeyDown={(e) => e.key === 'Escape' && closeSidebar()}
        role="button"
        tabIndex={0}
        aria-label="Close menu"
      />

      {/* Mobile sidebar */}
      <aside className={`header-sidebar ${sidebarOpen ? 'open' : ''}`} aria-hidden={!sidebarOpen}>
        <div className="header-sidebar-header">
          <Navbar.Brand as={NavLink} to="/" onClick={closeSidebar}>
            <Logo />
          </Navbar.Brand>
          <button
            type="button"
            className="header-sidebar-close"
            onClick={closeSidebar}
            aria-label="Close menu"
          >
            <span aria-hidden>×</span>
          </button>
        </div>
        <Nav className="header-sidebar-nav flex-column">
          {navItems.map(({ to, label }) =>
            label === 'Services' ? (
              <Nav.Link
                key={to}
                as={NavLink}
                to={to}
                onClick={closeSidebar}
                className={isActive(to) ? 'active' : ''}
              >
                Services
              </Nav.Link>
            ) : (
              <Nav.Link
                key={to}
                as={NavLink}
                to={to}
                end={to === '/'}
                onClick={closeSidebar}
                className={({ isActive: active }) => (active ? 'active' : '')}
              >
                {label}
              </Nav.Link>
            )
          )}
        </Nav>
        <div className="header-sidebar-footer">
          <Button as={NavLink} to="/contact" className="header-btn-contact w-100" onClick={closeSidebar}>
            Contact Us
            <span className="header-btn-icon" aria-hidden>
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
              </svg>
            </span>
          </Button>
        </div>
      </aside>
    </>
  );
}

export default Header;
