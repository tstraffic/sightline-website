/**
 * Homepage hero drawing — an overall road plan, recreating the reference sheet
 * Saadat supplied (5 Aug 2026) in the Sightline palette.
 *
 * Faithful to the reference's structure: a corridor running the full width, a
 * diagonal dual carriageway crossing it at a signalised intersection, an
 * offset roundabout with a landscaped spiral, a small roundabout on a southern
 * leg, a faint existing-context layer (lots, buildings, trees, kerb returns),
 * oxide movement paths with arrowheads, dashed SHEET reference areas, chainage
 * markers on the centreline, north point, legend, notes and scale.
 *
 * Recoloured to the theme: Carbon proposed alignment, Oxide movement paths,
 * Survey Grey existing/context. `invert` swaps to Drawing Paper linework for
 * the dark capability-statement cover.
 *
 * Honest labelling: sheet references carry no invented drawing numbers and the
 * caption strip marks the drawing illustrative (brand §7).
 *
 * Animation is staged like a sheet being issued: context → alignment →
 * roundabouts → movement paths → annotation → stamp.
 */
export function AccessDiagram({ invert = false }: { invert?: boolean } = {}) {
  const ink = invert ? "var(--color-paper)" : "var(--color-carbon)";
  const oxide = "var(--color-oxide)";
  const survey = invert ? "var(--color-dust)" : "var(--color-survey)";
  const mono = "var(--font-mono)";

  /** Multi-line carriageway: several parallel offsets make it read as a real
   *  alignment rather than a single stroke (as on the reference sheet). */
  const corridor = [
    { y: 236, w: 1.6, o: 1 },
    { y: 244, w: 0.7, o: 0.45 },
    { y: 252, w: 0.7, o: 0.35 },
    { y: 262, w: 0.7, o: 0.45 },
    { y: 270, w: 1.6, o: 1 },
  ];

  return (
    <svg
      viewBox="0 -60 660 580"
      role="img"
      aria-label="Overall road plan extract: a road corridor with a signalised cross-road intersection, roundabouts, chainage markers, vehicle movement paths, sheet reference areas, legend and scale"
      className="block h-auto w-full"
    >
      <defs>
        <pattern id="apgrid" width="52" height="52" patternUnits="userSpaceOnUse">
          <path d="M26 21 V31 M21 26 H31" stroke={ink} strokeWidth="1" opacity={invert ? 0.16 : 0.09} />
        </pattern>
        <marker id="mvarrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M0 1.5 L9 5 L0 8.5 z" fill={oxide} />
        </marker>
      </defs>
      <rect y="-60" width="660" height="580" fill="url(#apgrid)" />

      {/* ============ existing / context — faintest layer ============ */}
      <g className="fade-in" style={{ animationDelay: "0.1s" }} stroke={survey} fill="none" strokeWidth="0.8" opacity="0.4">
        {/* lot boundaries */}
        <path d="M18 26 H150 V196 H18 Z M150 26 H244 V196 H150 Z" />
        <path d="M264 20 H360 V150 H264 Z" />
        <path d="M18 306 H140 V446 H18 Z" />
        <path d="M336 322 H470 V430 H336 Z" />
        <path d="M486 30 H592 V150 H486 Z" />
        {/* building footprints */}
        <path d="M34 48 H126 V116 H34 Z M40 134 H112 V180 H40 Z" />
        <path d="M168 44 H226 V104 H168 Z M172 126 H222 V182 H172 Z" />
        <path d="M282 40 H344 V112 H282 Z" />
        <path d="M352 338 H452 V416 H352 Z" />
        <path d="M504 48 H574 V102 H504 Z" />
        <path d="M36 326 H124 V412 H36 Z" />
        {/* tree canopies */}
        <g opacity="0.85">
          <circle cx="392" cy="44" r="7" /><circle cx="408" cy="60" r="5" /><circle cx="424" cy="40" r="6" />
          <circle cx="452" cy="120" r="6" /><circle cx="468" cy="136" r="4.5" />
          <circle cx="616" cy="86" r="7" /><circle cx="630" cy="106" r="5" /><circle cx="604" cy="112" r="4.5" />
          <circle cx="252" cy="228" r="5" /><circle cx="500" cy="318" r="5.5" /><circle cx="516" cy="334" r="4" />
        </g>
      </g>

      {/* ============ main corridor — multi-line alignment ============ */}
      <g fill="none" stroke={ink}>
        {corridor.map((l, i) => (
          <path
            key={l.y}
            className="anim-line-long"
            style={{ animationDelay: `${0.55 + i * 0.05}s` }}
            /* broken at the intersection and again at the roundabout leg */
            d={`M0 ${l.y} H126 M206 ${l.y} H448 M508 ${l.y} H660`}
            strokeWidth={l.w}
            opacity={l.o}
          />
        ))}
        {/* verge / boundary offsets */}
        <path className="anim-line-long" style={{ animationDelay: "0.8s" }} d="M0 222 H122 M210 222 H444" strokeWidth="0.7" opacity="0.35" />
        <path className="anim-line-long" style={{ animationDelay: "0.8s" }} d="M0 284 H122 M210 284 H660" strokeWidth="0.7" opacity="0.35" />
      </g>
      {/* centreline */}
      <path
        className="anim-line-long"
        style={{ animationDelay: "0.9s" }}
        d="M0 253 H660"
        fill="none"
        stroke={ink}
        strokeWidth="0.9"
        strokeDasharray="16 11"
        opacity="0.6"
      />

      {/* ============ diagonal dual carriageway (the reference's rail-like pair) ============ */}
      <g fill="none" stroke={ink}>
        {/* western carriageway */}
        <path className="anim-line-med" style={{ animationDelay: "0.7s" }} d="M96 -60 L150 226" strokeWidth="1.6" />
        <path className="anim-line-med" style={{ animationDelay: "0.7s" }} d="M132 -60 L186 226" strokeWidth="1.6" />
        <path className="anim-line-med" style={{ animationDelay: "0.95s" }} d="M114 -60 L168 226" strokeWidth="0.7" opacity="0.4" />
        {/* continues south of the corridor */}
        <path className="anim-line-med" style={{ animationDelay: "0.75s" }} d="M166 280 L214 520" strokeWidth="1.6" />
        <path className="anim-line-med" style={{ animationDelay: "0.75s" }} d="M202 280 L250 520" strokeWidth="1.6" />
        <path className="anim-line-med" style={{ animationDelay: "0.95s" }} d="M184 280 L232 520" strokeWidth="0.7" opacity="0.4" />
        {/* kerb returns at the four intersection quadrants */}
        <g strokeWidth="1.3" opacity="0.9">
          <path className="anim-line" style={{ animationDelay: "1.15s" }} d="M126 236 C126 232 140 228 150 226" />
          <path className="anim-line" style={{ animationDelay: "1.15s" }} d="M206 236 C200 230 192 228 186 226" />
          <path className="anim-line" style={{ animationDelay: "1.2s" }} d="M126 270 C130 276 150 280 166 280" />
          <path className="anim-line" style={{ animationDelay: "1.2s" }} d="M206 270 C204 276 208 280 202 280" />
        </g>
        {/* southern slip lane, mirroring the reference's lower-left loop */}
        <path className="anim-line-med" style={{ animationDelay: "1.35s" }} d="M126 270 C86 300 70 360 84 430 C92 470 118 492 150 496" strokeWidth="1.1" opacity="0.75" />
      </g>

      {/* ============ roundabout (offset, upper right) ============ */}
      <g fill="none" stroke={ink}>
        {/* approach legs off the corridor */}
        <path className="anim-line-med" style={{ animationDelay: "1.3s" }} d="M448 236 C486 234 508 206 516 168" strokeWidth="1.5" />
        <path className="anim-line-med" style={{ animationDelay: "1.3s" }} d="M508 262 C548 254 576 218 584 176" strokeWidth="1.5" />
        <circle className="anim-line-med" style={{ animationDelay: "1.5s" }} cx="566" cy="104" r="62" strokeWidth="1.6" />
        <circle className="anim-line-med" style={{ animationDelay: "1.6s" }} cx="566" cy="104" r="38" strokeWidth="1.1" opacity="0.75" />
        {/* landscaped spiral in the island */}
        <path
          className="anim-line-med"
          style={{ animationDelay: "1.8s" }}
          d="M566 72 A32 32 0 1 1 598 104 A26 26 0 1 1 572 130 A20 20 0 1 1 552 110 A15 15 0 1 1 567 95 A9 9 0 1 1 576 104"
          stroke={survey}
          strokeWidth="1"
          opacity="0.85"
        />
        {/* northern legs */}
        <path className="anim-line-med" style={{ animationDelay: "1.55s" }} d="M544 44 C536 10 532 -24 532 -60" strokeWidth="1.4" opacity="0.85" />
        <path className="anim-line-med" style={{ animationDelay: "1.55s" }} d="M592 46 C604 12 612 -22 616 -60" strokeWidth="1.4" opacity="0.85" />
      </g>

      {/* small roundabout on a southern leg */}
      <g fill="none" stroke={ink} className="fade-in" style={{ animationDelay: "1.95s" }}>
        <circle cx="612" cy="392" r="26" strokeWidth="1.4" />
        <circle cx="612" cy="392" r="12" strokeWidth="0.9" opacity="0.7" />
        <path d="M612 366 V286 M586 392 H500 M612 418 V470" strokeWidth="1.3" opacity="0.85" />
      </g>

      {/* ============ movement paths ============ */}
      <g fill="none" stroke={oxide} strokeWidth="1.3" strokeDasharray="8 5">
        <path className="anim-line-long" style={{ animationDelay: "2.0s" }} d="M14 262 H430" markerEnd="url(#mvarrow)" />
        <path
          className="anim-line-med"
          style={{ animationDelay: "2.2s" }}
          d="M168 -20 L192 216 C196 240 224 246 258 246 H430"
          markerEnd="url(#mvarrow)"
        />
        <path
          className="anim-line-med"
          style={{ animationDelay: "2.4s" }}
          d="M446 244 C488 240 512 210 522 172 C532 138 548 130 566 130"
          markerEnd="url(#mvarrow)"
        />
        <path className="anim-line-med" style={{ animationDelay: "2.55s" }} d="M566 130 A26 26 0 1 0 572 78 V16" markerEnd="url(#mvarrow)" />
        <path className="anim-line-med" style={{ animationDelay: "2.45s" }} d="M126 276 C96 302 84 356 96 424" markerEnd="url(#mvarrow)" />
      </g>

      {/* ============ sheet reference areas ============ */}
      <g className="fade-in" style={{ animationDelay: "2.6s" }} fontFamily={mono} opacity="0.92">
        <path d="M74 16 H286 V254 H74 Z" fill="none" stroke={ink} strokeWidth="0.9" strokeDasharray="10 6" opacity="0.6" />
        <text x="86" y="38" fontSize="9.5" fill={ink} letterSpacing="0.8" textDecoration="underline">SHEET 1</text>
        <text x="86" y="50" fontSize="8" fill={survey}>INTERSECTION</text>

        <path d="M430 24 H660 V276 H430 Z" fill="none" stroke={ink} strokeWidth="0.9" strokeDasharray="10 6" opacity="0.6" />
        <text x="442" y="46" fontSize="9.5" fill={ink} letterSpacing="0.8" textDecoration="underline">SHEET 2</text>
        <text x="442" y="58" fontSize="8" fill={survey}>ROUNDABOUT</text>

        <path d="M286 172 H492 V400 H286 Z" fill="none" stroke={ink} strokeWidth="0.9" strokeDasharray="10 6" opacity="0.6" />
        <text x="298" y="390" fontSize="9.5" fill={ink} letterSpacing="0.8" textDecoration="underline">SHEET 3</text>
      </g>

      {/* ============ chainage markers ============ */}
      <g className="fade-in" style={{ animationDelay: "2.7s" }} fontFamily={mono} fontSize="9" fill={ink}>
        <circle cx="40" cy="253" r="3.4" fill="none" stroke={ink} strokeWidth="1.1" />
        <text x="24" y="240">CH 100</text>
        <circle cx="316" cy="253" r="3.4" fill="none" stroke={ink} strokeWidth="1.1" />
        <text x="300" y="240">CH 200</text>
        <circle cx="540" cy="253" r="3.4" fill="none" stroke={ink} strokeWidth="1.1" />
        <text x="524" y="240">CH 300</text>
      </g>

      {/* ============ sheet furniture ============ */}
      <g className="fade-in" style={{ animationDelay: "2.75s" }} transform="translate(30 -22)">
        <text y="-16" textAnchor="middle" fontFamily={mono} fontSize="9.5" fill={ink}>N</text>
        <path d="M0 -10 V14" stroke={ink} strokeWidth="1" />
        <circle r="12" fill="none" stroke={ink} strokeWidth="0.9" />
      </g>

      <g className="fade-in" style={{ animationDelay: "2.8s" }} fontFamily={mono} fontSize="8">
        <text x="22" y="452" fill={ink} letterSpacing="1.3">LEGEND</text>
        <path d="M22 466 H58" stroke={ink} strokeWidth="1.6" />
        <text x="66" y="469" fill={survey}>PROPOSED ALIGNMENT</text>
        <path d="M22 482 H52" stroke={oxide} strokeWidth="1.3" strokeDasharray="8 5" markerEnd="url(#mvarrow)" />
        <text x="66" y="485" fill={survey}>MOVEMENT PATH</text>
        <path d="M22 498 H58" stroke={survey} strokeWidth="0.9" strokeDasharray="9 5" />
        <text x="66" y="501" fill={survey}>EXISTING / CONTEXT</text>
      </g>

      <g className="fade-in" style={{ animationDelay: "2.85s" }} fontFamily={mono} fontSize="8" fill={survey}>
        <path d="M300 446 H468" stroke={survey} strokeWidth="0.7" opacity="0.5" />
        <text x="300" y="464" fill={ink} letterSpacing="1.3">NOTE</text>
        <text x="300" y="478">ALL DIMENSIONS IN METRES</text>
        <text x="300" y="490">CONFIRMED PER PROJECT</text>
        <g transform="translate(300 500)">
          <rect x="0" y="0" width="18" height="4" fill={ink} />
          <rect x="18" y="0" width="18" height="4" fill="none" stroke={ink} strokeWidth="0.8" />
          <rect x="36" y="0" width="18" height="4" fill={ink} />
          <text x="0" y="15" fill={survey}>SCALE NTS · ILLUSTRATIVE</text>
        </g>
      </g>

      {/* ============ stamp — issued last ============ */}
      <g className="fade-late" transform="rotate(-6 566 452)">
        <rect x="478" y="430" width="176" height="44" rx="3" fill={oxide} opacity="0.08" />
        <rect x="478" y="430" width="176" height="44" rx="3" fill="none" stroke={oxide} strokeWidth="1.9" />
        <g stroke={oxide} strokeWidth="2.4" fill="none">
          <path d="M478 441 V430 H489" />
          <path d="M643 430 H654 V441" />
          <path d="M654 463 V474 H643" />
          <path d="M489 474 H478 V463" />
        </g>
        <text x="566" y="448" textAnchor="middle" fontFamily={mono} fontSize="11.5" fontWeight="500" letterSpacing="2.2" fill={oxide}>
          ISSUED FOR
        </text>
        <text x="566" y="465" textAnchor="middle" fontFamily={mono} fontSize="11.5" fontWeight="500" letterSpacing="2.2" fill={oxide}>
          APPROVAL
        </text>
      </g>
    </svg>
  );
}
