// FIX #4: Migrated from manual useEffect/useState to React Query
// — eliminates duplicate API calls, adds caching, and proper error states
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/components/ui/use-toast';
import { base44 } from '@/api/base44Client';

export function useReviews(strainId) {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  // Fetch current user
  const { data: user } = useQuery({
    queryKey: ['currentUser'],
    queryFn: () => base44.auth.me().catch(() => null),
    staleTime: 5 * 60 * 1000,
  });

  // Fetch reviews for this strain
  const {
    data: reviews = [],
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ['reviews', strainId],
    queryFn: () => base44.entities.Review.filter({ strainId }),
    enabled: !!strainId,
  });

  const userReview = user ? reviews.find((r) => r.created_by === user.email) || null : null;

  const averageRating =
    reviews.length > 0
      ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
      : 0;

  // FIX #6: Errors now shown as toasts instead of silent console.error
  const invalidate = () => queryClient.invalidateQueries({ queryKey: ['reviews', strainId] });

  const addMutation = useMutation({
    mutationFn: ({ rating, opinion }) =>
      base44.entities.Review.create({ strainId, rating, opinion: opinion || null }),
    onSuccess: invalidate,
    onError: () =>
      toast({ title: 'Błąd', description: 'Nie udało się dodać opinii.', variant: 'destructive' }),
  });

  const updateMutation = useMutation({
    mutationFn: ({ reviewId, rating, opinion }) =>
      base44.entities.Review.update(reviewId, { rating, opinion: opinion || null }),
    onSuccess: invalidate,
    onError: () =>
      toast({ title: 'Błąd', description: 'Nie udało się zaktualizować opinii.', variant: 'destructive' }),
  });

  const deleteMutation = useMutation({
    mutationFn: (reviewId) => base44.entities.Review.delete(reviewId),
    onSuccess: invalidate,
    onError: () =>
      toast({ title: 'Błąd', description: 'Nie udało się usunąć opinii.', variant: 'destructive' }),
  });

  const addReview = (rating, opinion) => addMutation.mutateAsync({ rating, opinion });
  const updateReview = (reviewId, rating, opinion) => updateMutation.mutateAsync({ reviewId, rating, opinion });
  const deleteReview = (reviewId) => deleteMutation.mutateAsync(reviewId);

  return {
    reviews,
    loading,
    error,
    user,
    userReview,
    averageRating,
    addReview,
    updateReview,
    deleteReview,
    isSubmitting: addMutation.isPending || updateMutation.isPending || deleteMutation.isPending,
  };
}
