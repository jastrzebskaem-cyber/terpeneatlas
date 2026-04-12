import { useState, useMemo } from "react";
import { STRAINS } from "../lib/strainsData";
import StrainCard from "../components/StrainCard";
import CompareTable from "../components/CompareTable";
import { Search, SlidersHorizontal, Leaf, X, GitCompare } from "lucide-react";
import { useFavorites } from "../hooks/useFavorites";

const GENETICS_OPTIONS = ["Wszystkie", "Indica", "Sativa", "Hybryda", "Hybryda/Indica", "Hybryda/Sativa"];
const AVAILABILITY_OPTIONS = ["Wszystkie", "Wysoka", "Niska", "Brak", "Wycofana"];

const SORT_OPTIONS = [
{ value: "name-asc", label: "Nazwa (A-Z)" },
{ value: "name-desc", label: "Nazwa (Z-A)" },
{ value: "thc-desc", label: "THC (malejąco)" },
{ value: "thc-asc", label: "THC (rosnąco)" }];


export default function Home() {
  const [search, setSearch] = useState("");
  const [genetics, setGenetics] = useState("Wszystkie");
  const [availability, setAvailability] = useState("Wszystkie");
  const [producer, setProducer] = useState("Wszystkie");

  const [sortBy, setSortBy] = useState("name-asc");
  const [showFilters, setShowFilters] = useState(false);
  const [compareIds, setCompareIds] = useState([]);
  const [showCompare, setShowCompare] = useState(false);
  const { toggleFavorite, isFavorite } = useFavorites();

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

  const filteredStrains = useMemo(() => {
    let results = STRAINS.filter((s) => {
      const matchesSearch =
      !search ||
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.producer.toLowerCase().includes(search.toLowerCase());
      const matchesGenetics =
      genetics === "Wszystkie" || s.genetics === genetics;
      const matchesAvailability =
      availability === "Wszystkie" || s.availability === availability;
      const matchesProducer =
      producer === "Wszystkie" || s.producer === producer;
      return matchesSearch && matchesGenetics && matchesAvailability && matchesProducer;
    });

    results = [...results].sort((a, b) => {
      if (sortBy === "name-asc") return a.name.localeCompare(b.name, "pl");
      if (sortBy === "name-desc") return b.name.localeCompare(a.name, "pl");
      if (sortBy === "thc-desc") return b.thc - a.thc;
      if (sortBy === "thc-asc") return a.thc - b.thc;
      return 0;
    });

    return results;
  }, [search, genetics, availability, producer, sortBy]);

  const hasActiveFilters = genetics !== "Wszystkie" || availability !== "Wszystkie" || producer !== "Wszystkie";

  const clearFilters = () => {
    setGenetics("Wszystkie");
    setAvailability("Wszystkie");
    setProducer("Wszystkie");

    setSearch("");
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
          Porównaj profile terpenowe
        </h1>
        

        
      </div>

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
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
            
            {search &&
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
              
                <X className="w-4 h-4" />
              </button>
            }
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
            showFilters || hasActiveFilters ?
            "bg-primary text-primary-foreground border-primary" :
            "bg-card border-border text-muted-foreground hover:text-foreground hover:border-primary/30"}`
            }>
            
            <SlidersHorizontal className="w-4 h-4" />
            <span className="hidden sm:inline">Filtry</span>
          </button>
        </div>

        {showFilters &&
        <div className="bg-card rounded-xl border border-border p-4 sm:p-5 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <FilterSelect
              label="Genetyka"
              value={genetics}
              onChange={setGenetics}
              options={GENETICS_OPTIONS} />
            

              <FilterSelect
              label="Producent"
              value={producer}
              onChange={setProducer}
              options={producerOptions} />
            

              <FilterSelect
              label="Dostępność"
              value={availability}
              onChange={setAvailability}
              options={AVAILABILITY_OPTIONS} />
            
            </div>
            {hasActiveFilters &&
          <button
            onClick={clearFilters}
            className="text-sm text-primary hover:underline">
            
                Wyczyść filtry
              </button>
          }
          </div>
        }
      </div>

      {/* Results count + sort */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-muted-foreground">
          {filteredStrains.length} {filteredStrains.length === 1 ? "odmiana" : filteredStrains.length < 5 ? "odmiany" : "odmian"}
        </p>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="text-sm px-3 py-1.5 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
          
          {SORT_OPTIONS.map((opt) =>
          <option key={opt.value} value={opt.value}>{opt.label}</option>
          )}
        </select>
      </div>

      {/* Compare button */}
      {compareIds.length > 0 &&
      <div className="mb-4 flex items-center gap-3">
          <button
          onClick={() => compareIds.length >= 2 && setShowCompare(true)}
          disabled={compareIds.length < 2}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
            compareIds.length >= 2
              ? 'bg-primary text-primary-foreground hover:bg-primary/90'
              : 'bg-muted text-muted-foreground cursor-not-allowed'
          }`}>
          
            <GitCompare className="w-4 h-4" />
            {compareIds.length < 2
              ? `Wybierz jeszcze ${2 - compareIds.length} odmian${compareIds.length === 1 ? 'ę' : 'y'}`
              : `Porównaj (${compareIds.length})`}
          </button>
          <button
          onClick={() => { setCompareIds([]); setShowCompare(false); }}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          
            Wyczyść wybór
          </button>
        </div>
      }

      {/* Strain grid */}
      {filteredStrains.length > 0 ?
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredStrains.map((strain) =>
        <StrainCard
          key={strain.id}
          strain={strain}
          isComparing={compareIds.includes(strain.id)}
          onToggleCompare={() => toggleCompare(strain.id)}
          canAddMore={compareIds.length < 4}
          isFavorite={isFavorite(strain.id)}
          onToggleFavorite={() => toggleFavorite(strain.id)} />

        )}
        </div> :

      <div className="text-center py-16">
          <Leaf className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
          <p className="text-muted-foreground">Nie znaleziono odmian spełniających kryteria.</p>
          <button onClick={clearFilters} className="mt-2 text-sm text-primary hover:underline">
            Wyczyść filtry
          </button>
        </div>
      }

    {showCompare && compareStrains.length >= 2 &&
      <CompareTable
        strains={compareStrains}
        onRemove={(id) => {
          const next = compareIds.filter(x => x !== id);
          setCompareIds(next);
          if (next.length < 2) setShowCompare(false);
        }}
        onClose={() => setShowCompare(false)}
      />
    }
    </div>);

}

function FilterSelect({ label, value, onChange, options }) {
  return (
    <div>
      <label className="block text-xs font-medium text-muted-foreground mb-1.5">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
        
        {options.map((opt) =>
        <option key={opt} value={opt}>
            {opt}
          </option>
        )}
      </select>
    </div>);

}