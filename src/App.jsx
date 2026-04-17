import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Centers from './pages/Centers';
import Games from './pages/Games';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Enquiry from './pages/Enquiry';

// Auto scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Global Loader component wrapper
const AppContent = () => {
  const [loading, setLoading] = useState(false); // Quick transitions in React
  const location = useLocation();

  // Use Intersection observer to reveal elements globally for every page change
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach(reveal => observer.observe(reveal));
    // Run reveal once immediately for stuff at the top
    reveals.forEach(reveal => {
      if (reveal.getBoundingClientRect().top < window.innerHeight) {
        reveal.classList.add('active');
      }
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {loading && (
        <div className="loader-wrapper" style={{ opacity: 1, display: 'flex' }}>
          <div className="loader"></div>
        </div>
      )}
      <Navbar />
      <ScrollToTop />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/centers" element={<Centers />} />
          <Route path="/games" element={<Games />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/enquiry" element={<Enquiry />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router basename="/GameZone">
      <AppContent />
    </Router>
  )
}

export default App;
