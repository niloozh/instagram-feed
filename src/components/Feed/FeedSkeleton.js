export const FeedSkeleton = () => {
  return (
    <div className="max-w-md mx-auto pt-16">
      {[1, 2, 3].map((i) => (
        <div key={i} className="mb-8 animate-pulse">
          <div className="flex items-center px-4 py-3">
            <div className="w-10 h-10 bg-gray-800 rounded-full mr-3"></div>
            <div className="flex-1">
              <div className="h-4 bg-gray-800 rounded w-24 mb-1"></div>
              <div className="h-3 bg-gray-800 rounded w-16"></div>
            </div>
          </div>
          <div className="w-full aspect-square bg-gray-800"></div>
          <div className="px-4 pt-3">
            <div className="h-4 bg-gray-800 rounded w-32 mb-2"></div>
            <div className="h-3 bg-gray-800 rounded w-48"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
