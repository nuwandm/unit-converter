# Best Converter Pro

A comprehensive, SEO-optimized Best Converter web application built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui. Features 38+ professional converters across 9 categories, optimized for Google AdSense monetization.

## Features

- **38+ Converters** across 9 categories
- **SEO-Optimized** with dynamic metadata, structured data (JSON-LD), and OpenGraph tags
- **Static Generation** for optimal performance and SEO
- **Real-time Conversion** with instant results as you type
- **Responsive Design** for mobile, tablet, and desktop
- **Google AdSense Ready** with placeholder components
- **Accessible** with ARIA labels and keyboard navigation
- **Type-Safe** with full TypeScript coverage

## Categories

### 1. Common Converters (7)

- Length
- Area
- Volume
- Weight/Mass
- Speed
- Time
- Temperature

### 2. Engineering Converters (6)

- Pressure
- Energy
- Power
- Force
- Torque
- Density

### 3. Heat Converters (10)

- Fuel Efficiency (Mass)
- Fuel Efficiency (Volume)
- Temperature Interval
- Thermal Expansion
- Thermal Resistance
- Thermal Conductivity
- Specific Heat Capacity
- Heat Density
- Heat Flux Density
- Heat Transfer Coefficient

### 4. Fluids Converters (2)

- Flow Rate
- Viscosity

### 5. Light Converters (2)

- Luminance
- Illuminance

### 6. Electricity Converters (5)

- Voltage
- Current
- Resistance
- Capacitance
- Inductance

### 7. Magnetism Converters (2)

- Magnetic Flux
- Magnetic Field Strength

### 8. Radiology Converters (2)

- Radiation Dose
- Radioactivity

### 9. Unit Systems (3)

- SI Units Reference
- Imperial Units Reference
- CGS Units Reference

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel (or any Node.js host)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd unit-converter
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
unit-converter/
├── app/                                    # Next.js app directory
│   ├── layout.tsx                          # Root layout
│   ├── page.tsx                            # Homepage
│   ├── converters/
│   │   ├── layout.tsx                      # Converter layout with sidebar
│   │   └── [category]/[converter]/
│   │       └── page.tsx                    # Dynamic converter pages
│   ├── not-found.tsx                       # 404 page
│   ├── sitemap.ts                          # Sitemap generation
│   └── robots.ts                           # Robots.txt
├── components/
│   ├── ui/                                 # shadcn/ui components
│   ├── converter/
│   │   ├── ConverterInterface.tsx          # Main converter UI
│   │   ├── UnitSelector.tsx                # Unit dropdown
│   │   └── ValueInput.tsx                  # Number input
│   ├── layout/
│   │   ├── Sidebar.tsx                     # Desktop navigation
│   │   ├── MobileSidebar.tsx               # Mobile menu
│   │   └── Header.tsx                      # Header with mobile menu
│   ├── ads/
│   │   └── AdSenseUnit.tsx                 # AdSense placeholder
│   └── seo/
│       ├── StructuredData.tsx              # JSON-LD component
│       └── Breadcrumbs.tsx                 # Breadcrumb navigation
├── lib/
│   ├── conversion/
│   │   ├── engine.ts                       # Core conversion logic
│   │   └── custom-formulas.ts              # Custom conversion functions
│   └── data/
│       ├── categories.ts                   # Category definitions
│       ├── converters/                     # Converter data by category
│       └── index.ts                        # Data aggregation
├── types/
│   ├── converter.ts                        # Converter types
│   ├── unit.ts                             # Unit types
│   └── category.ts                         # Category types
└── public/                                 # Static assets
```

## SEO Configuration

### Update Domain

Replace `https://yourdomain.com` with your actual domain in:

1. `app/converters/[category]/[converter]/page.tsx` (metadata generation)
2. `app/sitemap.ts`
3. `app/robots.ts`
4. `components/seo/StructuredData.tsx`
5. `components/seo/Breadcrumbs.tsx`

### Add metadataBase

In `app/layout.tsx`, add:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  // ... other metadata
};
```

## Google AdSense Integration

1. Sign up for Google AdSense
2. Get your publisher ID
3. Update `components/ads/AdSenseUnit.tsx`:

Replace the placeholder comments with actual AdSense code:

```tsx
<ins
  className="adsbygoogle"
  style={{ display: "block" }}
  data-ad-client="ca-pub-XXXXXXXX" // Your AdSense ID
  data-ad-slot={slot}
  data-ad-format={format}
  data-full-width-responsive="true"
></ins>
```

4. Add the AdSense script to `app/layout.tsx`:

```tsx
<Script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXX"
  crossOrigin="anonymous"
  strategy="afterInteractive"
/>
```

## Adding New Converters

1. **Add converter data** to the appropriate file in `lib/data/converters/`:

```typescript
{
  id: "your-converter",
  name: "Your Converter",
  slug: "your-converter",
  description: "Convert between units",
  category: "category-name",
  baseUnit: "base-unit-id",
  units: [
    { id: "unit-1", name: "Unit 1", symbol: "U1", type: "si" },
    // ... more units
  ],
  formula: {
    type: "linear",
    factors: {
      "unit-1": 1,
      // ... more factors
    },
  },
  keywords: ["keyword1", "keyword2"],
}
```

2. **Update category** in `lib/data/categories.ts` to include the new converter ID.

3. **Rebuild** the application:

```bash
npm run build
```

## Performance Optimization

The application is optimized for Core Web Vitals:

- **Static Generation**: All converter pages are pre-rendered at build time
- **Code Splitting**: Automatic code splitting with Next.js
- **Image Optimization**: Use Next.js Image component for images
- **Font Optimization**: System fonts with Tailwind CSS
- **Minimal JavaScript**: Server components where possible

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Configure environment variables (if any)
4. Deploy

### Other Platforms

The application can be deployed to any platform that supports Node.js:

- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway
- Render

## Analytics

To add Google Analytics:

1. Install next-google-analytics:

```bash
npm install nextjs-google-analytics
```

2. Add to `app/layout.tsx`:

```tsx
import { GoogleAnalytics } from "nextjs-google-analytics";

// In the body:
<GoogleAnalytics trackPageViews />;
```

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

For issues or questions, please open an issue on GitHub.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
