export const ReelSkeleton = () => {
  return (
    <div className="h-screen w-full bg-black">
      {/* Simulate reel content */}
      <div className="h-full w-full flex items-center justify-center animate-pulse">
        {/* Video area skeleton */}
        <div className="absolute inset-0 bg-gray-900"></div>

        {/* Content overlay skeleton */}
        <div className="absolute bottom-20 left-4 right-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gray-800 rounded-full"></div>
            <div className="flex-1">
              <div className="h-4 bg-gray-800 rounded w-32 mb-1"></div>
              <div className="h-3 bg-gray-800 rounded w-24"></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-3 bg-gray-800 rounded w-48"></div>
            <div className="h-3 bg-gray-800 rounded w-36"></div>
          </div>
        </div>

        {/* Actions skeleton */}
        <div className="absolute bottom-20 right-4 flex flex-col items-center gap-6">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-gray-800 rounded-full mb-1"></div>
            <div className="w-4 h-3 bg-gray-800 rounded"></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-gray-800 rounded-full mb-1"></div>
            <div className="w-4 h-3 bg-gray-800 rounded"></div>
          </div>
          <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
