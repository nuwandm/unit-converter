export interface Category {
  id: string;                    // e.g., "heat", "engineering"
  name: string;                  // e.g., "Heat Converters"
  slug: string;                  // e.g., "heat"
  description: string;           // Category description
  icon?: string;                 // Icon identifier (optional)
  converters: string[];          // Array of converter IDs
  order: number;                 // Display order in navigation
}
