interface AdSenseUnitProps {
  slot: string;
  format: "horizontal" | "rectangle" | "vertical";
}

export function AdSenseUnit({ slot, format }: AdSenseUnitProps) {
  // Responsive sizing based on format
  const sizeClasses = {
    horizontal: "h-[90px] md:h-[90px]", // 728x90 leaderboard on desktop, 320x50 on mobile
    rectangle: "h-[250px] md:h-[250px]", // 300x250 rectangle
    vertical: "h-[600px] w-[300px]", // 300x600 large skyscraper (sidebar only, desktop)
  };

  const containerClasses = format === 'vertical'
    ? "flex justify-center"
    : "my-6 flex justify-center";

  const maxWidth = format === 'vertical' ? 'max-w-[300px]' : 'max-w-[728px]';

  return (
    <div className={containerClasses}>
      <div
        className={`border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-4 flex items-center justify-center ${sizeClasses[format]} ${maxWidth} w-full bg-gray-100 dark:bg-gray-800`}
      >
        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-300 font-semibold">Advertisement</p>
          <p className="text-xs text-gray-400 dark:text-gray-400 mt-1">Google AdSense</p>
          <p className="text-xs text-gray-400 dark:text-gray-500">{format}</p>
          {/*
            In production, replace this placeholder with actual AdSense code:

            <ins className="adsbygoogle"
                 style={{ display: 'block' }}
                 data-ad-client="ca-pub-XXXXXXXX"
                 data-ad-slot={slot}
                 data-ad-format={format === 'rectangle' ? 'auto' : format}
                 data-full-width-responsive="true"></ins>
          */}
        </div>
      </div>
    </div>
  );
}
