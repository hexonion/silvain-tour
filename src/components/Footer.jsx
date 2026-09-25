import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer enter enter-fade enter-d-6">
      <nav className="footer-links">
        <a
          href="https://nova.gambit-rp.com/silvain"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          NOVA
        </a>
        <a
          href="https://novamusic.su/#artist=009e5bb7-e84d-4540-a9f8-c30f1394959f"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          NovaMusic
        </a>
        <a
          href="https://nova.gambit-rp.com/pages/olympic"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Olympicsound
        </a>
      </nav>
    </footer>
  );
}