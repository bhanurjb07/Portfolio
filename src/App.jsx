import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Experience from './pages/Experience/Experience';
import Education from './pages/Education/Education';
import Contact from './pages/Contact/Contact';
import './App.css';

// Portfolio component (main site)
const Portfolio = () => {
  return (
    <>
      <Navbar />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <div className="app">
      <Routes>
        {
          jujujpoui
        }
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
