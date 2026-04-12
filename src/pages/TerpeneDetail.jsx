import { useParams, Link, useNavigate } from "react-router-dom";
import { getTerpeneById, TERPENES } from "../lib/terpenesData";
import { STRAINS } from "../lib/strainsData";
import StrainCard from "../components/StrainCard";
import { ArrowLeft, Thermometer, TreePine, Zap, Leaf, FlaskConical } from "lucide-react";

export default function TerpeneDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const terpene = getTerpeneById(id);

  if (!terpene) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
        <FlaskConical className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
        <h2 className="font-playfair text-xl font-semibold mb-2">Terpen nie znaleziony</h2>
        <Link to="/terpeny" className="text-primary hover:underline text-sm">
          Wróć do encyklopedii terpenów
        </Link>
      </div>
    );
  }

  // Find strains that contain this terpene, sorted by amount
  const strainsWithTerpene = STRAINS
    .filter((s) => s.terpenes[terpene.id] && s.terpenes[terpene.id] > 0)
    .sort((a, b) => (b.terpenes[terpene.id] || 0) - (a.terpenes[terpene.id] || 0));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Back button */}
      <button
        onClick={() => navigate('/terpeny')}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Powrót
      </button>

      {/* Terpene header */}
      <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 mb-8">
        <div className="flex items-start gap-4 mb-6">
          <span className="text-5xl">{terpene.emoji}</span>
          <div>
            <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground">
              {terpene.name}
            </h1>
          </div>
        </div>

        {/* Key info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-accent/50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Thermometer className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-muted-foreground">Temperatura parowania</span>
            </div>
            <span className="text-2xl font-bold text-foreground">{terpene.boilingPoint}°C</span>
          </div>
          <div className="bg-accent/50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Leaf className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-muted-foreground">Zapach</span>
            </div>
            <span className="text-sm font-medium text-foreground">{terpene.scent}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {terpene.description}
        </p>
      </div>

      {/* Natural occurrence */}
      <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 mb-8">
        <div className="flex items-center gap-2 mb-5">
          <TreePine className="w-5 h-5 text-primary" />
          <h2 className="font-playfair text-xl font-semibold text-foreground">Gdzie występuje w przyrodzie</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {terpene.naturalOccurrence.map((item) => (
            <span key={item} className="inline-flex items-center px-4 py-2 rounded-xl bg-accent text-sm font-medium text-accent-foreground">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Effects */}
      <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 mb-8">
        <div className="flex items-center gap-2 mb-5">
          <Zap className="w-5 h-5 text-primary" />
          <h2 className="font-playfair text-xl font-semibold text-foreground">Działanie</h2>
        </div>
        <ul className="space-y-3">
          {terpene.effects.map((effect, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-semibold text-primary">{i + 1}</span>
              </span>
              <span className="text-sm text-foreground">{effect}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Strains with this terpene */}
      {strainsWithTerpene.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-6">
            <FlaskConical className="w-5 h-5 text-primary" />
            <h2 className="font-playfair text-xl font-semibold text-foreground">
              Odmiany z tym terpenem
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {strainsWithTerpene.map((s) => (
              <StrainCard key={s.id} strain={s} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}