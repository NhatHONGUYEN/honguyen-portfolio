import About from '@/components/Home/About';
import ContactSection from '@/components/Home/Contact/ContactSection';
import Divider from '@/components/Home/Divider';
import Header from '@/components/Home/Header';
import Hero from '@/components/Home/Hero';

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
      <Projects />
      <Divider />
      <ContactSection />
    </>
  );
}
