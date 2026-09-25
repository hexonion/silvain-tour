import Background from './components/Background.jsx';
import NoiseOverlay from './components/NoiseOverlay.jsx';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Background />
      <NoiseOverlay />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}