import './HeroSymbol.css';

export default function HeroSymbol() {
  return (
    <div className="hero-symbol" aria-hidden="true">
      <svg
        viewBox="0 0 260 340"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Ромб — контур */}
        <polygon
          points="130,0 260,170 130,340 0,170"
          fill="none"
          stroke="#F5F2ED"
          strokeWidth="2"
        />

        {/* Горизонтальные полосы */}
        <g fill="#F5F2ED">
          <rect x="62" y="98" width="136" height="10" />
          <rect x="50" y="122" width="160" height="10" />
          <rect x="44" y="146" width="172" height="10" />
          <rect x="50" y="170" width="160" height="10" />
          <rect x="62" y="194" width="136" height="10" />
          <rect x="80" y="218" width="100" height="10" />
        </g>

        {/* Звёзды-спаркла слева */}
        <g fill="#F5F2ED">
          <path d="M 30 78 l 2 5 l 5 2 l -5 2 l -2 5 l -2 -5 l -5 -2 l 5 -2 z" />
          <path d="M 48 58 l 2 5 l 5 2 l -5 2 l -2 5 l -2 -5 l -5 -2 l 5 -2 z" />
          <path d="M 22 108 l 2 5 l 5 2 l -5 2 l -2 5 l -2 -5 l -5 -2 l 5 -2 z" />
          <path d="M 42 96 l 1.5 4 l 4 1.5 l -4 1.5 l -1.5 4 l -1.5 -4 l -4 -1.5 l 4 -1.5 z" />
        </g>

        {/* Звёзды-спаркла справа */}
        <g fill="#F5F2ED">
          <path d="M 230 78 l 2 5 l 5 2 l -5 2 l -2 5 l -2 -5 l -5 -2 l 5 -2 z" />
          <path d="M 212 58 l 2 5 l 5 2 l -5 2 l -2 5 l -2 -5 l -5 -2 l 5 -2 z" />
          <path d="M 238 108 l 2 5 l 5 2 l -5 2 l -2 5 l -2 -5 l -5 -2 l 5 -2 z" />
          <path d="M 218 96 l 1.5 4 l 4 1.5 l -4 1.5 l -1.5 4 l -1.5 -4 l -4 -1.5 l 4 -1.5 z" />
        </g>
      </svg>
    </div>
  );
}