import './Background.css';
import bgImage from '../assets/images/bg.jpg';

export default function Background() {
  return (
    <>
      <div
        className="site-background"
        style={{ backgroundImage: `url(${bgImage})` }}
        aria-hidden="true"
      />
      <div className="site-background-glow" aria-hidden="true" />
    </>
  );
}