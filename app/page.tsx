import Link from "next/link";
import {
  Ruler,
  Gauge,
  Flame,
  Droplets,
  Sun,
  Zap,
  Magnet,
  Radiation,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    name: "Common Converters",
    description: "Length, Area, Volume, Weight, Speed, Time, Temperature",
    href: "/converters/common/length",
    icon: Ruler,
    color: "blue",
    bgColor: "bg-blue-50 dark:bg-blue-950",
    iconColor: "text-blue-600 dark:text-blue-400",
    borderHover: "hover:border-blue-300 dark:hover:border-blue-700",
  },
  {
    name: "Engineering",
    description: "Pressure, Energy, Power, Force, Torque, Density",
    href: "/converters/engineering/pressure",
    icon: Gauge,
    color: "green",
    bgColor: "bg-green-50 dark:bg-green-950",
    iconColor: "text-green-600 dark:text-green-400",
    borderHover: "hover:border-green-300 dark:hover:border-green-700",
  },
  {
    name: "Heat & Thermal",
    description: "Thermal Conductivity, Heat Transfer, Fuel Efficiency",
    href: "/converters/heat/thermal-conductivity",
    icon: Flame,
    color: "orange",
    bgColor: "bg-orange-50 dark:bg-orange-950",
    iconColor: "text-orange-600 dark:text-orange-400",
    borderHover: "hover:border-orange-300 dark:hover:border-orange-700",
  },
  {
    name: "Fluids",
    description: "Flow Rate, Viscosity",
    href: "/converters/fluids/flow-rate",
    icon: Droplets,
    color: "cyan",
    bgColor: "bg-cyan-50 dark:bg-cyan-950",
    iconColor: "text-cyan-600 dark:text-cyan-400",
    borderHover: "hover:border-cyan-300 dark:hover:border-cyan-700",
  },
  {
    name: "Light & Optics",
    description: "Luminance, Illuminance",
    href: "/converters/light/luminance",
    icon: Sun,
    color: "yellow",
    bgColor: "bg-yellow-50 dark:bg-yellow-950",
    iconColor: "text-yellow-600 dark:text-yellow-400",
    borderHover: "hover:border-yellow-300 dark:hover:border-yellow-700",
  },
  {
    name: "Electricity",
    description: "Voltage, Current, Resistance, Capacitance, Inductance",
    href: "/converters/electricity/voltage",
    icon: Zap,
    color: "purple",
    bgColor: "bg-purple-50 dark:bg-purple-950",
    iconColor: "text-purple-600 dark:text-purple-400",
    borderHover: "hover:border-purple-300 dark:hover:border-purple-700",
  },
  {
    name: "Magnetism",
    description: "Magnetic Flux, Magnetic Field Strength",
    href: "/converters/magnetism/magnetic-flux",
    icon: Magnet,
    color: "pink",
    bgColor: "bg-pink-50 dark:bg-pink-950",
    iconColor: "text-pink-600 dark:text-pink-400",
    borderHover: "hover:border-pink-300 dark:hover:border-pink-700",
  },
  {
    name: "Radiology",
    description: "Radiation Dose, Radioactivity",
    href: "/converters/radiology/radiation-dose",
    icon: Radiation,
    color: "red",
    bgColor: "bg-red-50 dark:bg-red-950",
    iconColor: "text-red-600 dark:text-red-400",
    borderHover: "hover:border-red-300 dark:hover:border-red-700",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/50 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            50+ Converters Available
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-gray-50 tracking-tight">
            Best Converter
            <span className="text-blue-600 dark:text-blue-400"> Pro</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
            Fast, accurate, and comprehensive unit conversion tool for
            professionals and everyday use. Convert between hundreds of units
            across 9 categories.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                href={category.href}
                className={`group p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl dark:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-800 ${category.borderHover} hover:-translate-y-1`}
              >
                {/* Icon */}
                <div
                  className={`inline-flex p-3 rounded-xl ${category.bgColor} mb-4 transition-transform group-hover:scale-110`}
                >
                  <Icon className={`h-6 w-6 ${category.iconColor}`} />
                </div>

                {/* Content */}
                <h2
                  className={`text-xl font-bold mb-2 ${category.iconColor} tracking-tight`}
                >
                  {category.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                  {category.description}
                </p>

                {/* Explore Link */}
                <div
                  className={`flex items-center gap-2 ${category.iconColor} font-semibold text-sm`}
                >
                  <span>Explore</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-wrap justify-center gap-8 md:gap-16 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800">
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900 dark:text-gray-50">
                50+
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Converters
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900 dark:text-gray-50">
                300+
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Units
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900 dark:text-gray-50">
                9
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Categories
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                100%
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Accurate
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-50 mb-8">
            Why Choose Best Converter Pro?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="inline-flex p-3 rounded-full bg-blue-100 dark:bg-blue-900/50 mb-4">
                <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-50 mb-2">
                Instant Results
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Real-time conversion as you type with no delays
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex p-3 rounded-full bg-green-100 dark:bg-green-900/50 mb-4">
                <Gauge className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-50 mb-2">
                Scientific Precision
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Verified conversion factors from official standards
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex p-3 rounded-full bg-purple-100 dark:bg-purple-900/50 mb-4">
                <Sun className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-50 mb-2">
                Dark Mode
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Easy on the eyes with automatic theme detection
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
