// FIX #5: Favorites now persisted to Base44 backend (Favorite entity) when user is logged in,
// with localStorage as a fallback for unauthenticated users.
// This means favorites survive across devices and browsers.
import { useState, useEffect, useCallback } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";

const LOCAL_KEY = "terpene-atlas-favorites";

function getLocalFavorites() {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_KEY)) || [];
  } catch {
    return [];
  }
}

export function useFavorites() {
  const queryClient = useQueryClient();

  // Check if user is logged in
  const { data: user } = useQuery({
    queryKey: ["currentUser"],
    queryFn: () => base44.auth.me().catch(() => null),
    staleTime: 5 * 60 * 1000,
  });

  // Local fallback state (for unauthenticated users)
  const [localFavorites, setLocalFavorites] = useState(getLocalFavorites);

  useEffect(() => {
    if (!user) {
      localStorage.setItem(LOCAL_KEY, JSON.stringify(localFavorites));
    }
  }, [localFavorites, user]);

  // Server-side favorites (authenticated users)
  const { data: serverFavorites = [] } = useQuery({
    queryKey: ["favorites"],
    queryFn: () => base44.entities.Favorite.list(),
    enabled: !!user,
    select: (data) => data.map((f) => f.strainId),
  });

  const addMutation = useMutation({
    mutationFn: (strainId) => base44.entities.Favorite.create({ strainId }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["favorites"] }),
  });

  const removeMutation = useMutation({
    mutationFn: async (strainId) => {
      const all = await base44.entities.Favorite.filter({ strainId });
      if (all.length > 0) await base44.entities.Favorite.delete(all[0].id);
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["favorites"] }),
  });

  const favorites = user ? serverFavorites : localFavorites;

  const toggleFavorite = useCallback(
    (id) => {
      if (user) {
        if (serverFavorites.includes(id)) {
          removeMutation.mutate(id);
        } else {
          addMutation.mutate(id);
        }
      } else {
        setLocalFavorites((prev) =>
          prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
      }
    },
    [user, serverFavorites]
  );

  const isFavorite = useCallback((id) => favorites.includes(id), [favorites]);

  return { favorites, toggleFavorite, isFavorite };
}
