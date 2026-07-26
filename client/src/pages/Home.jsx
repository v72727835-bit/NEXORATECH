import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import TechStack from '../components/TechStack';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import WhyChooseUs from '../components/WhyChooseUs';
import ContactSection from '../components/ContactSection';
import Testimonials from '../components/Testimonials';

function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <TechStack />
      <AboutSection />
      <ProjectsSection />
      <WhyChooseUs />
      <ContactSection />
      <Testimonials />
    </>
  );
}

export default Home;
