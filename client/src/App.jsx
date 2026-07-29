import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CursorFollower from './components/CursorFollower';
import RainEffect from './components/RainEffect';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import ScrollToTop from './components/ScrollToTop';

import TermsPopup from './components/TermsPopup';

function App() {
  return (
    <>
      <CursorFollower />
      <RainEffect />
      <ScrollToTop />
      <TermsPopup />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
