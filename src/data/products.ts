export interface ProductSpec {
  counts?: string;
  moisture?: string;
  admixture?: string;
  aflatoxin?: string;
  oilContent?: string;
  brokenKernels?: string;
  imperfectDamage?: string;
  purity?: string;
  protein?: string;
  foreignMatter?: string;
  crudeFiber?: string;
  freeFattyAcid?: string;
  refractiveIndex?: string;
  sugarContent?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  hindiName?: string;
  category: "Raw Kernels" | "In-Shell" | "Blanched" | "Value-Added" | "Other Products";
  shortDescription: string;
  description: string;
  image: string;
  gallery: string[];
  origin: string;
  grade: string;
  size: string;
  packaging: string[];
  packagingNote?: string;
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
    name: "Bold Peanuts",
    hindiName: "बोल्ड सींगदाना",
    category: "Raw Kernels",
    shortDescription: "Signature large-sized Indian peanut kernels with characteristic reddish skin and sweet nutty flavor.",
    description: "Bold Peanuts are the benchmark of Indian groundnut exports, prized globally for their large kernel size, elongated shape, and rich nutritional profile. Cultivated in fertile, mineral-rich soils and processed through multi-stage optical sorters, our Bold kernels deliver uniform caliber, exceptional crunch, and optimal oil content for international snack processors and food manufacturers.",
    image: "/images/peanut-bold.webp",
    gallery: [
      "/images/peanut-bold.webp"
    ],
    origin: "Madhya Pradesh & Gujarat, India",
    grade: "Double Sortex Clean / Machine Cleaned",
    size: "38/42, 40/50, 50/60, 60/70, 70/80 Counts / Ounce",
    packaging: [
      "15 kg Jute Bags",
      "50 kg Jute Bags",
      "50 kg PP Bags",
      "25 kg PP Bags",
      "15 kg PP Bags",
      "25 kg Vacuum Bags",
      "12.5 kg Vacuum Bags",
      "1 MT Jumbo Bags",
      "1.25 MT Jumbo Bags",
      "Customised Packaging (As per buyer requirements)"
    ],
    packagingNote: "We offer customised packaging solutions as per our customers' specific requirements. (Or customised packaging as per buyer requirements.)",
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
    image: "/images/java-peanuts.webp",
    gallery: [
      "/images/java-peanuts.webp"
    ],
    origin: "Central & Western Agricultural Belts, India",
    grade: "Export Grade / Electronic Sortex Cleaned",
    size: "40/50, 45/55, 50/60, 60/70, 70/80, 80/90 Counts / Ounce",
    packaging: [
      "15 kg Jute Bags",
      "50 kg Jute Bags",
      "50 kg PP Bags",
      "25 kg PP Bags",
      "15 kg PP Bags",
      "25 kg Vacuum Bags",
      "12.5 kg Vacuum Bags",
      "1 MT Jumbo Bags",
      "1.25 MT Jumbo Bags",
      "Customised Packaging (As per buyer requirements)"
    ],
    packagingNote: "We offer customised packaging solutions as per our customers' specific requirements. (Or customised packaging as per buyer requirements.)",
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
    id: "tj-peanuts",
    slug: "tj-peanuts",
    name: "TJ Peanuts",
    hindiName: "टीजे मूंगफली",
    category: "Raw Kernels",
    shortDescription: "Small-to-medium compact Indian peanut kernels with reddish-pink skin and high natural sweetness, ideal for confectionery and peanut brittle.",
    description: "TJ (Tirupati / Java type) groundnuts are renowned in global markets for their uniform compact caliber, smooth pinkish-red seed coat, and natural sweetness. With quick, even roasting characteristics and high oil content (48-50%), TJ peanuts are the premier export choice worldwide for confectionery chikki, coated peanut snacks, candy bar centers, and birdfeed blends.",
    image: "/images/tj-peanuts.webp",
    gallery: [
      "/images/tj-peanuts.webp"
    ],
    origin: "Madhya Pradesh & Gujarat, India",
    grade: "Double Sortex Clean / Machine Cleaned",
    size: "50/60, 60/70, 70/80, 80/90, 90/100, 140/160 Counts / Ounce",
    packaging: [
      "15 kg Jute Bags",
      "50 kg Jute Bags",
      "50 kg PP Bags",
      "25 kg PP Bags",
      "15 kg PP Bags",
      "25 kg Vacuum Bags",
      "12.5 kg Vacuum Bags",
      "1 MT Jumbo Bags",
      "1.25 MT Jumbo Bags",
      "Customised Packaging (As per buyer requirements)"
    ],
    packagingNote: "We offer customised packaging solutions as per our customers' specific requirements. (Or customised packaging as per buyer requirements.)",
    applications: [
      "Confectionery & Chikki / Brittle Making",
      "Coated Peanuts & Savory Snacks",
      "High-Yield Peanut Oil Pressing",
      "Direct Roasting & Salted Peanuts",
      "Birdfeed & Premium Feed Blends"
    ],
    availability: "In Stock / Year-round",
    featured: true,
    order: 3,
    specs: {
      counts: "50/60, 60/70, 70/80, 80/90, 90/100, 140/160 / oz",
      moisture: "7.0% Max",
      admixture: "0.5% - 1.0% Max",
      aflatoxin: "< 4 ppb / EU Compliant",
      oilContent: "48% - 50% Min",
      brokenKernels: "0.5% - 1.0% Max",
      imperfectDamage: "0.5% Max"
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
      "/images/peanut-inshell.webp"
    ],
    origin: "Madhya Pradesh, India",
    grade: "Machine Cleaned & Hand Picked Selected (HPS)",
    size: "Available on request (18/22, 22/26 pods / ounce)",
    packaging: [
      "15 kg Jute Bags",
      "50 kg Jute Bags",
      "50 kg PP Bags",
      "25 kg PP Bags",
      "15 kg PP Bags",
      "25 kg Vacuum Bags",
      "12.5 kg Vacuum Bags",
      "1 MT Jumbo Bags",
      "1.25 MT Jumbo Bags",
      "Customised Packaging (As per buyer requirements)"
    ],
    packagingNote: "We offer customised packaging solutions as per our customers' specific requirements. (Or customised packaging as per buyer requirements.)",
    applications: [
      "Traditional Sand Roasting & Salting",
      "Wholesale Pod Repackaging",
      "Festival & Shell Snack Markets",
      "Seed Grain Selection"
    ],
    availability: "Seasonal Harvest & Stocked",
    featured: true,
    order: 4,
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
    image: "/images/whole-blanched-peanuts.webp",
    gallery: [
      "/images/whole-blanched-peanuts.webp"
    ],
    origin: "India",
    grade: "Grade A / 100% Skin Removed / Sortex Clean",
    size: "38/42, 40/50, 50/60 Counts / Ounce",
    packaging: [
      "15 kg Jute Bags",
      "50 kg Jute Bags",
      "50 kg PP Bags",
      "25 kg PP Bags",
      "15 kg PP Bags",
      "25 kg Vacuum Bags",
      "12.5 kg Vacuum Bags",
      "1 MT Jumbo Bags",
      "1.25 MT Jumbo Bags",
      "Customised Packaging (As per buyer requirements)"
    ],
    packagingNote: "We offer customised packaging solutions as per our customers' specific requirements. (Or customised packaging as per buyer requirements.)",
    applications: [
      "Gourmet Fried & Salted Snack Packs",
      "Chocolate Bar Centers & Dragees",
      "Smooth & Super-Fine Peanut Butter",
      "Premium Asian & Continental Sauces"
    ],
    availability: "In Stock / Year-round",
    featured: true,
    order: 5,
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
    image: "/images/split-blanched-peanuts.webp",
    gallery: [
      "/images/split-blanched-peanuts.webp"
    ],
    origin: "India",
    grade: "Industrial Export Grade / Sortex Clean",
    size: "40/50, 50/60 equivalent",
    packaging: [
      "15 kg Jute Bags",
      "50 kg Jute Bags",
      "50 kg PP Bags",
      "25 kg PP Bags",
      "15 kg PP Bags",
      "25 kg Vacuum Bags",
      "12.5 kg Vacuum Bags",
      "1 MT Jumbo Bags",
      "1.25 MT Jumbo Bags",
      "Customised Packaging (As per buyer requirements)"
    ],
    packagingNote: "We offer customised packaging solutions as per our customers' specific requirements. (Or customised packaging as per buyer requirements.)",
    applications: [
      "Commercial Peanut Butter Mills",
      "Granola, Muesli & Cereal Mixes",
      "Cookie, Cake & Bakery Doughs",
      "Nut-based Protein Supplements"
    ],
    availability: "In Stock / Year-round",
    featured: false,
    order: 6,
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
      "/images/peanut-roasted.webp"
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
    order: 7,
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
      "/images/peanut-oil-butter.webp"
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
    order: 8,
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
      "/images/peanut-oil-butter.webp"
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
    order: 9,
    specs: {
      moisture: "1.5% Max",
      aflatoxin: "Below 4 ppb"
    }
  },
  {
    id: "mahua-flower",
    slug: "mahua-flower",
    name: "Mahua Flower",
    hindiName: "महुआ फूल (Dried Mahua Flowers)",
    category: "Other Products",
    shortDescription: "Sun-dried natural organic Mahua (Madhuca Longifolia) flowers sourced from Central Indian forest belts.",
    description: "Sourced from the pristine deciduous forest belts of Madhya Pradesh, our sun-dried Mahua Flowers are rich in natural fruit sugars, minerals, and polyphenolic bio-compounds. Hand-collected at peak seasonal drop, solar-cured on clean breathable tarpaulins, and thoroughly graded for food processing, botanical beverages, natural sweeteners, and Ayurvedic formulations.",
    image: "/images/mahua-flower.webp",
    gallery: [
      "/images/mahua-flower.webp"
    ],
    origin: "Madhya Pradesh & Central India",
    grade: "Cleaned & Sun-Dried / Export Quality",
    size: "Whole Dried Botanical Flowers",
    packaging: [
      "25 kg / 40 kg Breathable Twill Jute Sacks",
      "25 kg Laminated High-Density PP Bags",
      "Custom Export Packaging on Request"
    ],
    applications: [
      "Natural Fruit Sugar & Syrup Extraction",
      "Botanical & Traditional Fermentation",
      "Ayurvedic & Herbal Formulations",
      "Organic Animal Feed Fortification"
    ],
    availability: "Seasonal Harvest & Stocked",
    featured: true,
    order: 10,
    specs: {
      moisture: "10.0% - 12.0% Max",
      purity: "99.0% Min",
      admixture: "0.5% Max",
      sugarContent: "65% - 70% Natural Sugars"
    }
  },
  {
    id: "wheat-barley",
    slug: "wheat-barley",
    name: "Wheat & Barley",
    hindiName: "गेहूं एवं जौ (Export Grade Wheat & Barley Grains)",
    category: "Other Products",
    shortDescription: "Golden Sharbati & Milling Wheat alongside high-fiber, machine-cleaned Barley grains.",
    description: "Premium agricultural grain consignments cultivated in Madhya Pradesh's mineral-rich fertile soils. Our Milling and Sharbati Wheat features high gluten index, robust hectolitre weight, and rich protein, while our machine-cleaned Barley delivers uniform grain weight, low moisture, and high starch ideal for malt extraction, flour milling, and high-nutrition feed.",
    image: "/images/wheat-barley.jpg",
    gallery: [
      "/images/wheat-barley.jpg"
    ],
    origin: "Madhya Pradesh & Central India",
    grade: "Sortex Clean / Machine Cleaned Grade A",
    size: "Uniform Calibrated Heavy Grains",
    packaging: [
      "50 kg New Export Jute Sacks",
      "25 kg / 50 kg Woven PP Sacks with Liner",
      "Bulk Container Liner Stuffing (24 MT in 20ft FCL)"
    ],
    applications: [
      "Commercial Flour Milling & Bakeries",
      "Malt & Brewing Extraction",
      "Breakfast Cereals & Granola Formulations",
      "Poultry & High-Protein Livestock Feed"
    ],
    availability: "In Stock / Year-round",
    featured: true,
    order: 11,
    specs: {
      moisture: "11.0% - 12.0% Max",
      purity: "99.0% Min",
      protein: "11.5% - 13.0% Min",
      foreignMatter: "0.5% Max"
    }
  },
  {
    id: "mustard-seeds",
    slug: "mustard-seeds",
    name: "Mustard Seeds",
    hindiName: "सरसों के बीज (Black & Yellow Mustard Seeds)",
    category: "Other Products",
    shortDescription: "High-oil content machine-cleaned natural Black and Yellow Mustard seeds from Central India.",
    description: "Grown in the semi-arid sandy loam belts of Central India and Rajasthan, our Mustard Seeds are renowned for intense pungency and high natural oil yield (38-42%). Cleaned via vibratory gravity separators, air aspiration, and optical CCD color sorters for spice packaging, oil pressing, and industrial seasonings.",
    image: "/images/mustard-seeds.jpg",
    gallery: [
      "/images/mustard-seeds.jpg"
    ],
    origin: "Madhya Pradesh & Rajasthan, India",
    grade: "Sortex Clean / Micro-Cleaned 99.5%",
    size: "Uniform Spherical Seeds (Black / Yellow)",
    packaging: [
      "25 kg / 50 kg New Jute Sacks",
      "25 kg Multi-wall Paper Bags with PE Liner",
      "1000 kg Jumbo Big Bags"
    ],
    applications: [
      "Cold-Pressed & Kacchi Ghani Mustard Oil Pressing",
      "Whole Spice Blends, Pickles & Seasonings",
      "Condiment & Mustard Paste Production",
      "De-oiled Mustard Meal for Organic Fertilizer"
    ],
    availability: "In Stock / Year-round",
    featured: true,
    order: 12,
    specs: {
      moisture: "7.0% Max",
      oilContent: "38.0% - 42.0% Min",
      purity: "99.5% Min",
      foreignMatter: "0.5% Max"
    }
  },
  {
    id: "groundnut-oil-cake",
    slug: "groundnut-oil-cake",
    name: "Groundnut Oil Cake",
    hindiName: "मूंगफली की खल (De-Oiled Cake / Cattle Feed)",
    category: "Other Products",
    shortDescription: "Expeller-pressed groundnut cake flakes packed with 45%+ bypass protein for dairy and aqua feeds.",
    description: "Derived during the mechanical expeller oil extraction of pure Indian groundnut seeds. Our groundnut oil cake preserves essential digestible amino acids and natural lipid fractions, serving as a trusted high-protein supplement for dairy cattle feed, broiler poultry rations, and commercial aquaculture.",
    image: "/images/groundnut-oil-cake.jpg",
    gallery: [
      "/images/groundnut-oil-cake.jpg"
    ],
    origin: "Madhya Pradesh, India",
    grade: "Expeller Pressed / High Protein Feed Grade",
    size: "Pressed Flakes / Coarse Meal",
    packaging: [
      "50 kg Heavy Duty Polypropylene Bags",
      "50 kg Jute Sacks",
      "1000 kg Jumbo Tote Bags"
    ],
    applications: [
      "Dairy Cattle Concentrates & Milk Yield Feeds",
      "Poultry Broiler & Layer Protein Mash",
      "Aquaculture Floating Feed Pellets",
      "Organic Soil Nitrogen Enrichment"
    ],
    availability: "In Stock / Year-round",
    featured: true,
    order: 13,
    specs: {
      protein: "45.0% - 48.0% Crude Protein Min",
      moisture: "8.0% Max",
      crudeFiber: "6.0% Max",
      oilContent: "6.0% - 8.0% Residual Oil"
    }
  }
];

export const PRODUCT_CATEGORIES = [
  "All Products",
  "Raw Kernels",
  "In-Shell",
  "Blanched",
  "Value-Added",
  "Other Products"
] as const;
