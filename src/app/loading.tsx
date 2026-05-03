export default function Loading() {
  return (
    <div className="space-y-8 animate-pulse">
      {/* Header skeleton */}
      <div>
        <div className="h-8 w-48 bg-white/5 rounded-lg mb-2" />
        <div className="h-4 w-72 bg-white/5 rounded-lg" />
      </div>

      {/* Cards skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-36 rounded-2xl bg-white/5 border border-white/5" />
        ))}
      </div>

      {/* Grid skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 h-96 rounded-2xl bg-white/5 border border-white/5" />
        <div className="h-96 rounded-2xl bg-white/5 border border-white/5" />
      </div>
    </div>
  );
}
