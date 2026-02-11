import Hero from './Hero';
import SectionAbout from './SectionAbout';
import SectionServices from './SectionServices';
import SectionAllServices from './SectionAllServices';
import SectionWorkProcess from './SectionWorkProcess';
import SectionClients from './SectionClients';
import SectionBlog from './SectionBlog';
import SectionContact from './SectionContact';

function Home() {
  return (
    <>
      <Hero />
      <SectionAbout />
      <SectionServices />
      <SectionAllServices />
      <SectionWorkProcess />
      <SectionClients />
      <SectionBlog />
      <SectionContact />
    </>
  );
}

export default Home;
