import { Converter } from "@/types/converter";

export const radiologyConverters: Converter[] = [
  // RADIATION DOSE CONVERTER
  {
    id: "radiation-dose",
    name: "Radiation Dose Converter",
    slug: "radiation-dose",
    description: "Convert radiation dose units: gray, rad, sievert, rem, and more",
    category: "radiology",
    baseUnit: "gray",
    units: [
      { id: "gray", name: "Gray", symbol: "Gy", type: "si" },
      { id: "milligray", name: "Milligray", symbol: "mGy", type: "si" },
      { id: "rad", name: "Rad", symbol: "rad", type: "other" },
      { id: "sievert", name: "Sievert", symbol: "Sv", type: "si" },
      { id: "millisievert", name: "Millisievert", symbol: "mSv", type: "si" },
      { id: "rem", name: "Rem", symbol: "rem", type: "other" },
    ],
    formula: {
      type: "linear",
      factors: {
        "gray": 1,
        "milligray": 0.001,
        "rad": 0.01,
        "sievert": 1, // For photons, 1 Gy = 1 Sv
        "millisievert": 0.001,
        "rem": 0.01,
      },
    },
    keywords: ["radiation dose", "gray", "sievert", "rad", "rem", "conversion"],
    metaTitle: "Radiation Dose Converter | Gy, Sv, rad, rem | Free Tool",
    metaDescription: "Convert radiation dose units instantly. Gray, sievert, rad, rem, and more.",
  },

  // RADIOACTIVITY CONVERTER
  {
    id: "radioactivity",
    name: "Radioactivity Converter",
    slug: "radioactivity",
    description: "Convert radioactivity units: becquerel, curie, and more",
    category: "radiology",
    baseUnit: "becquerel",
    units: [
      { id: "becquerel", name: "Becquerel", symbol: "Bq", type: "si" },
      { id: "kilobecquerel", name: "Kilobecquerel", symbol: "kBq", type: "si" },
      { id: "megabecquerel", name: "Megabecquerel", symbol: "MBq", type: "si" },
      { id: "gigabecquerel", name: "Gigabecquerel", symbol: "GBq", type: "si" },
      { id: "curie", name: "Curie", symbol: "Ci", type: "other" },
      { id: "millicurie", name: "Millicurie", symbol: "mCi", type: "other" },
      { id: "microcurie", name: "Microcurie", symbol: "μCi", type: "other" },
      { id: "rutherford", name: "Rutherford", symbol: "Rd", type: "other" },
    ],
    formula: {
      type: "linear",
      factors: {
        "becquerel": 1,
        "kilobecquerel": 1000,
        "megabecquerel": 1000000,
        "gigabecquerel": 1000000000,
        "curie": 37000000000,
        "millicurie": 37000000,
        "microcurie": 37000,
        "rutherford": 1000000,
      },
    },
    keywords: ["radioactivity", "becquerel", "curie", "radiation", "conversion"],
    metaTitle: "Radioactivity Converter | Bq, Ci, Rd | Free Tool",
    metaDescription: "Convert radioactivity units instantly. Becquerel, curie, rutherford, and more.",
  },
];
