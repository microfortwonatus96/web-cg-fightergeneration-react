import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Team from './components/team/Team';
import Contact from './components/contact/Contact';

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
    </>
  );
}

export default App;
