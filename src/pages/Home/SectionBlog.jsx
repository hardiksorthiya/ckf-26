import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './css/SectionBlog.css';

const subheading = 'News & Blogs';
const mainTitle = 'Latest News & Articles From The Blog Posts';
const subtitle = 'If you are planning on developing a product landing';

const defaultDescription =
  'CloudKodeForm Technologies is a modern technology partner helping businesses build, scale, and secure their digital ecosystem.';

const featuredPost = {
  image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop&q=80',
  imageAlt: 'Cloud solutions and technology',
  title: 'Building scalable cloud solutions for modern enterprises',
  excerpt: defaultDescription,
  author: 'Admin',
  date: 'Feb 10, 2025',
  href: '/blog/featured',
};

const recentPosts = [
  {
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=400&fit=crop&q=80',
    imageAlt: 'Cyber security and data protection',
    title: "What is cyber security a beginner's guide",
    author: 'Admin',
    href: '/blog/cyber-security',
  },
  {
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=400&fit=crop&q=80',
    imageAlt: 'Cloud migration and technology',
    title: 'Best practices for cloud migration in 2025',
    author: 'Admin',
    href: '/blog/cloud-migration',
  },
  {
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=400&fit=crop&q=80',
    imageAlt: 'AI and machine learning technology',
    title: 'How AI is transforming software development',
    author: 'Admin',
    href: '/blog/ai-development',
  },
];

function SectionBlog() {
  return (
    <section className="section-blog py-5 position-relative">
      {/* Splash images - decorative background elements */}
      <div className="section-blog__splash section-blog__splash--1" aria-hidden />
      <div className="section-blog__splash section-blog__splash--2" aria-hidden />
      <div className="section-blog__splash section-blog__splash--3" aria-hidden />
      
      <Container className="position-relative">
        <div className="text-center mb-4 mb-lg-5 d-flex flex-column align-items-center justify-content-center">
          <p className="section-blog__subheading mb-2">{subheading}</p>
          <h2 className="section-blog__title mb-2">{mainTitle}</h2>
          <p className="section-blog__subtitle mb-0">{subtitle}</p>
        </div>

        <Row className="section-blog__content g-0">
          <Col xs={12} lg={6} className="section-blog__featured-col">
            <article className="section-blog__featured">
              <Link to={featuredPost.href} className="section-blog__featured-link">
                <div className="section-blog__featured-image-wrap rounded-3">
                  {featuredPost.image ? (
                    <img src={featuredPost.image} alt={featuredPost.imageAlt} className="section-blog__featured-img" />
                  ) : (
                    <div className="section-blog__placeholder section-blog__placeholder--large" />
                  )}
                </div>
                <div className="section-blog__featured-body">
                  <p className="section-blog__meta mb-1">by {featuredPost.author} · {featuredPost.date}</p>
                  <h3 className="section-blog__featured-title">{featuredPost.title}</h3>
                  <p className="section-blog__featured-excerpt mb-0">{featuredPost.excerpt}</p>
                  <span className="section-blog__read-more">
                    Read More <span className="section-blog__arrow" aria-hidden>↗</span>
                  </span>
                </div>
              </Link>
            </article>
          </Col>

          <Col xs={12} lg={6} className="section-blog__recent-col">
            <div className="section-blog__recent">
              {recentPosts.map((post) => (
                <article key={post.href} className="section-blog__recent-item">
                  <Link to={post.href} className="section-blog__recent-link d-flex gap-3">
                    <div className="section-blog__recent-thumb rounded-2 flex-shrink-0">
                      {post.image ? (
                        <img src={post.image} alt={post.imageAlt} className="section-blog__recent-img" />
                      ) : (
                        <div className="section-blog__placeholder section-blog__placeholder--small" />
                      )}
                    </div>
                    <div className="section-blog__recent-body flex-grow-1 min-w-0">
                      <p className="section-blog__meta mb-1">by {post.author}</p>
                      <h4 className="section-blog__recent-title">{post.title}</h4>
                      <span className="section-blog__read-more section-blog__read-more--sm">
                        Read More <span className="section-blog__arrow" aria-hidden>↗</span>
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SectionBlog;
