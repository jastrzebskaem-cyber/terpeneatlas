import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { STRAINS } from "../lib/strainsData";
import { TERPENES } from "../lib/terpenesData";
import StrainCard from "../components/StrainCard";
import CompareTable from "../components/CompareTable";
import { Search, SlidersHorizontal, Leaf, X, GitCompare, FlaskConical } from "lucide-react";
import { useFavorites } from "../hooks/useFavorites";
import { usePageTitle } from '../hooks/usePageTitle';

const GENETICS_OPTIONS = ["Wszystkie", "Indica", "Sativa", "Hybryda", "Hybryda/Indica", "Hybryda/Sativa"];
const AVAILABILITY_OPTIONS = ["Wszystkie", "Wysoka", "Niska", "Brak", "Wycofana"];
const THC_RANGES = [
  { value: "all", label: "Wszystkie" },
  { value: "low", label: "do 18%" },
  { value: "mid", label: "18–22%" },
  { value: "high", label: "22–25%" },
  { value: "very-high", label: "powyżej 25%" },
];
const CBD_OPTIONS = [
  { value: "all", label: "Wszystkie" },
  { value: "low", label: "< 1% (tylko THC)" },
  { value: "balanced", label: "≥ 1% CBD" },
  { value: "high", label: "≥ 5% CBD" },
];
const SORT_OPTIONS = [
  { value: "name-asc", label: "Nazwa (A-Z)" },
  { value: "name-desc", label: "Nazwa (Z-A)" },
  { value: "thc-desc", label: "THC (malejąco)" },
  { value: "thc-asc", label: "THC (rosnąco)" },
  { value: "cbd-desc", label: "CBD (malejąco)" },
  { value: "cbd-asc", label: "CBD (rosnąco)" },
  { value: "terpene-desc", label: "Terpen (malejąco)" },
];

// Build terpene filter options from TERPENES data
const TERPENE_OPTIONS = [
  { value: "all", label: "Wszystkie terpeny" },
  ...TERPENES.map((t) => ({ value: t.id, label: `${t.emoji} ${t.shortName}` })),
];

