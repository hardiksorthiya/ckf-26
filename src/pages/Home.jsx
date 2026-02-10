import { Container, Button } from 'react-bootstrap';

function Home() {
  return (
    <>
      <main className="py-5">
        <section className="py-5 text-center bg-light">
          <Container>
            <h1 className="display-4 fw-bold mb-3">Welcome</h1>
            <p className="lead text-muted mb-4">
              This is your React website with Bootstrap. Edit this page and add more as you go.
            </p>
            <Button variant="primary" size="lg">
              Get Started
            </Button>
          </Container>
        </section>

        <section className="py-5">
          <Container>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="p-4 border rounded h-100">
                  <h3>Fast</h3>
                  <p className="text-muted mb-0">
                    Built with Vite and React for a fast development experience.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-4 border rounded h-100">
                  <h3>Responsive</h3>
                  <p className="text-muted mb-0">
                    Bootstrap makes your site look great on all devices.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-4 border rounded h-100">
                  <h3>Ready to grow</h3>
                  <p className="text-muted mb-0">
                    Add pages and components with React Router when you need them.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}

export default Home;
