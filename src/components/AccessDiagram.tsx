/**
 * Homepage hero drawing — an overall road plan, recreating the reference sheet
 * Saadat supplied (5 Aug 2026): a corridor running the width of the sheet with
 * a signalised cross-road intersection, a roundabout, faint existing context,
 * oxide movement paths with arrowheads, dashed sheet-reference boxes, chainage
 * markers on the centreline, north point, legend, notes and scale bar.
 *
 * Honest labelling: sheet references carry no invented drawing numbers and the
 * caption strip marks the drawing illustrative (brand §7).
 *
 * Animation is staged like a sheet being issued: context → alignment →
 * roundabout → movement paths → annotation → stamp.
 */
export function AccessDiagram() {
  const ink = "var(--color-carbon)";
  const oxide = "var(--color-oxide)";
  const survey = "var(--color-survey)";
  const mono = "var(--font-mono)";

  return (
    <svg
      // extra sheet margin top/bottom so the plan fills the tall hero panel
      viewBox="0 -60 660 580"
      role="img"
      aria-label="Overall road plan extract: a road corridor with a cross-road intersection, roundabout, chainage markers, vehicle movement paths, sheet reference areas, legend and scale"
      className="block h-auto w-full"
    >
      <defs>
        <pattern id="apgrid" width="52" height="52" patternUnits="userSpaceOnUse">
          <path d="M26 21 V31 M21 26 H31" stroke={ink} strokeWidth="1" opacity="0.09" />
        </pattern>
        <marker id="mvarrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse">
          <path d="M0 1 L9 5 L0 9 z" fill={oxide} />
        </marker>
      </defs>
      <rect y="-60" width="660" height="580" fill="url(#apgrid)" />

      {/* ================= existing / context — faintest layer ================= */}
      <g className="fade-in" style={{ animationDelay: "0.1s" }} stroke={survey} fill="none" strokeWidth="0.85" opacity="0.4">
        {/* lot boundaries, left cluster */}
        <path d="M24 44 H150 V204 H24 Z M150 44 H236 V204 H150 Z" />
        <path d="M24 300 H132 V430 H24 Z" />
        {/* building footprints */}
        <path d="M40 66 H120 V128 H40 Z M46 146 H112 V190 H46 Z" />
        <path d="M168 62 H222 V116 H168 Z M172 138 H214 V190 H172 Z" />
        <path d="M300 88 H392 V150 H300 Z" />
        <path d="M330 320 H452 V404 H330 Z" />
        <path d="M470 60 H548 V112 H470 Z" />
        {/* trees near the roundabout */}
        <g opacity="0.85">
          <circle cx="470" cy="128" r="6" />
          <circle cx="486" cy="142" r="4.5" />
          <circle cx="500" cy="124" r="5.5" />
          <circle cx="624" cy="120" r="6" />
          <circle cx="636" cy="138" r="4.5" />
          <circle cx="286" cy="196" r="5" />
        </g>
      </g>

      {/* ================= main corridor — proposed alignment ================= */}
      <g fill="none" stroke={ink}>
        {/* north kerb, broken at the intersection and the roundabout leg */}
        <path
          className="anim-line-long"
          style={{ animationDelay: "0.6s" }}
          d="M0 228 H128 M196 228 H452 C486 228 500 218 512 200"
          strokeWidth="1.9"
        />
        {/* south kerb, broken at the intersection */}
        <path
          className="anim-line-long"
          style={{ animationDelay: "0.72s" }}
          d="M0 272 H128 M196 272 H660"
          strokeWidth="1.9"
        />
        {/* outer verge / boundary lines */}
        <path className="anim-line-long" style={{ animationDelay: "0.85s" }} d="M0 214 H124 M200 214 H446" strokeWidth="0.85" opacity="0.5" />
        <path className="anim-line-long" style={{ animationDelay: "0.85s" }} d="M0 286 H124 M200 286 H660" strokeWidth="0.85" opacity="0.5" />
        {/* kerb returns at the four intersection corners */}
        <g strokeWidth="1.7">
          <path className="anim-line" style={{ animationDelay: "1.0s" }} d="M128 228 C128 208 136 200 156 200" />
          <path className="anim-line" style={{ animationDelay: "1.0s" }} d="M196 228 C196 208 188 200 168 200" />
          <path className="anim-line" style={{ animationDelay: "1.05s" }} d="M128 272 C128 292 136 300 156 300" />
          <path className="anim-line" style={{ animationDelay: "1.05s" }} d="M196 272 C196 292 188 300 168 300" />
        </g>
        {/* right-turn bay nib approaching the roundabout */}
        <path className="anim-line" style={{ animationDelay: "1.2s" }} d="M400 244 C424 244 438 240 452 236" strokeWidth="1.1" opacity="0.7" />
      </g>

      {/* corridor centreline + lane lines */}
      <path
        className="anim-line-long"
        style={{ animationDelay: "0.95s" }}
        d="M0 250 H660"
        fill="none"
        stroke={ink}
        strokeWidth="1"
        strokeDasharray="18 12"
        opacity="0.7"
      />
      <path
        className="anim-line-long"
        style={{ animationDelay: "1.0s" }}
        d="M0 239 H124 M200 239 H444"
        fill="none"
        stroke={ink}
        strokeWidth="0.75"
        strokeDasharray="9 9"
        opacity="0.4"
      />
      <path
        className="anim-line-long"
        style={{ animationDelay: "1.0s" }}
        d="M0 261 H124 M200 261 H600"
        fill="none"
        stroke={ink}
        strokeWidth="0.75"
        strokeDasharray="9 9"
        opacity="0.4"
      />

      {/* ================= cross road — dual carriageway running north–south ================= */}
      <g fill="none" stroke={ink}>
        <path className="anim-line-med" style={{ animationDelay: "0.78s" }} d="M128 0 V200 M128 300 V460" strokeWidth="1.9" />
        <path className="anim-line-med" style={{ animationDelay: "0.78s" }} d="M196 0 V200 M196 300 V460" strokeWidth="1.9" />
        {/* median island */}
        <path className="anim-line-med" style={{ animationDelay: "1.1s" }} d="M156 0 V196 M168 0 V196" strokeWidth="0.9" opacity="0.6" />
        <path className="anim-line-med" style={{ animationDelay: "1.1s" }} d="M156 304 V460 M168 304 V460" strokeWidth="0.9" opacity="0.6" />
      </g>

      {/* ================= roundabout ================= */}
      <g fill="none" stroke={ink}>
        {/* approach leg from the corridor */}
        <path className="anim-line-med" style={{ animationDelay: "1.3s" }} d="M512 200 C524 178 528 166 530 152" strokeWidth="1.8" />
        <path className="anim-line-med" style={{ animationDelay: "1.3s" }} d="M560 224 C578 206 586 186 590 160" strokeWidth="1.8" />
        {/* circulating carriageway */}
        <circle className="anim-line-med" style={{ animationDelay: "1.45s" }} cx="574" cy="112" r="60" strokeWidth="1.8" />
        <circle className="anim-line-med" style={{ animationDelay: "1.55s" }} cx="574" cy="112" r="36" strokeWidth="1.4" />
        {/* landscaped spiral in the central island */}
        <path
          className="anim-line-med"
          style={{ animationDelay: "1.75s" }}
          d="M574 82 A30 30 0 1 1 604 112 A24 24 0 1 1 580 136 A19 19 0 1 1 561 117 A14 14 0 1 1 575 103 A9 9 0 1 1 584 112"
          stroke={survey}
          strokeWidth="1.1"
          opacity="0.8"
        />
        {/* northern exit leg */}
        <path className="anim-line-med" style={{ animationDelay: "1.5s" }} d="M556 52 C552 30 550 16 550 0" strokeWidth="1.5" opacity="0.8" />
        <path className="anim-line-med" style={{ animationDelay: "1.5s" }} d="M596 54 C604 32 608 16 610 0" strokeWidth="1.5" opacity="0.8" />
      </g>

      {/* small roundabout, bottom right */}
      <g fill="none" stroke={ink} className="fade-in" style={{ animationDelay: "1.9s" }}>
        <circle cx="628" cy="392" r="24" strokeWidth="1.6" />
        <circle cx="628" cy="392" r="11" strokeWidth="1.1" opacity="0.7" />
        <path d="M628 368 V286 M604 392 H520" strokeWidth="1.4" opacity="0.8" />
      </g>

      {/* ================= movement paths ================= */}
      <g fill="none" stroke={oxide} strokeWidth="1.45" strokeDasharray="9 6">
        {/* through movement along the corridor */}
        <path className="anim-line-long" style={{ animationDelay: "2.0s" }} d="M20 258 H430" markerEnd="url(#mvarrow)" />
        {/* left turn from the cross road into the corridor */}
        <path
          className="anim-line-med"
          style={{ animationDelay: "2.2s" }}
          d="M182 60 V196 C182 232 210 240 246 240 H418"
          markerEnd="url(#mvarrow)"
        />
        {/* corridor to the roundabout, circulating and exiting north */}
        <path
          className="anim-line-med"
          style={{ animationDelay: "2.4s" }}
          d="M440 236 C486 232 512 208 526 178 C540 148 556 138 574 138"
          markerEnd="url(#mvarrow)"
        />
        <path
          className="anim-line-med"
          style={{ animationDelay: "2.55s" }}
          d="M574 138 A26 26 0 1 0 578 86 V30"
          markerEnd="url(#mvarrow)"
        />
      </g>

      {/* ================= sheet reference areas ================= */}
      <g className="fade-in" style={{ animationDelay: "2.6s" }} fontFamily={mono} opacity="0.9">
        <path d="M76 52 H300 V262 H76 Z" fill="none" stroke={ink} strokeWidth="1" strokeDasharray="11 7" opacity="0.65" />
        <text x="88" y="72" fontSize="10" fill={ink} letterSpacing="0.8">SHEET 1</text>
        <text x="88" y="84" fontSize="8.5" fill={survey}>INTERSECTION</text>

        <path d="M436 76 H660 V300 H436 Z" fill="none" stroke={ink} strokeWidth="1" strokeDasharray="11 7" opacity="0.65" />
        <text x="448" y="96" fontSize="10" fill={ink} letterSpacing="0.8">SHEET 2</text>
        <text x="448" y="108" fontSize="8.5" fill={survey}>ROUNDABOUT</text>

        <path d="M300 176 H478 V386 H300 Z" fill="none" stroke={ink} strokeWidth="1" strokeDasharray="11 7" opacity="0.65" />
        <text x="312" y="376" fontSize="10" fill={ink} letterSpacing="0.8">SHEET 3</text>
      </g>

      {/* ================= chainage markers ================= */}
      <g className="fade-in" style={{ animationDelay: "2.7s" }} fontFamily={mono} fontSize="9.5" fill={ink}>
        <circle cx="46" cy="250" r="3.6" fill="none" stroke={ink} strokeWidth="1.2" />
        <text x="30" y="236">CH 100</text>
        <circle cx="330" cy="250" r="3.6" fill="none" stroke={ink} strokeWidth="1.2" />
        <text x="314" y="236">CH 200</text>
        <circle cx="524" cy="250" r="3.6" fill="none" stroke={ink} strokeWidth="1.2" />
        <text x="508" y="236">CH 300</text>
      </g>

      {/* ================= sheet furniture ================= */}
      {/* north point, top left */}
      <g className="fade-in" style={{ animationDelay: "2.75s" }} transform="translate(36 34)">
        <text y="-16" textAnchor="middle" fontFamily={mono} fontSize="10" fill={ink}>N</text>
        <path d="M0 -10 V14" stroke={ink} strokeWidth="1.1" />
        <circle r="13" fill="none" stroke={ink} strokeWidth="1" />
      </g>

      {/* legend */}
      <g className="fade-in" style={{ animationDelay: "2.8s" }} fontFamily={mono} fontSize="8.5">
        <text x="30" y="326" fill={ink} letterSpacing="1.4">LEGEND</text>
        <path d="M30 340 H66" stroke={ink} strokeWidth="1.9" />
        <text x="74" y="343" fill={survey}>PROPOSED ALIGNMENT</text>
        <path d="M30 356 H60" stroke={oxide} strokeWidth="1.45" strokeDasharray="9 6" markerEnd="url(#mvarrow)" />
        <text x="74" y="359" fill={survey}>MOVEMENT PATH</text>
        <path d="M30 372 H66" stroke={survey} strokeWidth="1" strokeDasharray="10 6" />
        <text x="74" y="375" fill={survey}>EXISTING / CONTEXT</text>
      </g>

      {/* notes + scale bar */}
      <g className="fade-in" style={{ animationDelay: "2.85s" }} fontFamily={mono} fontSize="8.5" fill={survey}>
        <text x="30" y="404" fill={ink} letterSpacing="1.4">NOTE</text>
        <text x="30" y="416">ALL DIMENSIONS IN METRES</text>
        <text x="30" y="426">CONFIRMED PER PROJECT</text>
        <g transform="translate(30 438)">
          <rect x="0" y="0" width="20" height="4" fill={ink} />
          <rect x="20" y="0" width="20" height="4" fill="none" stroke={ink} strokeWidth="0.9" />
          <rect x="40" y="0" width="20" height="4" fill={ink} />
          <text x="0" y="15" fill={survey}>SCALE NTS · ILLUSTRATIVE</text>
        </g>
      </g>

      {/* ================= stamp — issued last ================= */}
      <g className="fade-late" transform="rotate(-6 330 424)">
        <rect x="240" y="402" width="180" height="46" rx="3" fill={oxide} opacity="0.08" />
        <rect x="240" y="402" width="180" height="46" rx="3" fill="none" stroke={oxide} strokeWidth="2" />
        <g stroke={oxide} strokeWidth="2.6" fill="none">
          <path d="M240 413 V402 H251" />
          <path d="M409 402 H420 V413" />
          <path d="M420 437 V448 H409" />
          <path d="M251 448 H240 V437" />
        </g>
        <text x="330" y="421" textAnchor="middle" fontFamily={mono} fontSize="12" fontWeight="500" letterSpacing="2.4" fill={oxide}>
          ISSUED FOR
        </text>
        <text x="330" y="438" textAnchor="middle" fontFamily={mono} fontSize="12" fontWeight="500" letterSpacing="2.4" fill={oxide}>
          APPROVAL
        </text>
      </g>
    </svg>
  );
}
