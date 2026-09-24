export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highlights: string[];
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Sourcing",
    subtitle: "Direct Farm Gate Relationship",
    description: "We work directly with agricultural growers across the renowned groundnut cultivation belts of Madhya Pradesh and Gujarat, ensuring certified non-GMO seed selection, organic soil practices, and transparent harvest procurement.",
    image: "/images/hero-field.webp",
    highlights: ["Regional farm partnerships", "Soil health verification", "Traceable agricultural origins"]
  },
  {
    step: "02",
    title: "Harvest",
    subtitle: "Optimal Physiological Maturity",
    description: "Crops are harvested at precisely calibrated kernel moisture levels to prevent pod stress. Groundnut bushes are gently lifted and inverted for natural sun curing under clean, controlled field conditions.",
    image: "/images/harvest-farmer.webp",
    highlights: ["Natural field curing", "Gentle root lifting", "Moisture-controlled curing"]
  },
  {
    step: "03",
    title: "Cleaning",
    subtitle: "Foreign Matter Elimination",
    description: "Raw harvested pods pass through high-capacity mechanical pre-cleaners, rotary sieves, and de-stoners to eliminate all mud clumps, soil residues, plant stalks, and inert external impurities.",
    image: "/images/peanut-inshell.webp",
    highlights: ["Multi-deck de-stoning", "Air aspiration systems", "Zero field debris"]
  },
  {
    step: "04",
    title: "Sorting",
    subtitle: "High-Resolution Optical Color Detection",
    description: "Utilizing advanced multi-camera electronic Sortex technology, kernels are scanned pixel-by-pixel. Imperfect, discolored, immature, or damaged seeds are ejected via micro-pneumatic air jets at millisecond speeds.",
    image: "/images/sortex-machine.webp",
    highlights: ["Bichromatic infrared optics", "Double-sortex precision", "Color & shape recognition"]
  },
  {
    step: "05",
    title: "Grading",
    subtitle: "Count-per-Ounce Sizing Calibration",
    description: "Cleaned kernels are screened through calibrated cylindrical grading drums to separate precise export count calibers (such as 38/42, 40/50, 50/60, and 70/80 counts per ounce) with strict uniformity.",
    image: "/images/peanut-bold.webp",
    highlights: ["Standardized count calibration", "Uniform kernel sizing", "Custom buyer grading screens"]
  },
  {
    step: "06",
    title: "Processing",
    subtitle: "Value-Added Blanching & Roasting",
    description: "For specialized orders, graded kernels undergo gentle radiant heat blanching to loosen outer skins, followed by skin removal, splitting, or precision hot-air roasting to release essential natural nut aromas.",
    image: "/images/whole-blanched-peanuts.webp",
    highlights: ["Low-temperature skin release", "Split & whole options", "Controlled drum roasting"]
  },
  {
    step: "07",
    title: "Packaging",
    subtitle: "Export-Ready Barrier Protection",
    description: "Finished products are hygienically packed into client-specified packaging: breathable woven jute sacks, heavy-duty PP bags, or vacuum-sealed cartons with nitrogen flushing to guarantee peak freshness during sea transport.",
    image: "/images/packaging/authentic-jute-sacks.webp",
    highlights: ["Traditional aerated jute sacks", "Multi-layer vacuum cartons", "Tamper-evident sealing"]
  },
  {
    step: "08",
    title: "Export",
    subtitle: "Global Port Dispatch & Container Logistics",
    description: "Packed consignments are palletized, desiccant-loaded, and stuffed into maritime shipping containers under strict supervision, dispatched directly to primary Indian ocean ports for worldwide freight delivery.",
    image: "/images/shipping-port.webp",
    highlights: ["Pre-shipment port inspections", "Container moisture control", "Seamless customs documentation"]
  }
];