export default function Home() {
  usePageTitle("Baza Odmian Konopnych", "Przeglądaj odmiany medycznej marihuany dostępne w Polsce. Porównuj profile terpenowe, zawartość THC i CBD oraz dostępność w aptekach.");
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState("");
  const [genetics, setGenetics] = useState("Wszystkie");
  const [availability, setAvailability] = useState("Wszystkie");
  const [producer, setProducer] = useState("Wszystkie");
  const [thcRange, setThcRange] = useState("all");
  const [cbdFilter, setCbdFilter] = useState("all");
  // Terpene filter — initialised from ?terpene= URL param
  const [dominantTerpene, setDominantTerpene] = useState(
    () => searchParams.get("terpene") || "all"
  );
  const [sortBy, setSortBy] = useState(
    () => (searchParams.get("terpene") ? "terpene-desc" : "name-asc")
  );
  const [showFilters, setShowFilters] = useState(
    () => !!searchParams.get("terpene")
  );
  const [compareIds, setCompareIds] = useState([]);
  const [showCompare, setShowCompare] = useState(false);
  const { toggleFavorite, isFavorite } = useFavorites();

  // Sync URL param → state when navigating back here from TerpeneDetail
  useEffect(() => {
    const param = searchParams.get("terpene");
    if (param && param !== dominantTerpene) {
      setDominantTerpene(param);
      setSortBy("terpene-desc");
      setShowFilters(true);
    }
  }, [searchParams]);

  // Keep URL in sync when user changes the terpene filter manually
  const handleTerpeneChange = (val) => {
    setDominantTerpene(val);
    if (val !== "all") {
      setSortBy("terpene-desc");
      setSearchParams({ terpene: val }, { replace: true });
    } else {
      setSortBy("name-asc");
      setSearchParams({}, { replace: true });
    }
  };

  const toggleCompare = (id) => {
    setCompareIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : prev.length < 4 ? [...prev, id] : prev
    );
  };

  const compareStrains = STRAINS.filter((s) => compareIds.includes(s.id));

  const producerOptions = useMemo(() => {
    const unique = [...new Set(STRAINS.map((s) => s.producer))].sort();
    return ["Wszystkie", ...unique];
  }, []);

  // Resolve active terpene object for display
  const activeTerpene = dominantTerpene !== "all"
    ? TERPENES.find((t) => t.id === dominantTerpene)
    : null;

  const filteredStrains = useMemo(() => {
    let results = STRAINS.filter((s) => {
      const matchesSearch =
        !search ||
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.producer.toLowerCase().includes(search.toLowerCase());
      const matchesGenetics = genetics === "Wszystkie" || s.genetics === genetics;
      const matchesAvailability = availability === "Wszystkie" || s.availability === availability;
      const matchesProducer = producer === "Wszystkie" || s.producer === producer;
      const matchesThc =
        thcRange === "all" ||
        (thcRange === "low" && s.thc < 18) ||
        (thcRange === "mid" && s.thc >= 18 && s.thc <= 22) ||
        (thcRange === "high" && s.thc > 22 && s.thc <= 25) ||
        (thcRange === "very-high" && s.thc > 25);
      const matchesCbd =
        cbdFilter === "all" ||
        (cbdFilter === "low" && s.cbd < 1) ||
        (cbdFilter === "balanced" && s.cbd >= 1) ||
        (cbdFilter === "high" && s.cbd >= 5);
      // Terpene filter: strain must have > 0 of this terpene
      const matchesTerpene =
        dominantTerpene === "all" ||
        (() => {
          const terpene = TERPENES.find((t) => t.id === dominantTerpene);
          if (!terpene) return true;
          const key = terpene.shortName.toLowerCase();
          return (s.terpenes[key] || 0) > 0;
        })();

      return matchesSearch && matchesGenetics && matchesAvailability && matchesProducer && matchesThc && matchesCbd && matchesTerpene;
    });

    results = [...results].sort((a, b) => {
      if (sortBy === "name-asc") return a.name.localeCompare(b.name, "pl");
      if (sortBy === "name-desc") return b.name.localeCompare(a.name, "pl");
      if (sortBy === "thc-desc") return b.thc - a.thc;
      if (sortBy === "thc-asc") return a.thc - b.thc;
      if (sortBy === "cbd-desc") return b.cbd - a.cbd;
      if (sortBy === "cbd-asc") return a.cbd - b.cbd;
      if (sortBy === "terpene-desc" && activeTerpene) {
        const key = activeTerpene.shortName.toLowerCase();
        return (b.terpenes[key] || 0) - (a.terpenes[key] || 0);
      }
      return 0;
    });

    return results;
  }, [search, genetics, availability, producer, sortBy, thcRange, cbdFilter, dominantTerpene]);

  const hasActiveFilters =
    genetics !== "Wszystkie" ||
    availability !== "Wszystkie" ||
    producer !== "Wszystkie" ||
    thcRange !== "all" ||
    cbdFilter !== "all" ||
    dominantTerpene !== "all";

  const clearFilters = () => {
    setGenetics("Wszystkie");
    setAvailability("Wszystkie");
    setProducer("Wszystkie");
    setThcRange("all");
    setCbdFilter("all");
    setDominantTerpene("all");
    setSortBy("name-asc");
    setSearch("");
    setSearchParams({}, { replace: true });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Hero */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-sm text-accent-foreground mb-4">
          <Leaf className="w-4 h-4" />
          Medyczne konopie w Polsce
        </div>
        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3">
          Odkryj różnice pomiędzy konopiami
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
          Przeglądaj odmiany medycznej marihuany dostępne w Polsce, porównuj profile terpenowe i znajdź odmianę odpowiednią dla Ciebie.
        </p>
      </div>

      {/* Active terpene banner — shown when coming from TerpeneDetail */}
      {activeTerpene && (
        <div className="mb-6 flex items-center gap-3 px-4 py-3 rounded-xl bg-accent border border-border">
          <span className="text-2xl">{activeTerpene.emoji}</span>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground">
              Odmiany zawierające: {activeTerpene.shortName}
            </p>
            <p className="text-xs text-muted-foreground truncate">{activeTerpene.scent}</p>
          </div>
          <button
            onClick={clearFilters}
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
          >
            <X className="w-3.5 h-3.5" />
            Wyczyść
          </button>
        </div>
      )}

      {/* Search & Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Szukaj odmiany lub producenta..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
              showFilters || hasActiveFilters
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
            }`}
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="hidden sm:inline">Filtry</span>
            {hasActiveFilters && (
              <span className="flex items-center justify-center w-4 h-4 rounded-full bg-white/30 text-[10px] font-bold">
                {[genetics !== "Wszystkie", availability !== "Wszystkie", producer !== "Wszystkie", thcRange !== "all", cbdFilter !== "all", dominantTerpene !== "all"].filter(Boolean).length}
              </span>
            )}
          </button>
        </div>

        {showFilters && (
          <div className="bg-card rounded-xl border border-border p-4 sm:p-5 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <FilterSelect label="Genetyka" value={genetics} onChange={setGenetics} options={GENETICS_OPTIONS} />
              <FilterSelect label="Producent" value={producer} onChange={setProducer} options={producerOptions} />
              <FilterSelect label="Dostępność" value={availability} onChange={setAvailability} options={AVAILABILITY_OPTIONS} />
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">Zawartość THC</label>
                <select
                  value={thcRange}
                  onChange={(e) => setThcRange(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                >
                  {THC_RANGES.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">Zawartość CBD</label>
                <select
                  value={cbdFilter}
                  onChange={(e) => setCbdFilter(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                >
                  {CBD_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
              {/* Terpene filter */}
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5 flex items-center gap-1">
                  <FlaskConical className="w-3 h-3" />
                  Dominujący terpen
                </label>
                <select
                  value={dominantTerpene}
                  onChange={(e) => handleTerpeneChange(e.target.value)}
                  className={`w-full px-3 py-2.5 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${
                    dominantTerpene !== "all" ? "border-primary/40 text-primary font-medium" : "border-border"
                  }`}
                >
                  {TERPENE_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>
            {hasActiveFilters && (
              <button onClick={clearFilters} className="text-sm text-primary hover:underline">
                Wyczyść wszystkie filtry
              </button>
            )}
          </div>
        )}
      </div>

      {/* Results count + sort */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-muted-foreground">
          {filteredStrains.length}{" "}
          {filteredStrains.length === 1 ? "odmiana" : filteredStrains.length < 5 ? "odmiany" : "odmian"}
          {activeTerpene && (
            <span className="ml-1 text-primary font-medium">z {activeTerpene.shortName}</span>
          )}
        </p>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="text-sm px-3 py-1.5 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
        >
          {SORT_OPTIONS.filter((o) => o.value !== "terpene-desc" || dominantTerpene !== "all").map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      {/* Compare button */}
      {compareIds.length > 0 && (
        <div className="mb-4 flex items-center gap-3">
          <button
            onClick={() => compareIds.length >= 2 && setShowCompare(true)}
            disabled={compareIds.length < 2}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              compareIds.length >= 2
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-muted text-muted-foreground cursor-not-allowed"
            }`}
          >
            <GitCompare className="w-4 h-4" />
            Porównaj ({compareIds.length})
          </button>
          <button
            onClick={() => setCompareIds([])}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Wyczyść
          </button>
        </div>
      )}

      {/* Strain grid */}
      {filteredStrains.length === 0 ? (
        <div className="text-center py-20">
          <Leaf className="w-12 h-12 text-muted-foreground/20 mx-auto mb-4" />
          <p className="text-muted-foreground mb-2">Brak odmian spełniających kryteria.</p>
          <button onClick={clearFilters} className="text-sm text-primary hover:underline">
            Wyczyść filtry
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredStrains.map((strain) => (
            <StrainCard
              key={strain.id}
              strain={strain}
              isComparing={compareIds.includes(strain.id)}
              onToggleCompare={() => toggleCompare(strain.id)}
              canAddMore={compareIds.length < 4 || compareIds.includes(strain.id)}
              isFavorite={isFavorite(strain.id)}
              onToggleFavorite={() => toggleFavorite(strain.id)}
              highlightTerpene={activeTerpene?.shortName?.toLowerCase()}
            />
          ))}
        </div>
      )}

      {showCompare && compareStrains.length >= 2 && (
        <CompareTable
          strains={compareStrains}
          onRemove={(rid) => setCompareIds((prev) => prev.filter((x) => x !== rid))}
          onClose={() => setShowCompare(false)}
        />
      )}
    </div>
  );
}

function FilterSelect({ label, value, onChange, options }) {
  return (
    <div>
      <label className="block text-xs font-medium text-muted-foreground mb-1.5">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
