import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Process from './components/Process';
import Differentials from './components/Differentials';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-primary min-h-screen text-text selection:bg-secondary selection:text-primary">
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Process />
      <Differentials />
      <Testimonials />
      <FAQ />
      <Footer />
      {/* Other sections will be added here */}
    </div>
  );
}

export default App;
