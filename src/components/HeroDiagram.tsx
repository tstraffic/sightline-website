/**
 * The approved curved-road diagram treatment from the capability cover
 * (assets/capability-cover.png — locked reference), detailed to read like a
 * genuine TGS extract at Saadat's request: cone taper with a real AS 1742.3
 * annotation, hatched work zone, lane dimension, chainage ticks, traffic-flow
 * arrow, north point, scale bar, REV arrow, and the Drawing Paper
 * issued-status stamp with Oxide corner accents. All annotations use real
 * drawing conventions (no invented drawing numbers). Colours are the design
 * tokens only.
 */
export function HeroDiagram() {
  const paper = "var(--color-paper)";
  const oxide = "var(--color-oxide)";
  const dust = "var(--color-dust)";

  // Cone taper positions along the closure (merge from right lane edge to centreline)
  const cones: [number, number][] = [
    [104, 404], [140, 392], [175, 378], [208, 362], [238, 344], [264, 324], [286, 302],
  ];

  return (
    <svg
      viewBox="0 0 600 500"
      role="img"
      aria-label="Traffic guidance scheme extract: curved carriageway with cone taper, hatched work zone, chainage markers, dimensions, north point and an issued-for-construction stamp"
      className="block h-auto w-full"
    >
      <defs>
        <pattern id="gridplus" width="46" height="46" patternUnits="userSpaceOnUse">
          <path d="M23 18 V28 M18 23 H28" stroke={paper} strokeWidth="1" opacity="0.1" />
        </pattern>
        <pattern id="wzhatch" width="9" height="9" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="9" stroke={oxide} strokeWidth="1.4" opacity="0.5" />
        </pattern>
      </defs>
      <rect width="600" height="500" fill="url(#gridplus)" />

      {/* ---- carriageway: two edges + kerb offset lines ---- */}
      <g fill="none" stroke={paper}>
        <path d="M-10 470 C160 415 300 270 405 30" strokeWidth="2.2" />
        <path d="M105 500 C270 430 400 285 505 45" strokeWidth="2.2" />
        {/* kerb/verge offset lines */}
        <path d="M-24 452 C146 398 286 254 391 18" strokeWidth="1" opacity="0.45" />
        <path d="M122 500 C286 437 415 293 520 55" strokeWidth="1" opacity="0.45" />
      </g>

      {/* centreline — oxide dashed, with chainage tick marks */}
      <path d="M48 488 C215 422 350 278 455 38" fill="none" stroke={oxide} strokeWidth="1.6" strokeDasharray="14 10" />
      <g stroke={paper} strokeWidth="1.2" opacity="0.7">
        <path d="M147 431 L156 444" />
        <path d="M231 371 L241 382" />
        <path d="M305 300 L316 309" />
        <path d="M368 220 L380 227" />
        <path d="M418 134 L431 139" />
      </g>

      {/* ---- work zone: hatched closure in the left lane ---- */}
      <path d="M295 296 C330 250 365 195 395 130 L448 152 C420 213 385 268 350 316 Z" fill="url(#wzhatch)" stroke={oxide} strokeWidth="1.4" />
      <g fontFamily="var(--font-mono)" fontSize="11" fill={paper}>
        <line x1="415" y1="230" x2="495" y2="252" stroke={paper} strokeWidth="1" opacity="0.6" />
        <text x="500" y="250" opacity="0.9">WORK ZONE</text>
        <text x="500" y="264" opacity="0.9">LANE 1 CLOSED</text>
      </g>

      {/* ---- cone taper ---- */}
      <g fill={oxide}>
        {cones.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="4.5" />
        ))}
      </g>
      <g fontFamily="var(--font-mono)" fontSize="11" fill={paper}>
        <line x1="180" y1="382" x2="150" y2="330" stroke={paper} strokeWidth="1" opacity="0.6" />
        <text x="84" y="318" opacity="0.9">TAPER 1:10</text>
        <text x="84" y="332" opacity="0.9">AS 1742.3 FIG 4.9</text>
      </g>

      {/* ---- traffic flow arrow in the open lane ---- */}
      <g stroke={paper} strokeWidth="2.4" fill="none" opacity="0.95">
        <path d="M330 430 C370 392 405 350 438 300" />
        <path d="M438 300 L421 306 M438 300 L434 318" />
      </g>
      <text x="228" y="472" fontFamily="var(--font-mono)" fontSize="11" fill={paper} opacity="0.9">
        TRAFFIC FLOW
      </text>

      {/* ---- lane width dimension ---- */}
      <g stroke={dust} strokeWidth="1" fill="none" opacity="0.9">
        <path d="M436 96 L487 117" />
        <path d="M436 96 l7 -1 m-7 1 l3 6" />
        <path d="M487 117 l-7 1 m7 -1 l-3 -6" />
      </g>
      <text x="497" y="102" fontFamily="var(--font-mono)" fontSize="11" fill={dust} opacity="0.95">
        3.5 LANE
      </text>

      {/* ---- chainage markers (per the approved cover) ---- */}
      <g fontFamily="var(--font-mono)" fontSize="13" fill={paper}>
        <circle cx="284" cy="326" r="5" fill={oxide} />
        <line x1="292" y1="326" x2="348" y2="342" stroke={paper} strokeWidth="1" opacity="0.6" />
        <text x="354" y="346" opacity="0.9">CH 0+120</text>

        <circle cx="404" cy="146" r="5" fill={oxide} />
        <line x1="412" y1="146" x2="452" y2="176" stroke={paper} strokeWidth="1" opacity="0.6" />
        <text x="458" y="180" opacity="0.9">CH 0+240</text>

        <text x="506" y="22" opacity="0.9">REV</text>
        <path d="M548 18 L548 2 M543 8 L548 2 L553 8" stroke={paper} strokeWidth="1.4" fill="none" opacity="0.9" />
      </g>

      {/* ---- north point ---- */}
      <g transform="translate(558 322)" opacity="0.95">
        <circle r="16" fill="none" stroke={paper} strokeWidth="1.4" />
        <path d="M0 -11 L4.5 8 L0 4.5 L-4.5 8 Z" fill={paper} />
        <text y="30" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill={paper}>
          N
        </text>
      </g>

      {/* ---- scale bar ---- */}
      <g transform="translate(30 24)" fontFamily="var(--font-mono)" fontSize="9" fill={paper}>
        <rect x="0" y="0" width="28" height="5" fill={paper} />
        <rect x="28" y="0" width="28" height="5" fill="none" stroke={paper} strokeWidth="1" />
        <rect x="56" y="0" width="28" height="5" fill={paper} />
        <rect x="84" y="0" width="28" height="5" fill="none" stroke={paper} strokeWidth="1" />
        <text x="0" y="17">0</text>
        <text x="52" y="17">10</text>
        <text x="106" y="17">20 m</text>
      </g>

      {/* ---- issued-status stamp — Drawing Paper with Oxide corner accents (v3.1) ---- */}
      <g transform="rotate(-6 462 434)">
        <rect x="352" y="402" width="220" height="64" rx="4" fill="none" stroke={paper} strokeWidth="1.6" />
        <g stroke={oxide} strokeWidth="2" fill="none">
          <path d="M352 414 V402 H364" />
          <path d="M560 402 H572 V414" />
          <path d="M572 454 V466 H560" />
          <path d="M364 466 H352 V454" />
        </g>
        <text x="462" y="428" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="15" letterSpacing="3" fill={paper}>
          ISSUED FOR
        </text>
        <text x="462" y="450" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="15" letterSpacing="3" fill={paper}>
          CONSTRUCTION
        </text>
      </g>
    </svg>
  );
}
