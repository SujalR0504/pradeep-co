export interface StatItem {
  id: string;
  value: string;
  label: string;
  description: string;
  isPlaceholder?: boolean;
}

export const STATS: StatItem[] = [
  {
    id: "products",
    value: "10+",
    label: "Export Varieties & Grades",
    description: "Bold, Java, In-Shell, Blanched & Value-Added Groundnut Formats",
    isPlaceholder: false
  },
  {
    id: "purity",
    value: "99.9%",
    label: "Double-Sortex Purity",
    description: "Standard high-resolution optical electronic cleaning benchmark",
    isPlaceholder: false
  },
  {
    id: "capacity",
    value: "XX+",
    label: "Annual Processing Metric Tons",
    description: "Export processing capacity across peak harvest cycles",
    isPlaceholder: true
  },
  {
    id: "markets",
    value: "XX+",
    label: "Global Trade Destinations",
    description: "Emerging and established international export markets served",
    isPlaceholder: true
  }
];
