export default function ConverterLoading() {
  return (
    <div className="max-w-2xl mx-auto">
      {/* Converter Skeleton */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg dark:shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
        {/* From Section Skeleton */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          {/* Unit selector skeleton */}
          <div className="h-8 w-40 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse mb-4" />
          {/* Value input skeleton */}
          <div className="flex items-center justify-between">
            <div className="h-14 w-32 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
            <div className="h-8 w-12 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          </div>
        </div>

        {/* Swap Button Skeleton */}
        <div className="flex justify-center -my-5 z-10 relative">
          <div className="h-12 w-12 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse border-2 border-gray-200 dark:border-gray-700" />
        </div>

        {/* To Section Skeleton */}
        <div className="p-6 border-t border-gray-200 dark:border-gray-800">
          {/* Unit selector skeleton */}
          <div className="h-8 w-40 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse mb-4" />
          {/* Value input skeleton */}
          <div className="flex items-center justify-between">
            <div className="h-14 w-32 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
            <div className="h-8 w-12 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          </div>
        </div>
      </div>

      {/* Formula display skeleton */}
      <div className="mt-6 flex justify-center">
        <div className="h-5 w-64 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
      </div>

      {/* Popular conversions skeleton */}
      <div className="mt-6">
        <div className="h-4 w-32 bg-gray-200 dark:bg-gray-800 rounded animate-pulse mx-auto mb-3" />
        <div className="flex flex-wrap justify-center gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-8 w-20 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
