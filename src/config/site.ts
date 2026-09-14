export interface StatisticItem {
  id: string;
  value: number;
  prefix?: string;
  suffix: string;
  labelEn: string;
  labelEs: string;
  subEn: string;
  subEs: string;
  isDemo: boolean;
}

export interface ServiceItem {
  id: string;
  number: string;
  titleEn: string;
  titleEs: string;
  taglineEn: string;
  taglineEs: string;
  descriptionEn: string;
  descriptionEs: string;
  highlightsEn: string[];
  highlightsEs: string[];
  image: string;
  accent: string;
}

export interface CaseStudyItem {
  id: string;
  code: string;
  categoryEn: string;
  categoryEs: string;
  titleEn: string;
  titleEs: string;
  challengeEn: string;
  challengeEs: string;
  outcomeEn: string;
  outcomeEs: string;
  metric: string;
  metricLabelEn: string;
  metricLabelEs: string;
  isDemo: boolean;
}

export interface TestimonialItem {
  id: string;
  quoteEn: string;
  quoteEs: string;
  clientEn: string;
  clientEs: string;
  positionEn: string;
  positionEs: string;
  matterEn: string;
  matterEs: string;
  isDemo: boolean;
}

export interface OfficeLocation {
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  coordinates: { x: number; y: number }; // Percentage on minimalist world map
  timezone: string;
}

