import About from '@/components/Home/about/About';
import ContactSection from '@/components/Home/contact/ContactSection';
import Divider from '@/components/Home/Divider';
import Education from '@/components/Home/Education';
import Experience from '@/components/Home/Experience';
import Header from '@/components/Home/Header';
import Hero from '@/components/Home/hero/Hero';
import Projects from '@/components/Home/Projects';

export default function Home() {
  return (
    <>
      <Header />
      <Divider />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Education />
      <Divider />
      <Experience />
      <Divider />
      <Projects />
      <Divider />
      <ContactSection />
      <Divider />
    </>
  );
}
