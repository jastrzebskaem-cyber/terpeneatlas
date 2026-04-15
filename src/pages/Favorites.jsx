import { STRAINS } from "../lib/strainsData";
import { useFavorites } from "../hooks/useFavorites";
import StrainCard from "../components/StrainCard";
import { Heart, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageTitle } from '../hooks/usePageTitle';

export default function Favorites() {
  usePageTitle("Ulubione Odmiany", "Twoje ulubione odmiany medycznej marihuany dostępne w Polsce.");
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  const favoriteStrains = STRAINS.filter((s) => favorites.includes(s.id));

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-sm text-accent-foreground mb-4">
          <Heart className="w-4 h-4" />
          Twoja kolekcja
        </div>
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground mb-3">
          Ulubione odmiany
        </h1>
        <p className="text-muted-foreground text-base max-w-xl mx-auto">
          Tutaj znajdziesz odmiany, które oznaczyłeś jako ulubione.
        </p>
      </div>

      {favoriteStrains.length === 0 ? (
        <div className="text-center py-20">
          <Heart className="w-12 h-12 text-muted-foreground/20 mx-auto mb-4" />
          <p className="text-muted-foreground mb-2">Nie masz jeszcze żadnych ulubionych.</p>
          <Link to="/" className="text-sm text-primary hover:underline">
            Przeglądaj odmiany i dodaj je do ulubionych
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {favoriteStrains.map((strain) => (
            <StrainCard
              key={strain.id}
              strain={strain}
              isFavorite={isFavorite(strain.id)}
              onToggleFavorite={() => toggleFavorite(strain.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}