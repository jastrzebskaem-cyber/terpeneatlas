import { Link } from "react-router-dom";
import { TERPENES } from "../lib/terpenesData";
import { FlaskConical, Thermometer, ArrowRight } from "lucide-react";

export default function TerpenesEncyclopedia() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Hero */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-sm text-accent-foreground mb-4">
          <FlaskConical className="w-4 h-4" />
          Encyklopedia
        </div>
        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3">
          Terpeny w konopiach
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
          Za wyjątkowym aromatem i właściwościami konopi stoją terpeny — naturalne związki obecne w świecie roślin od milionów lat. Poznaj je bliżej.
        </p>
      </div>

      {/* Terpene grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {TERPENES.map((terpene) => (
          <TerpeneCard key={terpene.id} terpene={terpene} />
        ))}
      </div>
    </div>
  );
}

function TerpeneCard({ terpene }) {
  return (
    <Link
      to={`/terpeny/${terpene.id}`}
      className="group block bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 p-5"
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-3xl">{terpene.emoji}</span>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Thermometer className="w-3 h-3" />
          {terpene.boilingPoint}°C
        </div>
      </div>

      <h3 className="font-playfair font-semibold text-lg text-foreground group-hover:text-primary transition-colors mb-1">
        {terpene.shortName}
      </h3>

      <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
        {terpene.scent}
      </p>

      <div className="flex flex-wrap gap-1 mb-4">
        {terpene.naturalOccurrence.slice(0, 3).map((item) => (
          <span key={item} className="px-2 py-0.5 rounded-full bg-accent text-[10px] font-medium text-accent-foreground">
            {item}
          </span>
        ))}
        {terpene.naturalOccurrence.length > 3 && (
          <span className="px-2 py-0.5 rounded-full bg-accent text-[10px] font-medium text-muted-foreground">
            +{terpene.naturalOccurrence.length - 3}
          </span>
        )}
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-border">
        <span className="text-xs text-muted-foreground line-clamp-1">
          <span className="font-medium">Działanie:</span> {terpene.effects[0]}
        </span>
        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0" />
      </div>
    </Link>
  );
}