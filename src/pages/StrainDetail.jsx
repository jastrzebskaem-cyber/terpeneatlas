import { useParams, Link, useNavigate } from "react-router-dom";
import { STRAINS, getSimilarStrains } from "../lib/strainsData";
import { getTerpeneByShortName } from "../lib/terpenesData";
import { getPharmacies } from "../lib/pharmaciesData";
import StrainCard from "../components/StrainCard";
import AvailabilityBadge from "../components/AvailabilityBadge";
import TerpeneBar from "../components/TerpeneBar";
import { ArrowLeft, Leaf, Beaker, Sparkles, MapPin, Phone, Store } from "lucide-react";

export default function StrainDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const strain = STRAINS.find((s) => s.id === id);
  const pharmacies = strain ? getPharmacies(strain.id) : [];

  if (!strain) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
        <Leaf className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
        <h2 className="font-playfair text-xl font-semibold mb-2">Odmiana nie znaleziona</h2>
        <Link to="/" className="text-primary hover:underline text-sm">
          Wróć do listy odmian
        </Link>
      </div>
    );
  }

  const similarStrains = getSimilarStrains(strain.id, 6);
  const sortedTerpenes = Object.entries(strain.terpenes).sort(([, a], [, b]) => b - a);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Powrót
      </button>

      {/* Strain header */}
      <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground mb-2">
              {strain.name}
            </h1>
            <p className="text-muted-foreground">{strain.producer}</p>
          </div>
          <AvailabilityBadge availability={strain.availability} />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <StatBox label="THC" value={`${strain.thc}%`} />
          <StatBox label="CBD" value={`${strain.cbd}%`} />
          <StatBox label="Genetyka" value={strain.genetics} />
          <StatBox label="Opakowanie" value={strain.packaging} />
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          {strain.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
            <Sparkles className="w-3 h-3" />
            {strain.effect}
          </span>
          {strain.aromas.map((aroma) => (
            <span key={aroma} className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
              {aroma}
            </span>
          ))}
        </div>
      </div>

      {/* Terpene profile */}
      <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 mb-8">
        <div className="flex items-center gap-2 mb-6">
          <Beaker className="w-5 h-5 text-primary" />
          <h2 className="font-playfair text-xl font-semibold text-foreground">Profil terpenowy</h2>
        </div>

        <div className="space-y-3 mb-6">
          {sortedTerpenes.map(([name, value]) => (
            <TerpeneBar key={name} name={name} value={value} maxValue={10} />
          ))}
        </div>

        {/* Clickable terpene links */}
        <div className="pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground mb-3">Kliknij na terpen, aby dowiedzieć się więcej:</p>
          <div className="flex flex-wrap gap-2">
            {sortedTerpenes.map(([name]) => {
              const terpene = getTerpeneByShortName(name);
              if (!terpene) return null;
              return (
                <Link
                  key={name}
                  to={`/terpeny/${terpene.id}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground text-accent-foreground text-xs font-medium transition-all duration-200"
                >
                  <span>{terpene.emoji}</span>
                  {terpene.shortName}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Pharmacies section */}
      <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 mb-8">
        <div className="flex items-center gap-2 mb-6">
          <Store className="w-5 h-5 text-primary" />
          <h2 className="font-playfair text-xl font-semibold text-foreground">Dostępność w aptekach</h2>
        </div>

        {strain.availability === "Wycofana" ? (
          <div className="text-sm text-muted-foreground italic">
            Odmiana wycofana z obrotu — niedostępna w aptekach.
          </div>
        ) : pharmacies.length === 0 ? (
          <div className="text-sm text-muted-foreground">
            Brak aktualnych danych o dostępności w aptekach.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {pharmacies.map((pharmacy, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-accent/40 border border-border">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-sm text-foreground">{pharmacy.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{pharmacy.city} · {pharmacy.address}</p>
                  <a
                    href={`tel:${pharmacy.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-1"
                  >
                    <Phone className="w-3 h-3" />
                    {pharmacy.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        <p className="text-xs text-muted-foreground mt-4">
          * Dane o dostępności mają charakter orientacyjny. Przed wizytą skontaktuj się z apteką, aby potwierdzić aktualny stan magazynowy.
        </p>
      </div>

      {/* Similar strains */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <Leaf className="w-5 h-5 text-primary" />
          <h2 className="font-playfair text-xl font-semibold text-foreground">
            Odmiany o podobnym profilu terpenowym
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {similarStrains.map((s) => (
            <StrainCard key={s.id} strain={s} similarity={s.similarity} />
          ))}
        </div>
      </div>
    </div>
  );
}

function StatBox({ label, value }) {
  return (
    <div className="bg-accent/50 rounded-xl p-3.5">
      <span className="block text-xs text-muted-foreground mb-1">{label}</span>
      <span className="block text-lg font-semibold text-foreground">{value}</span>
    </div>
  );
}