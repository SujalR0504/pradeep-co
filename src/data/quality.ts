export interface QualityStage {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  metric: string;
  image: string;
  parameters: string[];
}

export const QUALITY_STAGES: QualityStage[] = [
  {
    number: "01",
    title: "Selection",
    subtitle: "Origin & Crop Inspection",
    description: "Every shipment begins with strict lot sampling at the procurement stage. We inspect moisture content, shell integrity, and physical grain maturity before lot approval into our processing facilities.",
    metric: "100% Traceability",
    image: "/images/harvest-farmer.webp",
    parameters: ["Crop maturity verification", "Acreage soil profile testing", "Non-GMO status assurance"]
  },
  {
    number: "02",
    title: "Sorting",
    subtitle: "Advanced Double-Sortex Elimination",
    description: "Our high-precision optical sorters evaluate every single seed. Using advanced optical cameras and infrared sensors, foreign materials, split-skins, and discolored kernels are removed instantaneously.",
    metric: "99.9% Purity Level",
    image: "/images/sortex-machine.webp",
    parameters: ["Electronic optical color sorting", "Foreign particle removal", "Defective seed rejection"]
  },
  {
    number: "03",
    title: "Grading",
    subtitle: "Calibrated Count-per-Ounce Sizing",
    description: "Precision perforated rotary screens separate peanuts into standard export sizes. This assures customers of uniform dimensions essential for predictable roasting, coating, and confectionery production.",
    metric: "Exact Count Calibration",
    image: "/images/peanut-bold.webp",
    parameters: ["38/42, 40/50, 50/60 & 70/80 screen separation", "Uniform seed length distribution", "Minimum screen tolerance"]
  },
  {
    number: "04",
    title: "Quality Check",
    subtitle: "Laboratory Testing & Safety Protocols",
    description: "Samples from each processed lot undergo analytical laboratory testing for moisture levels (max 7-8%), free fatty acid (FFA), peroxide value, and total aflatoxins to adhere to strict global import standards.",
    metric: "Aflatoxin < 4 ppb Capable",
    image: "/images/quality-lab.webp",
    parameters: ["Digital halogen moisture analysis", "Aflatoxin B1/B2/G1/G2 testing", "Foreign matter content < 0.5%"]
  },
  {
    number: "05",
    title: "Packaging",
    subtitle: "Controlled Barrier Storage",
    description: "Packaging takes place under clean, climate-managed protocols. We supply breathable heavy-duty jute bags, sealed polypropylene bags, or multi-layer vacuum cartons that protect against moisture ingress during sea voyages.",
    metric: "Hygienic Export Standards",
    image: "/images/packaging/authentic-jute-sacks.webp",
    parameters: ["Food-grade certified bags & liners", "Container desiccant strips", "Comprehensive lot labeling"]
  }
];
