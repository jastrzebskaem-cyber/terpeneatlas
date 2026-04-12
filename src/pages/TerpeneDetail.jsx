import { useParams, Link } from "react-router-dom";
import { TERPENES } from "../lib/terpenesData";
import { STRAINS } from "../lib/strainsData";
import { ArrowLeft } from "lucide-react";
import StrainCard from "../components/StrainCard";

export default function TerpeneDetail() {
  const { id } = useParams();
  const terpene = TERPENES.find((t) => t.id === id);

  if (!terpene) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
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
      {/* Sticky header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <Link
            to="/terpeny"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Encyklopedia terpenów
          </Link>
        </div>
      </div>

      {/* Hero section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left column */}
            <div>
              <div className="mb-12">
                <div className="text-9xl lg:text-[120px] mb-8 leading-none">{terpene.emoji}</div>
                <h1 className="font-playfair text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-4">
                  {terpene.name}
                </h1>
                <p className="text-2xl text-muted-foreground font-light">{terpene.shortName}</p>
              </div>

              {/* Quick stats */}
              <div className="space-y-6 pt-12 border-t border-border">
                <div>
                  <p className="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-3">
                    Punkt wrzenia
                  </p>
                  <p className="text-4xl font-bold text-foreground">{terpene.boilingPoint}°C</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-3">
                    Profil zapachu
                  </p>
                  <p className="text-lg leading-relaxed text-foreground italic">
                    "{terpene.scent}"
                  </p>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-12">
              {/* Description */}
              <div>
                <h2 className="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-6">
                  Czym jest ten terpen?
                </h2>
                <p className="text-xl leading-relaxed text-foreground font-light">
                  {terpene.description}
                </p>
              </div>

              {/* Natural occurrence */}
              <div>
                <h2 className="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-6">
                  Naturalne źródła
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {terpene.naturalOccurrence.map((source) => (
                    <span
                      key={source}
                      className="px-4 py-2.5 bg-accent/60 hover:bg-accent transition-colors text-accent-foreground text-sm font-medium rounded-full"
                    >
                      {source}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Effects section */}
      <section className="py-20 lg:py-32 border-t border-border bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-foreground mb-16">
            Właściwości i efekty
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {terpene.effects.map((effect, idx) => (
              <div
                key={idx}
                className="p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex gap-4">
                  <div className="text-3xl font-bold text-primary flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-primary/10">
                    {idx + 1}
                  </div>
                  <p className="text-lg leading-relaxed text-foreground">{effect}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strains section */}
      {strainsByTerpene.length > 0 && (
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mb-16">
              <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Odmiany z {terpene.shortName}
              </h2>
              <p className="text-lg text-muted-foreground">
                Dostępne odmiany bogatsze w ten terpen ({strainsByTerpene.length} odnalezionych)
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {strainsByTerpene.slice(0, 6).map((strain) => (
                <StrainCard key={strain.id} strain={strain} />
              ))}
            </div>

            {strainsByTerpene.length > 6 && (
              <div className="text-center mt-16">
                <p className="text-muted-foreground text-lg mb-6">
                  Wyświetlono 6 z {strainsByTerpene.length} dostępnych odmian
                </p>
                <Link
                  to="/odmiana"
                  className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Przeglądaj wszystkie odmiany
                </Link>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}