export const SITE_CONFIG = {
  name: "Wexford Law",
  tagline: "International Counsel & Strategic Litigation",
  founded: 2009,
  primaryEmail: "counsel@wexfordlaw.com",
  urgentInquiries: "+1 (212) 890-4420",
  whatsappDirect: "+12128904420",
  managingPartner: {
    name: "Arthur Vance Wexford",
    titleEn: "Senior Managing Partner & Lead Strategist",
    titleEs: "Socio Director Principal y Estratega Líder",
    credentials: "JD, LL.M. International Arbitration (Columbia & Oxford)",
    bioEn: "With over two decades shaping high-stakes cross-border litigation, Arthur Vance Wexford leads a specialized unit engineered to dismantle institutional resistance, recover impaired capital, and defend enterprise sovereignty before sovereign and international tribunals.",
    bioEs: "Con más de dos décadas liderando litigios transfronterizos de alta complejidad, Arthur Vance Wexford encabeza una unidad especializada diseñada para desmontar bloqueos institucionales, recuperar capital patrimonial y defender la soberanía corporativa ante tribunales soberanos e internacionales.",
    portrait: "/images/partner-portrait.jpg",
    quoteEn: "In matters of immense value, momentum is not given—it is strategically seized.",
    quoteEs: "En asuntos de valor decisivo, la ventaja no se concede: se conquista con estrategia.",
  },
  statistics: [
    {
      id: "years",
      value: 15,
      suffix: "+",
      labelEn: "Years of High-Stakes Practice",
      labelEs: "Años de Práctica de Alta Complejidad",
      subEn: "Relentless strategic counsel since 2009",
      subEs: "Asesoría estratégica implacable desde 2009",
      isDemo: true,
    },
    {
      id: "recovered",
      value: 140,
      prefix: "$",
      suffix: "M+",
      labelEn: "Capital & Asset Values Secured",
      labelEs: "Capital y Activos Recuperados",
      subEn: "Recovered via forensic recovery & arbitration",
      subEs: "Recuperados mediante recobro forense y arbitraje",
      isDemo: true,
    },
    {
      id: "matters",
      value: 1200,
      suffix: "+",
      labelEn: "Complex Matters Advised",
      labelEs: "Casos y Asuntos Atendidos",
      subEn: "Disputes, transactions & defense cases",
      subEs: "Disputas, transacciones y casos de defensa",
      isDemo: true,
    },
    {
      id: "successRate",
      value: 98,
      suffix: "%",
      labelEn: "Favorable Resolution Ratio",
      labelEs: "Tasa de Resolución Favorable",
      subEn: "Negotiated settlements & tribunal awards",
      subEs: "Acuerdos negociados y fallos favorables",
      isDemo: true,
    },
  ] as StatisticItem[],
  services: [
    {
      id: "capital-recovery",
      number: "01",
      titleEn: "Capital & Asset Recovery",
      titleEs: "Recuperación de Dinero",
      taglineEn: "Forensic tracing, defaulted liquidity, and uncollected claims.",
      taglineEs: "Rastreo forense, liquidez en mora y acreencias retenidas.",
      descriptionEn: "We deploy aggressive forensic legal architecture to track, secure, and recover withheld capital, unpaid sovereign or commercial debt, and expropriated assets across jurisdictions.",
      descriptionEs: "Implementamos arquitectura jurídica forense para rastrear, embargar y recuperar capital retenido, deudas comerciales o soberanas en mora y activos comprometidos entre jurisdicciones.",
      highlightsEn: ["Cross-Border Tracing", "Pre-judgment Asset Freezing", "Defaulted Commercial Notes"],
      highlightsEs: ["Rastreo Internacional", "Medidas Cautelares Inmediatas", "Obligaciones e Insolvencias"],
      image: "/images/asset-recovery.jpg",
      accent: "#C5A880",
    },
    {
      id: "strategic-claims",
      number: "02",
      titleEn: "Strategic High-Value Claims",
      titleEs: "Reclamaciones Estratégicas",
      taglineEn: "Breach of covenant, shareholder disputes, and corporate liability.",
      taglineEs: "Incumplimiento de pactos, disputas societarias y responsabilidad civil.",
      descriptionEn: "Direct, tactical enforcement of rights when counterparties fail contractual performance, violate fiduciary responsibilities, or cause quantifiable commercial damage.",
      descriptionEs: "Exigibilidad táctica de derechos cuando contrapartes incumplen contratos, violan deberes fiduciarios o generan perjuicios económicos cuantificables.",
      highlightsEn: ["Damages Quantification", "Contractual Enforcement", "Shareholder Squeeze-Outs"],
      highlightsEs: ["Tasación de Perjuicios", "Cumplimiento Forzoso", "Protección de Accionistas"],
      image: "/images/hero-editorial.jpg",
      accent: "#D4AF37",
    },
    {
      id: "regulatory-procedures",
      number: "03",
      titleEn: "Regulatory & Legal Procedures",
      titleEs: "Trámites Jurídicos",
      taglineEn: "Expediting administrative blockages and regulatory compliance.",
      taglineEs: "Desbloqueo administrativo y cumplimiento normativo de alta exigencia.",
      descriptionEn: "We navigate complex bureaucracy, licensing deadlocks, antitrust clearances, and regulatory sanctions with precision and procedural leverage.",
      descriptionEs: "Destrabamos expedientes administrativos complejos, licencias bloqueadas, trámites sancionatorios y certificaciones regulatorias ante autoridades gubernamentales.",
      highlightsEn: ["Government Affairs", "Permit Clearance", "Administrative Sanctions Defense"],
      highlightsEs: ["Defensa Administrativa", "Desbloqueo de Licencias", "Sanciones Estatales"],
      image: "/images/courtroom.jpg",
      accent: "#9E8158",
    },
    {
      id: "corporate-advisory",
      number: "04",
      titleEn: "Legal & Strategic Advisory",
      titleEs: "Asesoría Jurídica",
      taglineEn: "Proactive structural armor for boards, funds, and high-net-worth individuals.",
      taglineEs: "Blindaje estructural preventivo para juntas directivas, fondos y patrimonios.",
      descriptionEn: "Permanent, forward-looking strategic counsel designed to identify unseen vulnerabilities, structure clean corporate transactions, and prevent costly exposure.",
      descriptionEs: "Acompañamiento preventivo de alto nivel para blindar transacciones, identificar contingencias ocultas y proteger decisiones estratégicas corporativas.",
      highlightsEn: ["Risk Matrix Analysis", "Board Counsel", "Structural Asset Shielding"],
      highlightsEs: ["Matriz de Riesgo Legal", "Asesoría a Juntas", "Blindaje Patrimonial"],
      image: "/images/partner-portrait.jpg",
      accent: "#A69076",
    },
    {
      id: "court-representation",
      number: "05",
      titleEn: "Trial Defense & Representation",
      titleEs: "Representación Legal",
      taglineEn: "Uncompromising trial presence in commercial, civil, and criminal arenas.",
      taglineEs: "Presencia implacable en estrados judiciales civiles, comerciales y penales.",
      descriptionEn: "When negotiations fail, we transition seamlessly into litigation battle stations. Our courtroom advocacy is methodical, aggressive, and commanded by seasoned trial counsel.",
      descriptionEs: "Cuando la negociación se agota, asumimos el litigio con rigor implacable. Nuestra comparecencia procesal es contundente, metódica y respaldada por litigantes experimentados.",
      highlightsEn: ["Appellate & Supreme Courts", "Trial Defense", "Injunctions & Emergency Relief"],
      highlightsEs: ["Casación y Altas Cortes", "Litigio Estratégico", "Acciones de Urgencia"],
      image: "/images/courtroom.jpg",
      accent: "#C5A880",
    },
    {
      id: "negotiation-conciliation",
      number: "06",
      titleEn: "Negotiation & Conciliation",
      titleEs: "Negociación y Conciliación",
      taglineEn: "High-stakes settlement engineering without destructive publicity.",
      taglineEs: "Estructuración de acuerdos reservados sin desgaste público ni judicial.",
      descriptionEn: "We construct confidential, mathematically sound settlement frameworks that preserve capital, protect corporate reputational equity, and enforce definitive closures.",
      descriptionEs: "Construimos acuerdos confidenciales respaldados por análisis de probabilidad procesal para proteger la reputación, neutralizar hostilidades y asegurar cierres definitivos.",
      highlightsEn: ["Confidential Settlements", "Mediation Representation", "Exit Engineering"],
      highlightsEs: ["Acuerdos Confidenciales", "Centros de Conciliación", "Salidas Negociadas"],
      image: "/images/hero-editorial.jpg",
      accent: "#E2C9A5",
    },
    {
      id: "document-architecture",
      number: "07",
      titleEn: "Document Architecture & Review",
      titleEs: "Elaboración y Revisión de Documentos",
      taglineEn: "Ironclad contractual drafting immune to linguistic loopholes.",
      taglineEs: "Redacción contractual blindada e inmune a vacíos interpretativos.",
      descriptionEn: "Every word in a Wexford document is calibrated for tribunal enforceability. We scrutinize, restructure, and draft instruments that leave opposing counsel zero room to maneuver.",
      descriptionEs: "Cada cláusula redactada por Wexford está calibrada para su exigibilidad judicial inmediata. Auditamos y blindamos convenios cerrando cualquier resquicio de ambigüedad.",
      highlightsEn: ["M&A Contract Suites", "Arbitration Clauses", "Pledge & Guarantee Instruments"],
      highlightsEs: ["Contratos Complejos", "Pactos Arbitrales Blindados", "Garantías Reales"],
      image: "/images/asset-recovery.jpg",
      accent: "#D4AF37",
    },
  ] as ServiceItem[],
  caseStudies: [
    {
      id: "case-01",
      code: "REC-2025-09",
      categoryEn: "Capital Recovery",
      categoryEs: "Recuperación Patrimonial",
      titleEn: "Cross-Border Recovery of $28.4M in Diverted Liquidity",
      titleEs: "Recuperación Transfronteriza de $28.4M en Liquidez Desviada",
      challengeEn: "Counterparty concealed corporate assets across multi-tier shell holding vehicles following commercial default.",
      challengeEs: "La contraparte ocultó activos corporativos a través de sociedades instrumentales tras un impago comercial.",
      outcomeEn: "Secured ex-parte freezing injunctions and recovered 100% of outstanding principal with statutory interest within 9 months.",
      outcomeEs: "Se obtuvieron medidas cautelares sin previo aviso y se recuperó el 100% del capital principal más intereses legales en 9 meses.",
      metric: "100%",
      metricLabelEn: "Principal Recovered",
      metricLabelEs: "Capital Recuperado",
      isDemo: true,
    },
    {
      id: "case-02",
      code: "LIT-2024-41",
      categoryEn: "Strategic Defense",
      categoryEs: "Representación Jurídica",
      titleEn: "Annulment of $45M Hostile Commercial Claim",
      titleEs: "Anulación de Demanda Comercial Hostil por $45M",
      challengeEn: "Multi-national consortium faced coordinated claims alleging breach of supply exclusivity across three ports.",
      challengeEs: "Consorcio multinacional enfrentó demandas coordinadas alegando incumplimiento de exclusividad en tres puertos.",
      outcomeEn: "Dismantled opposing evidentiary basis in preliminary trial motions; tribunal dismissed all claims with full legal costs awarded.",
      outcomeEs: "Se desarticuló la prueba de la contraparte en fase previa; el tribunal desestimó la totalidad de la demanda con condena en costas.",
      metric: "$0",
      metricLabelEn: "Client Liability",
      metricLabelEs: "Responsabilidad del Cliente",
      isDemo: true,
    },
    {
      id: "case-03",
      code: "NEG-2025-14",
      categoryEn: "Dispute Conciliation",
      categoryEs: "Negociación Estratégica",
      titleEn: "Resolution of Multi-Partner Joint Venture Deadlock",
      titleEs: "Destrabe de Disputa Societaria en Joint Venture",
      challengeEn: "50/50 shareholder paralysis threatened liquidation of energy infrastructure operations valued at $82M.",
      challengeEs: "Parálisis 50/50 entre socios ponía en riesgo inminente la disolución de infraestructura energética valorada en $82M.",
      outcomeEn: "Engineered confidential buyout mechanism with asset revaluation, executing clean exit within 45 days without litigation.",
      outcomeEs: "Diseño de un mecanismo de adquisición privada con revaloración, ejecutando la salida definitiva en 45 días sin litigio público.",
      metric: "45 Days",
      metricLabelEn: "Time to Full Agreement",
      metricLabelEs: "Tiempo hasta Acuerdo Total",
      isDemo: true,
    },
  ] as CaseStudyItem[],
  testimonials: [
    {
      id: "t-01",
      quoteEn: "Wexford Law operates with the precision of a surgical team and the strategic acumen of chess grandmasters. When other firms saw an impenetrable deadlock, they recovered our capital.",
      quoteEs: "Wexford Law opera con la precisión de cirujanos y la visión de grandes maestros. Cuando otras firmas veían un callejón sin salida, ellos recuperaron nuestro capital.",
      clientEn: "Julian H. Lancaster",
      clientEs: "Julian H. Lancaster",
      positionEn: "Managing Director, Meridian Capital Partners",
      positionEs: "Director General, Meridian Capital Partners",
      matterEn: "International Asset Recovery Matter",
      matterEs: "Recuperación de Activos Internacionales",
      isDemo: true,
    },
    {
      id: "t-02",
      quoteEn: "Their courtroom posture is utterly uncompromising. From the first briefing, there was no fluff—only disciplined strategic leverage that compelled our adversaries to settle on our terms.",
      quoteEs: "Su postura procesal es absolutamente implacable. Desde la primera reunión no hubo rodeos: únicamente estrategia disciplinada que obligó a nuestros adversarios a conciliar.",
      clientEn: "Elena Rostova",
      clientEs: "Elena Rostova",
      positionEn: "General Counsel, Solis Global Infrastructure",
      positionEs: "Directora Jurídica, Solis Global Infrastructure",
      matterEn: "Cross-Border Commercial Litigation",
      matterEs: "Litigio Comercial Transfronterizo",
      isDemo: true,
    },
    {
      id: "t-03",
      quoteEn: "The certainty that Arthur Wexford and his partners bring to the table changes the gravity of any negotiation room. They are the only counsel I entrust with our enterprise risk.",
      quoteEs: "La contundencia que Arthur Wexford y sus socios imponen en la mesa cambia por completo la correlación de fuerzas. Son los únicos abogados en quienes confío el riesgo patrimonial.",
      clientEn: "Marcus Thorne",
      clientEs: "Marcus Thorne",
      positionEn: "Founder & Chairman, Thorne Industrial Holdings",
      positionEs: "Fundador y Presidente, Thorne Industrial Holdings",
      matterEn: "Corporate Defense & Advisory",
      matterEs: "Defensa y Asesoría Corporativa",
      isDemo: true,
    },
  ] as TestimonialItem[],
  offices: [
    {
      city: "New York",
      country: "United States",
      address: "590 Madison Avenue, 32nd Floor, NY 10022",
      phone: "+1 (212) 890-4420",
      email: "newyork@wexfordlaw.com",
      coordinates: { x: 28, y: 36 },
      timezone: "EST / UTC-5",
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "100 Bishopsgate, Level 24, EC2N 4AG",
      phone: "+44 (20) 7946 0831",
      email: "london@wexfordlaw.com",
      coordinates: { x: 48, y: 30 },
      timezone: "GMT / UTC+0",
    },
    {
      city: "Bogotá",
      country: "Colombia",
      address: "Carrera 7 No. 71-21, Torre B, Piso 18",
      phone: "+57 (601) 745-9200",
      email: "bogota@wexfordlaw.com",
      coordinates: { x: 30, y: 55 },
      timezone: "COT / UTC-5",
    },
  ] as OfficeLocation[],
};
