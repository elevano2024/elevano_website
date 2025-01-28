export function LoadingState() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="space-y-8 w-full max-w-md">
        {/* Hero skeleton */}
        <div className="h-8 bg-gray-200 rounded-lg w-3/4 animate-pulse" />
        <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
        <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse" />

        {/* Content skeleton */}
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-24 bg-gray-200 rounded-lg animate-pulse"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
