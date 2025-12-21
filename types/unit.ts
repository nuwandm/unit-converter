export interface Unit {
  id: string;                    // e.g., "meter", "foot"
  name: string;                  // e.g., "Meter", "Foot"
  symbol: string;                // e.g., "m", "ft"
  type: 'si' | 'imperial' | 'cgs' | 'other';  // Unit system type
}
