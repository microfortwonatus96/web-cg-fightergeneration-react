import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Team from './components/team/Team';

function App() {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Team />
    </main>
    </>
  );
}

export default App;
