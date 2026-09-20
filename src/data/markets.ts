export interface ExportMarket {
  country: string;
  region: string;
  active: boolean;
  port?: string;
  notes?: string;
}

export interface TradeCorridor {
  name: string;
  hub: string;
  regions: string[];
  description: string;
  coordinates: { x: number; y: number }; // Relative coordinates for SVG map positioning
}

export const MARKETS: ExportMarket[] = [
  {
    country: "Vietnam",
    region: "Southeast Asia",
    active: true,
    port: "Haiphong / Ho Chi Minh",
    notes: "Primary destination corridor for raw peanut kernels and snack processing"
  },
  {
    country: "Indonesia",
    region: "Southeast Asia",
    active: true,
    port: "Jakarta / Surabaya",
    notes: "High demand for confectionery and traditional peanut culinary grades"
  },
  {
    country: "United Arab Emirates",
    region: "Middle East & GCC",
    active: true,
    port: "Jebel Ali, Dubai",
    notes: "Regional re-export hub and retail roasted snack packaging"
  },
  {
    country: "Saudi Arabia",
    region: "Middle East & GCC",
    active: true,
    port: "Jeddah / Dammam",
    notes: "Regular shipments of bold and in-shell groundnuts"
  },
  {
    country: "Malaysia",
    region: "Southeast Asia",
    active: true,
    port: "Port Klang",
    notes: "Snack manufacturing and confectionery grade kernels"
  },
  {
    country: "Philippines",
    region: "Southeast Asia",
    active: true,
    port: "Manila",
    notes: "Fried nut and snack processor distribution"
  },
  {
    country: "Netherlands",
    region: "Europe",
    active: false,
    port: "Rotterdam",
    notes: "European gateway corridor (Aflatoxin < 4 ppb certified lots)"
  },
  {
    country: "United Kingdom",
    region: "Europe",
    active: false,
    port: "Felixstowe / London Gateway",
    notes: "Bakery and specialty nut butter market destination"
  },
  {
    country: "South Africa",
    region: "Africa",
    active: false,
    port: "Durban",
    notes: "Oil processing and wholesale pod trade"
  },
  {
    country: "China",
    region: "Far East",
    active: false,
    port: "Qingdao / Shanghai",
    notes: "High-volume peanut oil pressing and bulk kernel trade"
  }
];

export const TRADE_CORRIDORS: TradeCorridor[] = [
  {
    name: "Southeast Asian Trade Belt",
    hub: "Singapore / ASEAN Ports",
    regions: ["Vietnam", "Indonesia", "Malaysia", "Philippines"],
    description: "Fast-transit maritime corridor connecting western Indian ports to key food processors across ASEAN markets.",
    coordinates: { x: 74, y: 55 }
  },
  {
    name: "Arabian Gulf & Middle East Hub",
    hub: "Jebel Ali / Dammam",
    regions: ["UAE", "Saudi Arabia", "Oman", "Qatar"],
    description: "Direct liner connectivity via Mundra & Nhava Sheva to the Persian Gulf with typical 4-7 days maritime transit.",
    coordinates: { x: 57, y: 44 }
  },
  {
    name: "European Gateway Corridor",
    hub: "Rotterdam / Antwerp",
    regions: ["Netherlands", "UK", "Germany"],
    description: "High-compliance corridor operating with strict EU pesticide MRL and Aflatoxin laboratory certifications.",
    coordinates: { x: 48, y: 28 }
  },
  {
    name: "East African Maritime Link",
    hub: "Mombasa / Durban",
    regions: ["Kenya", "Tanzania", "South Africa"],
    description: "Indian Ocean direct trade channel supporting seasonal supply fulfillment and bulk wholesale distribution.",
    coordinates: { x: 56, y: 68 }
  }
];
