import { Link } from "react-router-dom";
import { Leaf, ArrowRight, GitCompare, Heart } from "lucide-react";
import AvailabilityBadge from "./AvailabilityBadge";
import TerpeneBar from "./TerpeneBar";

export default function StrainCard({ strain, similarity, isComparing, onToggleCompare, canAddMore, isFavorite, onToggleFavorite }) {
  const topTerpenes = Object.entries(strain.terpenes)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3);

  return (
    <Link
      to={`/odmiana/${strain.id}`}
      className="group block bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
    >
      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1 min-w-0">
            <h3 className="font-playfair font-semibold text-lg text-foreground group-hover:text-primary transition-colors truncate">
              {strain.name}
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5 truncate">{strain.producer}</p>
          </div>
          <AvailabilityBadge availability={strain.availability} />
        </div>

        {/* Genetics & THC */}
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent text-xs font-medium text-accent-foreground">
            <Leaf className="w-3 h-3" />
            {strain.genetics}
          </span>
          <span className="text-sm font-medium text-foreground">
            THC {strain.thc}%
          </span>
          {strain.cbd > 1 && (
            <span className="text-sm text-muted-foreground">
              CBD {strain.cbd}%
            </span>
          )}
        </div>

        {/* Terpene bars */}
        <div className="space-y-2 mb-4">
          {topTerpenes.map(([name, value]) => (
            <TerpeneBar key={name} name={name} value={value} maxValue={10} />
          ))}
        </div>

        {/* Similarity score if provided */}
        {similarity !== undefined && (
          <div className="flex items-center justify-between pt-3 border-t border-border">
            <span className="text-xs text-muted-foreground">Podobieństwo terpenowe</span>
            <span className="text-sm font-semibold text-primary">
              {Math.round(similarity * 100)}%
            </span>
          </div>
        )}

        <div className="flex items-center justify-between pt-3 mt-2">
          <div className="flex items-center gap-2">
            {onToggleCompare && (
              <button
                onClick={(e) => { e.preventDefault(); onToggleCompare(); }}
                className={`flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg border transition-all ${
                  isComparing
                    ? "bg-primary text-primary-foreground border-primary"
                    : canAddMore
                    ? "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                    : "border-border text-muted-foreground/40 cursor-not-allowed"
                }`}
                disabled={!isComparing && !canAddMore}
              >
                <GitCompare className="w-3 h-3" />
                {isComparing ? "Wybrano" : "Porównaj"}
              </button>
            )}
            {onToggleFavorite && (
              <button
                onClick={(e) => { e.preventDefault(); onToggleFavorite(); }}
                className={`p-1.5 rounded-lg border transition-all ${
                  isFavorite
                    ? "bg-rose-50 border-rose-200 text-rose-500"
                    : "border-border text-muted-foreground hover:border-rose-200 hover:text-rose-400"
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${isFavorite ? "fill-rose-500" : ""}`} />
              </button>
            )}
          </div>
          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
        </div>
      </div>
    </Link>
  );
}