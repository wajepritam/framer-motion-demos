// App.js
import './App.css';
import Navbar  from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </>
  );
}

export default App;
