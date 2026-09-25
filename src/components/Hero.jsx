import { useState } from 'react';
import './Hero.css';

const tourDates = [
  { city: 'Los Santos', country: 'USA', date: '??.?? 2026', venue: '?', ticketUrl: 'https://nova.gambit-rp.com/pages/olympic' },
  { city: 'Washington', country: 'USA', date: '??.?? 2026', venue: 'Capital One Arena', ticketUrl: 'https://nova.gambit-rp.com/pages/olympic' },
  { city: 'Tokyo', country: 'Japan', date: '??.?? 2026', venue: 'Tokyo Dome', ticketUrl: 'https://nova.gambit-rp.com/pages/olympic' },
  { city: 'Paris', country: 'France', date: '??.?? 2026', venue: 'Accor Arena', ticketUrl: 'https://nova.gambit-rp.com/pages/olympic' },
  { city: 'London', country: 'England', date: '??.?? 2026', venue: '100 Club', ticketUrl: 'https://nova.gambit-rp.com/pages/olympic' },
];

export default function Hero() {
  const [mode, setMode] = useState('hero');

  return (
    <header className={`hero hero--${mode}`}>
      <div className="hero-inner">
        <p className="hero-brand enter enter-fade enter-d-1">SILVAIN</p>

        <div className="hero-content">
          <div className="hero-content-inner">
            <h1 className="hero-title enter enter-d-2">Rotten Bloom</h1>
            <p className="hero-subtitle enter enter-d-3">World Tour 2026</p>
          </div>
        </div>

        <div className="tour-content">
          <ul className="tour-list">
            {tourDates.map((show, i) => (
              <li key={i} className="tour-item">
                <span className="tour-date">{show.date}</span>
                <span className="tour-place">
                  {show.city}, {show.country}
                </span>
                <span className="tour-venue">{show.venue}</span>
                <a
                  href={show.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tour-ticket"
                >
                  Tickets →
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-actions">
          <div className="hero-actions-inner">
            <a
              href="https://novamusic.su/#artist=009e5bb7-e84d-4540-a9f8-c30f1394959f"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn hero-btn--primary enter enter-d-4"
            >
              Listen
            </a>
            <button
              type="button"
              onClick={() => setMode('tour')}
              className="hero-btn hero-btn--ghost enter enter-d-5"
            >
              Tour Dates
            </button>
          </div>
        </div>

        <div className="hero-back">
          <div className="hero-back-inner">
            <button
              type="button"
              onClick={() => setMode('hero')}
              className="hero-back-btn"
            >
              ← Back
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}