import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { STRAINS, getSimilarStrains, getCbdDisplay } from "../lib/strainsData";
import { getTerpeneByShortName } from "../lib/terpenesData";
// FIX #3: Removed unused getPharmacies import
import StrainCard from "../components/StrainCard";
import AvailabilityBadge from "../components/AvailabilityBadge";
import TerpenePieChart from "../components/TerpenePieChart";
import { ArrowLeft, Leaf, Beaker, Heart, PieChart, Radar } from "lucide-react";
import CompareTable from "../components/CompareTable";
import { useFavorites } from "../hooks/useFavorites";
import TerpeneRadarChart from "../components/TerpeneRadarChart";
// FIX #2: ReviewSection was imported but never rendered — now used below
import ReviewSection from "../components/ReviewSection";
import { usePageTitle } from '../hooks/usePageTitle';

export default function StrainDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const strain = STRAINS.find((s) => s.id === id);
  const { toggleFavorite, isFavorite } = useFavorites();
  const [compareId, setCompareId] = useState(null);
  const [chartType, setChartType] = useState("pie");
  const compareStrain = compareId ? STRAINS.find((s) => s.id === compareId) : null;

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
      {/* Back button — FIX #12: consistent navigate(-1) pattern like other pages */}
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
          <div className="flex items-center gap-2">
            <AvailabilityBadge availability={strain.availability} />
            <button
              onClick={() => toggleFavorite(strain.id)}
              className={`p-2 rounded-xl border transition-all ${
                isFavorite(strain.id)
                  ? "bg-rose-50 border-rose-200 text-rose-500"
                  : "border-border text-muted-foreground hover:border-rose-200 hover:text-rose-400"
              }`}
            >
              <Heart className={`w-5 h-5 ${isFavorite(strain.id) ? "fill-rose-500" : ""}`} />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
          <StatBox label="THC" value={`${strain.thc}%`} />
          <StatBox label="CBD" value={getCbdDisplay(strain)} />
          <StatBox label="Genetyka" value={strain.genetics} />
          <StatBox label="Opakowanie" value={strain.packaging} />
          {strain.country && <StatBox label="Kraj pochodzenia" value={strain.country} icon="🌍" />}
        </div>

        {/* Lineage */}
        {strain.lineage && strain.lineage !== "nieznany rodowód" && (
          <div className="mb-4 flex items-center gap-2">
            <span className="text-xs text-muted-foreground font-medium">Krzyżówka:</span>
            <span className="text-sm font-medium text-foreground">{strain.lineage}</span>
          </div>
        )}

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">{strain.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {strain.aromas.map((aroma) => (
            <span key={aroma} className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
              {aroma}
            </span>
          ))}
        </div>
      </div>

      {/* Terpene profile */}
      <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Beaker className="w-5 h-5 text-primary" />
            <h2 className="font-playfair text-xl font-semibold text-foreground">Profil terpenowy</h2>
          </div>
          <div className="flex gap-1">
            <button
              onClick={() => setChartType("pie")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                chartType === "pie"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              <PieChart className="w-3.5 h-3.5" /> Kołowy
            </button>
            <button
              onClick={() => setChartType("radar")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                chartType === "radar"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              <Radar className="w-3.5 h-3.5" /> Radarowy
            </button>
          </div>
        </div>

        {/* Chart */}
        <div className="mb-6">
          {chartType === "pie" ? (
            <TerpenePieChart terpenes={strain.terpenes} />
          ) : (
            <TerpeneRadarChart strain={strain} />
          )}
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

      {/* FIX #2: ReviewSection now actually rendered */}
      <div className="mb-8">
        <ReviewSection strainId={strain.id} />
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
            <StrainCard
              key={s.id}
              strain={s}
              similarity={s.similarity}
              isComparing={compareId === s.id}
              onToggleCompare={() => setCompareId((prev) => (prev === s.id ? null : s.id))}
              canAddMore={!compareId || compareId === s.id}
            />
          ))}
        </div>
      </div>

      {compareStrain && (
        <CompareTable
          strains={[strain, compareStrain]}
          onRemove={(rid) => { if (rid === compareStrain.id) setCompareId(null); }}
          onClose={() => setCompareId(null)}
        />
      )}
    </div>
  );
}

function StatBox({ label, value, icon }) {
  return (
    <div className="bg-accent/50 rounded-xl p-3.5">
      <span className="block text-xs text-muted-foreground mb-1">{label}</span>
      <span className="block text-lg font-semibold text-foreground">
        {icon && <span className="mr-1">{icon}</span>}
        {value}
      </span>
    </div>
  );
}
