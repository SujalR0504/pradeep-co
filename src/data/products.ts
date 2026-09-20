export interface ProductSpec {
  counts?: string;
  moisture?: string;
  admixture?: string;
  aflatoxin?: string;
  oilContent?: string;
  brokenKernels?: string;
  imperfectDamage?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  hindiName?: string;
  category: "Raw Kernels" | "In-Shell" | "Blanched" | "Value-Added" | "Specialty Brands";
  shortDescription: string;
  description: string;
  image: string;
  gallery: string[];
  origin: string;
  grade: string;
  size: string;
  packaging: string[];
  applications: string[];
  availability: "In Stock / Year-round" | "Seasonal Harvest" | "Seasonal Harvest & Stocked" | "On Request" | "On Request / Custom Batch";
  featured: boolean;
  order: number;
  specs: ProductSpec;
}

export const PRODUCTS: Product[] = [
  {
    id: "bold-peanuts",
    slug: "bold-peanuts",
    name: "Bold Peanuts (Singdana)",
    hindiName: "बोल्ड सींगदाना",
    category: "Raw Kernels",
    shortDescription: "Signature large-sized Indian peanut kernels with characteristic reddish skin and sweet nutty flavor.",
    description: "Bold Peanuts are the benchmark of Indian groundnut exports, prized globally for their large kernel size, elongated shape, and rich nutritional profile. Cultivated in fertile, mineral-rich soils and processed through multi-stage optical sorters, our Bold kernels deliver uniform caliber, exceptional crunch, and optimal oil content for international snack processors and food manufacturers.",
    image: "/images/peanut-bold.webp",
    gallery: [
      "/images/peanut-bold.webp",
      "/images/packaging/authentic-jute-sacks.webp",
      "/images/quality-lab.webp"
    ],
    origin: "Madhya Pradesh & Gujarat, India",
    grade: "Double Sortex Clean / Machine Cleaned",
    size: "38/42, 40/50, 50/60, 60/70, 70/80 Counts / Ounce",
    packaging: [
      "25 kg / 50 kg New Jute Bags",
      "25 kg / 50 kg PP Woven Bags",
      "10 kg / 25 kg Multi-layer Vacuum Cartons",
      "1000 kg Jumbo Bulk Bags"
    ],
    applications: [
      "Direct Snacking & Roasting",
      "Peanut Butter Manufacturing",
      "Confectionery & Bakery Inclusions",
      "Salted & Coated Nut Processing"
    ],
    availability: "In Stock / Year-round",
    featured: true,
    order: 1,
    specs: {
      counts: "38/42, 40/50, 50/60, 60/70, 70/80 / oz",
      moisture: "7.0% - 8.0% Max",
      admixture: "0.5% - 1.0% Max",
      aflatoxin: "Below 4 ppb (or destination compliance)",
      oilContent: "48% - 50% Min",
      brokenKernels: "0.5% - 1.0% Max",
      imperfectDamage: "0.5% Max"
    }
  },
  {
    id: "java-peanuts",
    slug: "java-peanuts",
    name: "Java Peanuts",
    hindiName: "जावा मूंगफली",
    category: "Raw Kernels",
    shortDescription: "Round-shaped, pink-skinned kernels renowned for high oil concentration and uniform roasting profile.",
    description: "Java peanuts are distinctively rounded with bright pink skins and high oil concentration. Their consistent spherical shape ensures even heat distribution during roasting and blanching, making them the preferred choice worldwide for premier confectionery, candy bars, peanut paste, and industrial oil extraction.",
    image: "/images/peanut-bold.webp",
    gallery: [
      "/images/peanut-bold.webp",
      "/images/packaging/authentic-jute-sacks.webp",
      "/images/sortex-machine.webp"
    ],
    origin: "Central & Western Agricultural Belts, India",
    grade: "Export Grade / Electronic Sortex Cleaned",
    size: "40/50, 45/55, 50/60, 60/70, 70/80, 80/90 Counts / Ounce",
    packaging: [
      "25 kg / 50 kg Jute Bags",
      "25 kg / 50 kg PP Bags",
      "Vacuum Packing in Corrugated Boxes"
    ],
    applications: [
      "Confectionery & Nougat Production",
      "High-Yield Peanut Oil Pressing",
      "Extruded Snack Fillers",
      "Bird & Specialty Animal Feeds"
    ],
    availability: "In Stock / Year-round",
    featured: true,
    order: 2,
    specs: {
      counts: "40/50, 50/60, 60/70, 70/80, 80/90 / oz",
      moisture: "7.0% Max",
      admixture: "0.5% Max",
      aflatoxin: "< 4 ppb / EU Compliant",
      oilContent: "50% - 52% Min",
      brokenKernels: "1.0% Max"
    }
  },
  {
    id: "peanuts-in-shell",
    slug: "peanuts-in-shell",
    name: "Groundnuts In-Shell",
    hindiName: "साबुत मूंगफली",
    category: "In-Shell",
    shortDescription: "Unbroken, naturally sun-cured peanut pods containing 2-3 firm kernels inside clean mesh shells.",
    description: "Harvested at peak physiological maturity, our In-Shell Groundnuts undergo gentle de-stoning, mechanical de-dusting, and thorough hand-sorting. The shells are bright, fibrous, and structurally robust, protecting the inner kernels from oxidation and preserving harvest-fresh sweetness for wholesale bulk trade and traditional roasting.",
    image: "/images/peanut-inshell.webp",
    gallery: [
      "/images/peanut-inshell.webp",
      "/images/harvest-farmer.webp",
      "/images/packaging/authentic-jute-sacks.webp"
    ],
    origin: "Madhya Pradesh, India",
    grade: "Machine Cleaned & Hand Picked Selected (HPS)",
    size: "Available on request (18/22, 22/26 pods / ounce)",
    packaging: [
      "20 kg / 30 kg Aerated Jute Sacks",
      "25 kg Polypropylene Bags",
      "Bulk Container Stuffing"
    ],
    applications: [
      "Traditional Sand Roasting & Salting",
      "Wholesale Pod Repackaging",
      "Festival & Shell Snack Markets",
      "Seed Grain Selection"
    ],
    availability: "Seasonal Harvest & Stocked",
    featured: true,
    order: 3,
    specs: {
      counts: "18/22, 22/26 pods / oz",
      moisture: "8.0% - 9.0% Max",
      admixture: "1.0% Max",
      aflatoxin: "Below 4 ppb",
      brokenKernels: "Negligible"
    }
  },
  {
    id: "whole-blanched-peanuts",
    slug: "whole-blanched-peanuts",
    name: "Whole Blanched Peanuts",
    hindiName: "होल ब्लैंक्ड मूंगफली",
    category: "Blanched",
    shortDescription: "Skin-free, ivory-white whole peanut kernels processed with gentle steam skin-removal and optical sorting.",
    description: "Whole Blanched Peanuts are produced by gently heating high-grade raw kernels, passing them through gentle de-skinning rollers, and optical sorters to remove unblanched skins. The result is a pristine, ivory-white whole nut kernel with smooth surfaces, ready for instant industrial frying, coating, chocolate panning, and culinary production.",
    image: "/images/blanched-peanuts.webp",
    gallery: [
      "/images/blanched-peanuts.webp",
      "/images/sortex-machine.webp",
      "/images/quality-lab.webp"
    ],
    origin: "India",
    grade: "Grade A / 100% Skin Removed / Sortex Clean",
    size: "38/42, 40/50, 50/60 Counts / Ounce",
    packaging: [
      "10 kg / 25 kg Vacuum Nitrogen-Flushed Bags in Cartons",
      "25 kg Multi-wall Paper Bags with PE Liner",
      "1000 kg Jumbo Bags"
    ],
    applications: [
      "Gourmet Fried & Salted Snack Packs",
      "Chocolate Bar Centers & Dragees",
      "Smooth & Super-Fine Peanut Butter",
      "Premium Asian & Continental Sauces"
    ],
    availability: "In Stock / Year-round",
    featured: true,
    order: 4,
    specs: {
      counts: "38/42, 40/50, 50/60 / oz",
      moisture: "5.0% - 6.0% Max",
      admixture: "0.05% Max",
      aflatoxin: "Negative / < 2 ppb",
      oilContent: "49% - 51%",
      brokenKernels: "Max 3% Splits (in Whole Grade)"
    }
  },
  {
    id: "split-blanched-peanuts",
    slug: "split-blanched-peanuts",
    name: "Split Blanched Peanuts",
    hindiName: "स्प्लिट ब्लैंक्ड मूंगफली",
    category: "Blanched",
    shortDescription: "Evenly halved skinless peanut splits, providing high surface area for industrial peanut butter and bars.",
    description: "Split Blanched Peanuts feature skinless, heart-removed split cotyledons with uniform golden-white color. Because of their split profile, they grind effortlessly into ultra-smooth peanut butter, blend into energy bar masses, and serve as crunchy toppings for commercial bakery goods.",
    image: "/images/blanched-peanuts.webp",
    gallery: [
      "/images/blanched-peanuts.webp",
      "/images/peanut-oil-butter.webp"
    ],
    origin: "India",
    grade: "Industrial Export Grade / Sortex Clean",
    size: "40/50, 50/60 equivalent",
    packaging: [
      "25 kg Vacuum Bags in Corrugated Box",
      "25 kg Polypropylene Bags with Poly Liner",
      "Custom bulk options"
    ],
    applications: [
      "Commercial Peanut Butter Mills",
      "Granola, Muesli & Cereal Mixes",
      "Cookie, Cake & Bakery Doughs",
      "Nut-based Protein Supplements"
    ],
    availability: "In Stock / Year-round",
    featured: false,
    order: 5,
    specs: {
      moisture: "5.5% Max",
      admixture: "0.1% Max",
      aflatoxin: "< 4 ppb",
      oilContent: "49% - 50%"
    }
  },
  {
    id: "roasted-peanuts",
    slug: "roasted-peanuts",
    name: "Roasted Peanuts (Kernels & In-Shell)",
    hindiName: "भुनी हुई मूंगफली",
    category: "Value-Added",
    shortDescription: "Evenly roasted peanuts offering intense aromatic nuttiness, available salted, unsalted, and sand-roasted.",
    description: "Our roasted peanuts are processed in controlled temperature roasters to achieve a uniform golden roast and signature snap. Available in whole kernels, split, salted, or traditional sand-roasted styles that maintain their crispness across long shipping transits.",
    image: "/images/peanut-roasted.webp",
    gallery: [
      "/images/peanut-roasted.webp",
      "/images/peanut-bold.webp",
      "/images/packaging/authentic-jute-sacks.webp"
    ],
    origin: "India",
    grade: "Ready-to-Eat / Export Certified",
    size: "Calibrated 40/50, 50/60 Counts",
    packaging: [
      "Vacuum Foil Pouches (1 kg, 5 kg, 10 kg)",
      "25 kg Food Grade Cartons with Nitrogen Barrier",
      "Custom Client Retail Packaging"
    ],
    applications: [
      "Retail Snack Pack Distribution",
      "Bar & Hospitality Service",
      "Trail Mix Formulation",
      "Ice Cream & Dessert Toppings"
    ],
    availability: "On Request / Custom Batch",
    featured: true,
    order: 6,
    specs: {
      moisture: "2.5% - 3.5% Max",
      admixture: "Nil",
      aflatoxin: "Below Detectable Limits"
    }
  },
  {
    id: "cold-pressed-groundnut-oil",
    slug: "cold-pressed-groundnut-oil",
    name: "Cold-Pressed Groundnut Oil",
    hindiName: "कोल्ड प्रेस्ड मूंगफली तेल",
    category: "Value-Added",
    shortDescription: "Pure, virgin expeller-pressed peanut oil with a high smoke point and authentic sweet groundnut aroma.",
    description: "Extracted using traditional slow mechanical expellers without chemical refining, solvents, or excessive heat. Our unrefined groundnut oil preserves natural antioxidants, phytosterols, and delicate mono-unsaturated fats, making it a high-grade culinary oil sought after for gourmet cooking and fine food manufacturing.",
    image: "/images/peanut-oil-butter.webp",
    gallery: [
      "/images/peanut-oil-butter.webp",
      "/images/shipping-port.webp"
    ],
    origin: "Madhya Pradesh, India",
    grade: "100% Virgin Food Grade / Unrefined",
    size: "15L Tins / 200L Steel Drums / 1000L IBC Tanks / Flexitanks",
    packaging: [
      "15 kg / 15 Litre Food Grade Tin Containers",
      "190 kg / 200 Litre Epoxy-Coated Steel Drums",
      "1000 Litre IBC Containers",
      "21 MT Flexibag Containers for Bulk Marine Export"
    ],
    applications: [
      "High-Heat Deep Frying & Culinary Preparations",
      "Artisanal Food Seasoning",
      "Natural Cosmetic & Massage Formulations",
      "Clean-label Salad Dressing Bases"
    ],
    availability: "In Stock / Year-round",
    featured: false,
    order: 7,
    specs: {
      moisture: "0.15% Max",
      oilContent: "100% Pure Arachis Oil",
      brokenKernels: "N/A"
    }
  },
  {
    id: "pure-peanut-butter",
    slug: "pure-peanut-butter",
    name: "Pure Natural Peanut Butter",
    hindiName: "नेचुरल पीनट बटर",
    category: "Value-Added",
    shortDescription: "100% roasted groundnut paste with zero hydrogenated oils, available in Creamy and Crunchy textures.",
    description: "Crafted exclusively from selected Indian roasted peanuts. Ground in stone mills to achieve micron-level smoothness or custom-formulated with roasted peanut granulate for crunchiness. Tailored for private label retail, bulk food-service pails, and confectionery ingredients.",
    image: "/images/peanut-oil-butter.webp",
    gallery: [
      "/images/peanut-oil-butter.webp",
      "/images/blanched-peanuts.webp"
    ],
    origin: "India",
    grade: "Custom Specifications / Private Label Ready",
    size: "Available in Creamy, Crunchy, and Natural styles",
    packaging: [
      "340g / 500g / 1kg PET / Glass Jars",
      "20 kg / 25 kg Food Service Buckets",
      "200 kg Steel Drums"
    ],
    applications: [
      "Private Label Supermarket Brands",
      "Breakfast Spread Distribution",
      "Sports Nutrition & Protein Products",
      "Bakery Filling & Glazing"
    ],
    availability: "On Request / Custom Batch",
    featured: false,
    order: 8,
    specs: {
      moisture: "1.5% Max",
      aflatoxin: "Below 4 ppb"
    }
  },
  {
    id: "king-brand-singdana",
    slug: "king-brand-singdana",
    name: "King Brand Super Fine Singdana",
    hindiName: "किंग ब्राण्ड सुपर फाईन सींगदाना",
    category: "Specialty Brands",
    shortDescription: "Authentic double-sortex cleaned peanut kernels packed in traditional protective jute sacks from Bhonti, Shivpuri.",
    description: "Representing our proprietary brand heritage from Bhonti, Dist. Shivpuri (M.P.), King Brand Super Fine Singdana is rigorously double-sortex cleaned and sized to perfection. Packed in durable traditional breathable jute bags that safeguard the natural oil profile and prevent condensation during long-distance transit.",
    image: "/images/packaging/king-brand-singdana.webp",
    gallery: [
      "/images/packaging/king-brand-singdana.webp",
      "/images/packaging/authentic-jute-sacks.webp",
      "/images/peanut-bold.webp"
    ],
    origin: "Bhonti, Dist. Shivpuri, Madhya Pradesh, India",
    grade: "Super Fine / Double Sortex Cleaned",
    size: "Calibrated Bold / Java Varieties",
    packaging: [
      "50 kg Branded King Brand Heavy Duty Jute Bags",
      "25 kg Export Grade Polypropylene Bags"
    ],
    applications: [
      "Wholesale Grain Markets & Mandis",
      "Premium Snacking & Roasting Facilities",
      "Bulk Regional Redistribution"
    ],
    availability: "In Stock / Year-round",
    featured: true,
    order: 9,
    specs: {
      moisture: "7.0% - 7.5% Max",
      admixture: "0.5% Max",
      aflatoxin: "Tested Lot-by-Lot"
    }
  },
  {
    id: "samman-peanut",
    slug: "samman-peanut",
    name: "Samman Peanut (Double Sortex)",
    hindiName: "सम्मान मूंगफली दाना",
    category: "Specialty Brands",
    shortDescription: "High-protein, carefully selected double sortex peanut kernels packed under the trusted Samman banner.",
    description: "Crafted around the philosophy 'Khao Samman Se, Jio Samman Se', our Samman Peanut offering provides clean, double-sortex processed kernels loaded with natural plant proteins and essential nutrients. Processed and packaged directly from our Shivpuri facility with uncompromising quality standards.",
    image: "/images/packaging/samman-peanuts-packaging.webp",
    gallery: [
      "/images/packaging/samman-peanuts-packaging.webp",
      "/images/packaging/authentic-jute-sacks.webp",
      "/images/quality-lab.webp"
    ],
    origin: "Bhonti, Dist. Shivpuri, Madhya Pradesh, India",
    grade: "Premium Quality Double Sortex",
    size: "Standard Export Counts Available",
    packaging: [
      "Branded Heavy Duty Burlap & Jute Sacks",
      "Vacuum Cartons for Global Export"
    ],
    applications: [
      "Health-Conscious Protein Snack Distribution",
      "Specialty Ethnic Grocery Importers",
      "Commercial Food Service"
    ],
    availability: "In Stock / Year-round",
    featured: true,
    order: 10,
    specs: {
      moisture: "7.0% Max",
      admixture: "0.5% Max"
    }
  }
];

export const PRODUCT_CATEGORIES = [
  "All Products",
  "Raw Kernels",
  "In-Shell",
  "Blanched",
  "Value-Added",
  "Specialty Brands"
] as const;
