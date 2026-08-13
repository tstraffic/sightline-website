/**
 * About page — practice story, operating approach and leadership overview.
 * Detailed profiles remain on /team so About does not become a second Team page.
 */

export const ABOUT = {
  eyebrow: "About · The practice",
  h1: "Traffic engineering shaped by how projects are actually delivered.",
  sub: "Sightline is a specialist traffic and transport engineering practice delivering clear, considered and buildable solutions across development, construction and infrastructure.",
  tagline: "Designed for approval. Built for construction.",

  whoWeAre: [
    "Sightline was built from experience across engineering drafting, civil project management, construction, traffic management implementation and traffic planning.",
    "That combination shapes how we approach traffic engineering.",
    "We understand the technical and approval requirements behind a project, but we also understand what happens when drawings leave the screen and reach a live site.",
    "Our team has worked across structural and traffic drafting, civil project delivery, hands-on construction, temporary traffic management and traffic planning. That experience gives us a practical view of access, staging, vehicle movements, site constraints and how proposed arrangements will actually operate.",
  ],
  resultLead: "The result is traffic engineering that considers the full project:",
  result: "the drawing, the approval, the construction sequence and the real-world implementation.",
  smallPractice:
    "Sightline is deliberately small. Clients work directly with the people responsible for scoping, coordinating and delivering their project, without layers of account management or unnecessary handovers.",

  experienceHeading: "Experience from both sides of the drawing.",
  experience: [
    {
      title: "Engineering & project delivery",
      text: "Experience across structural drafting, civil project management and traffic management provides an understanding of how design decisions interact with broader project requirements, coordination, programme and delivery.",
    },
    {
      title: "Construction & implementation",
      text: "Experience across traffic drafting, hands-on construction and live traffic management provides a practical understanding of staging, site access, traffic control operations and the constructability of temporary traffic arrangements.",
    },
    {
      title: "Traffic planning & assessment",
      text: "Traffic management and traffic planning experience supports the assessment, analysis and technical documentation required to move development and construction projects through approval and delivery.",
    },
  ],

  clientHeading: "What that means for our clients",
  clientIntro: "We don’t assess a project in isolation.",
  clientQuestions: [
    "Will it satisfy the relevant requirements?",
    "Will the access and vehicle movements work?",
    "Can the proposed staging actually be implemented?",
    "How will the arrangement interact with construction activity?",
    "What is likely to create problems during approval or delivery?",
  ],
  clientOutcome: "Our objective is to identify those issues early and provide a clear path forward.",

  standardsHeading: "Standards and frameworks",
  standardsIntro:
    "Our work is informed by the standards, legislation, authority requirements and technical guidance applicable to each project, including:",
  standards: [
    "Transport for NSW requirements and technical guidance",
    "Australian Standards, including the AS 1742 and AS 2890 series",
    "Current Austroads guidance",
    "NSW planning and transport requirements",
    "Relevant council LEPs, DCPs and engineering requirements",
    "Project-specific approval conditions and authority requirements",
  ],
  standardsClose:
    "Applicable requirements are identified as part of the project scope rather than relying on a one-size-fits-all approach.",

  reviewHeading: "Checked before it is issued",
  reviewIntro: "Technical work is subject to an appropriate internal review before external issue.",
  reviewQualifier: "Depending on the project and deliverable, this can include:",
  reviewStages: [
    { label: "Prepared", text: "Technical work and documentation completed." },
    { label: "Checked", text: "Calculations, assumptions, drawings, standards and conclusions reviewed." },
    { label: "Approved", text: "Required technical approval completed before formal issue." },
  ],
  reviewClose: "Revision history and issued documents are controlled throughout the project.",

  engagementHeading: "How an engagement runs",
  engagement: [
    {
      title: "Send us the project",
      text: "Provide the site address, drawings where available, project background and what you need help resolving.",
    },
    {
      title: "We define the scope",
      text: "We review the project and confirm the work required, deliverables, programme and fee.",
    },
    {
      title: "Assess, design and coordinate",
      text: "Our team undertakes the required assessment, modelling, design or documentation and coordinates outstanding project information as required.",
    },
    {
      title: "Check and issue",
      text: "The work goes through the applicable review process before controlled issue to the client.",
    },
    {
      title: "Support it through",
      text: "Where required, we respond to comments, revise the work and support the project through authority review, approval and delivery.",
    },
  ],

  peopleHeading: "A small team with clear responsibility.",
  peopleIntro:
    "Sightline combines complementary experience across client and project leadership, engineering and traffic drafting, construction delivery, live traffic implementation and traffic planning.",
  people: [
    {
      name: "Saadat Ahmed",
      role: "Commercial Director",
      focus: "Strategy · Client partnerships · Growth",
      background: "Background across structural engineering drafting, civil project management and traffic management.",
    },
    {
      name: "Taj Rahman",
      role: "Project Director · Traffic Delivery",
      focus: "Implementation · Constructability · Staging",
      background: "Background across traffic drafting, construction and the practical implementation of traffic management in live environments.",
    },
    {
      name: "Rumman Khan",
      role: "Traffic & Transport Planner",
      focus: "Assessment · Design · Analysis",
      background: "Background across traffic management, traffic planning and technical traffic and transport delivery.",
    },
  ],

  independenceHeading: "Independent advice. Practical delivery experience.",
  independence: [
    "Sightline provides professional traffic and transport consulting services.",
    "Our founders also operate T&S Traffic Control, giving the practice direct exposure to the realities of traffic implementation and construction delivery.",
    "Where implementation services are required, that relationship is disclosed. Clients remain free to appoint their preferred traffic management provider.",
    "Sightline’s professional advice, technical review and project documentation remain governed through the Sightline project and quality-management process.",
  ],

  principleHeading: "The principle",
  principle: [
    "Understand the approval.",
    "Understand the project.",
    "Understand what happens on the road.",
  ],

  ctaHeading: "Bring us the project early.",
  ctaBody:
    "Send through the site, drawings and project requirements and we’ll determine what traffic engineering input is actually required.",
} as const;
