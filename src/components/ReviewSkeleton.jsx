export default function ReviewSkeleton() {
  return (
    <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 animate-pulse">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="h-6 w-48 bg-muted rounded-lg mb-2" />
          <div className="flex items-center gap-2 mt-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-4 h-4 bg-muted rounded" />
              ))}
            </div>
            <div className="h-3.5 w-24 bg-muted rounded" />
          </div>
        </div>
      </div>

      {/* Form placeholder */}
      <div className="mb-6 p-4 bg-accent/50 rounded-xl border border-border">
        <div className="h-4 w-28 bg-muted rounded" />
      </div>

      {/* Review items */}
      {[...Array(3)].map((_, i) => (
        <div key={i} className={`p-4 bg-accent/20 rounded-xl border border-border ${i < 2 ? "mb-3" : ""}`}>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, j) => (
                <div key={j} className="w-3.5 h-3.5 bg-muted rounded" />
              ))}
            </div>
            <div className="h-3 w-8 bg-muted rounded" />
          </div>
          {/* Vary line widths so it looks natural */}
          <div className={`h-3.5 bg-muted rounded mb-1.5 ${i === 0 ? "w-full" : i === 1 ? "w-4/5" : "w-3/5"}`} />
          {i === 0 && <div className="h-3.5 w-2/3 bg-muted rounded mb-1.5" />}
          <div className="h-3 w-20 bg-muted rounded mt-2" />
        </div>
      ))}
    </div>
  );
}
