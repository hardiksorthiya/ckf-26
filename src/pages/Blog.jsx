import { Container } from 'react-bootstrap';

function Blog() {
  return (
    <>
      <main className="py-5">
        <Container>
          <h1 className="display-5 fw-bold mb-3">Blog</h1>
          <p className="lead text-muted">Blog page content goes here.</p>
        </Container>
      </main>
    </>
  );
}

export default Blog;
