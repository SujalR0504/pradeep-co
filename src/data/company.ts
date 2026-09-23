export interface LeadershipMember {
  name: string;
  role: string;
  phone: string;
  formattedPhone: string;
  whatsapp: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
}

export interface CompanyInfo {
  name: string;
  shortName: string;
  tagline: string;
  supportingLine: string;
  heritage: {
    yearsOfExpertise: string;
    processingCapacity: string;
    annualVolume: string;
    countriesExported: string;
  };
  location: {
    town: string;
    district: string;
    state: string;
    country: string;
    fullAddress: string;
    mandiHub: string;
    portHubs: string[];
  };
  contact: {
    primaryPhone: string;
    formattedPhone: string;
    whatsappNumber: string;
    email: string;
    exportEmail: string;
  };
  leadership: LeadershipMember[];
  positioningPillars: {
    number: string;
    title: string;
    summary: string;
    detail: string;
  }[];
  sustainabilityPillars: {
    step: string;
    title: string;
    description: string;
  }[];
}

export const COMPANY_INFO: CompanyInfo = {
  name: "Pradeep Trading Company",
  shortName: "Pradeep Trading",
  tagline: "INDIA'S BENCHMARK GROUNDNUT & PEANUT EXPORTER",
  supportingLine:
    "65+ years of Indian farming heritage combined with 4 MT/hour double-sortex processing to supply premium peanuts across 35+ global destinations.",
  heritage: {
    yearsOfExpertise: "65+ Years",
    processingCapacity: "4 Metric Tons / Hour",
    annualVolume: "50,000+ Metric Tons",
    countriesExported: "35+ Countries",
  },
  location: {
    town: "Bhonti",
    district: "Shivpuri",
    state: "Madhya Pradesh",
    country: "India",
    fullAddress: "Bhonti, District Shivpuri, Madhya Pradesh - 473551, India",
    mandiHub: "Shivpuri & Saurashtra Agri Market Hubs",
    portHubs: ["Mundra Port (INMUN1)", "Nhava Sheva (INNSA1)"],
  },
  contact: {
    primaryPhone: "+919589790997",
    formattedPhone: "+91-9589790997",
    whatsappNumber: "+919589790997",
    email: "pradeeptradingcomp@gmail.com",
    exportEmail: "pradeeptradingcomp@gmail.com",
  },
  leadership: [
    {
      name: "Mr Pradeep Kumar Gupta",
      role: "Managing Director",
      phone: "+919754405401",
      formattedPhone: "+91 97544 05401",
      whatsapp: "919754405401",
      email: "pradeep@pradeeptrading.in",
    },
    {
      name: "Mr Samman Gupta",
      role: "Business Head",
      phone: "+919589790997",
      formattedPhone: "+91 95897 90997",
      whatsapp: "919589790997",
      email: "samman@pradeeptrading.in",
    },
  ],
  positioningPillars: [
    {
      number: "01",
      title: "Quality Standard",
      summary: "Double-Sortex electronic cleaning as our default",
      detail:
        "Every batch is sorted using multi-spectral optical CCD sorters, guaranteeing minimal broken kernels (<0.5%), high purity (>99.5%), and uniform caliber.",
    },
    {
      number: "02",
      title: "Direct Farm Sourcing",
      summary: "Direct origin procurement in premier growing belts",
      detail:
        "Deep regional roots in Madhya Pradesh & Gujarat allow us to secure prime harvest yields directly from farming networks at peak physiological maturity.",
    },
    {
      number: "03",
      title: "Calibrated Sizing",
      summary: "Exact count-per-ounce tolerances",
      detail:
        "From 38/42 bold kernels to uniform 50/60 java varieties, our strict screening maintains exact count-per-ounce specifications batch after batch.",
    },
    {
      number: "04",
      title: "Export Packaging",
      summary: "Breathable jute sacks, vacuum cartons, and bulk totes",
      detail:
        "Packed with food-grade protective barriers and desiccants designed specifically to endure maritime humidity and long-distance tropical ocean voyages.",
    },
    {
      number: "05",
      title: "Transparent Quality Logs",
      summary: "Real-time lot photos, lab analysis, and dispatch updates",
      detail:
        "We share pre-stuffing photo records, moisture logs, aflatoxin HPLC test certificates, and certified weigh slips before container seal locking.",
    },
    {
      number: "06",
      title: "Global Supply Reliability",
      summary: "Sustainable trade commitments across seasons",
      detail:
        "We cultivate enduring contracts with international snack brands, peanut butter processors, and food importers with guaranteed year-round delivery.",
    },
  ],
  sustainabilityPillars: [
    {
      step: "SOIL",
      title: "Fertile Mineral Bed",
      description:
        "Groundnuts thrive in well-drained, sandy loam soils that encourage deep root aeration and uniform pod growth without waterlogging.",
    },
    {
      step: "ROOTS",
      title: "Natural Nitrogen Fixation",
      description:
        "As a legume, the groundnut plant naturally fixes atmospheric nitrogen through beneficial root nodules, enriching the soil for subsequent crop rotations.",
    },
    {
      step: "PLANT",
      title: "Resilient Solar Canopy",
      description:
        "The resilient crop foliage forms an effective green ground cover, reducing topsoil erosion and moisture evaporation in dryland farming conditions.",
    },
    {
      step: "GROUNDNUT",
      title: "Subterranean Pod Pegging",
      description:
        "Flowers naturally pollinate above ground and peg downward beneath the soil to develop nutrient-dense seeds enclosed in protective fibrous pods.",
    },
    {
      step: "HARVEST",
      title: "Clean Low-Waste Yield",
      description:
        "Every part of the harvest is utilized: kernels for food and oil, shells for biomass briquettes, and leafy vines as rich organic fodder for livestock.",
    },
  ],
};
