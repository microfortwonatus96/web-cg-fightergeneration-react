import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Team from './components/team/Team';
import Contact from './components/contact/Contact';
import ScrollTop from './components/scrollTop/ScrollTop';

function App() {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Team />
      <Contact />
    </main>

    <ScrollTop />
    </>
  );
}

export default App;
