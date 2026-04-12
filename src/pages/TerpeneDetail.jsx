import { useParams, Link } from "react-router-dom";
import { getTerpeneByShortName, TERPENES } from "../lib/terpenesData";
import { STRAINS } from "../lib/strainsData";
import { ArrowLeft, Leaf } from "lucide-react";
import StrainCard from "../components/StrainCard";

export default function TerpeneDetail() {
  const { id } = useParams();
  const terpene = TERPENES.find((t) => t.id === id);

  if (!terpene) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
        <Leaf className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
        <h2 className="font-playfair text-xl font-semibold mb-2">Terpen nie znaleziony</h2>
        <Link to="/terpeny" className="text-primary hover:underline text-sm">
          Wróć do encyklopedii
        </Link>
      </div>
    );
  }

  const strainsByTerpene = STRAINS
    .filter(s => s.terpenes[terpene.shortName.toLowerCase()] > 0)
    .sort((a, b) => (b.terpenes[terpene.shortName.toLowerCase()] || 0) - (a.terpenes[terpene.shortName.toLowerCase()] || 0));

  return (
    <div className="min-h-screen bg-background">
      {/* Back button */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <Link
            to="/terpeny"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Encyklopedia terpenów
          </Link>
        </div>
      </div>

      {/* Hero section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Emoji and basic info */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <div className="text-8xl mb-6">{terpene.emoji}</div>
              <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-foreground mb-3">
                {terpene.name}
              </h1>
              <p className="text-lg text-muted-foreground mt-0.5 truncate">{terpene.shortName}</p>
            </div>

            {/* Key properties */}
            <div className="space-y-4">
              <div className="border-t border-border pt-4">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  Punkt wrzenia
                </p>
                <p className="text-2xl font-semibold text-foreground">
                  {terpene.boilingPoint}°C
                </p>
              </div>
              <div className="border-t border-border pt-4">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  Zapach
                </p>
                <p className="text-base text-foreground leading-relaxed">
                  {terpene.scent}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Description and effects */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-semibold">
                O terpenie
              </h2>
              <p className="text-lg leading-relaxed text-foreground">
                {terpene.description}
              </p>
            </div>

            <div>
              <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-semibold">
                Właściwości i efekty
              </h2>
              <ul className="space-y-3">
                {terpene.effects.map((effect, idx) => (
                  <li key={idx} className="flex gap-3 text-foreground">
                    <span className="text-primary mt-1 flex-shrink-0 font-semibold">•</span>
                    <span>{effect}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-semibold">
                Naturalne źródła
              </h2>
              <div className="flex flex-wrap gap-2">
                {terpene.naturalOccurrence.map((source) => (
                  <span
                    key={source}
                    className="px-3 py-1.5 bg-accent text-accent-foreground text-xs font-medium rounded-full"
                  >
                    {source}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Strains section */}
      {strainsByTerpene.length > 0 && (
        <div className="border-t border-border py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mb-12">
              Odmiany z tym terpenem
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {strainsByTerpene.slice(0, 6).map((strain) => (
                <StrainCard key={strain.id} strain={strain} />
              ))}
            </div>

            {strainsByTerpene.length > 6 && (
              <div className="text-center mt-12">
                <p className="text-muted-foreground mb-4">
                  Razem dostępnych odmian z tym terpenem: {strainsByTerpene.length}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}