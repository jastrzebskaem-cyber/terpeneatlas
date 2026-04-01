import { useState, useEffect } from 'react';
import { Star, MessageSquare, Trash2, Edit2, X } from 'lucide-react';
import { useReviews } from '../hooks/useReviews';
import { base44 } from '@/api/base44Client';

export default function ReviewSection({ strainId }) {
  const { reviews, loading, userReview, averageRating, addReview, updateReview, deleteReview } = useReviews(strainId);
  const [isEditing, setIsEditing] = useState(false);
  const [rating, setRating] = useState(5);
  const [opinion, setOpinion] = useState('');
  const [hoverRating, setHoverRating] = useState(0);
  const [user, setUser] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    base44.auth.me().then(setUser).catch(() => setUser(null));
  }, []);

  useEffect(() => {
    if (userReview) {
      setRating(userReview.rating);
      setOpinion(userReview.opinion || '');
      setIsEditing(true);
    }
  }, [userReview]);

  const handleSubmit = async () => {
    if (!user) return;
    setSubmitting(true);
    try {
      if (userReview) {
        await updateReview(userReview.id, rating, opinion);
      } else {
        await addReview(rating, opinion);
      }
      setOpinion('');
      setRating(5);
      setIsEditing(false);
    } catch (error) {
      console.error('Error submitting review:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!userReview) return;
    setSubmitting(true);
    try {
      await deleteReview(userReview.id);
      setOpinion('');
      setRating(5);
      setIsEditing(false);
    } catch (error) {
      console.error('Error deleting review:', error);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <div className="text-sm text-muted-foreground">Ładowanie opinii...</div>;
  }

  return (
    <div className="bg-card rounded-2xl border border-border p-6 sm:p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-playfair text-xl font-semibold text-foreground flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-primary" />
            Opinie użytkowników
          </h2>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-4 h-4 ${
                    star <= Math.round(averageRating)
                      ? 'fill-amber-400 text-amber-400'
                      : 'text-muted-foreground'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {averageRating > 0 ? `${averageRating}/5 (${reviews.length} opinii)` : 'Brak opinii'}
            </span>
          </div>
        </div>
      </div>

      {/* Add/Edit Review Form */}
      {user ? (
        <div className="mb-6 p-4 bg-accent/50 rounded-xl border border-border">
          {!isEditing && !userReview ? (
            <button
              onClick={() => setIsEditing(true)}
              className="text-sm text-primary hover:underline font-medium"
            >
              Dodaj opinię
            </button>
          ) : isEditing ? (
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-2">
                  Ocena (1-5)
                </label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= (hoverRating || rating)
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-muted-foreground'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-2">
                  Twoja opinia (opcjonalnie)
                </label>
                <textarea
                  value={opinion}
                  onChange={(e) => setOpinion(e.target.value.slice(0, 500))}
                  placeholder="Podziel się swoją opinią o tej odmianie..."
                  maxLength={500}
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none h-20"
                />
                <span className="text-xs text-muted-foreground mt-1 block">
                  {opinion.length}/500
                </span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="flex-1 px-3 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 disabled:opacity-50 transition-colors"
                >
                  {submitting ? 'Wysyłanie...' : userReview ? 'Zaktualizuj' : 'Dodaj opinię'}
                </button>
                {userReview && (
                  <button
                    onClick={handleDelete}
                    disabled={submitting}
                    className="px-3 py-2 rounded-lg bg-destructive text-destructive-foreground text-sm font-medium hover:bg-destructive/90 disabled:opacity-50 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={() => {
                    setIsEditing(false);
                    if (!userReview) {
                      setOpinion('');
                      setRating(5);
                    }
                  }}
                  disabled={submitting}
                  className="px-3 py-2 rounded-lg border border-border text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : null}
        </div>
      ) : (
        <div className="mb-6 p-4 bg-accent/50 rounded-xl border border-border text-sm text-muted-foreground">
          Zaloguj się, aby dodać opinię
        </div>
      )}

      {/* Reviews List */}
      <div className="space-y-3">
        {reviews.map((review) => (
          <div key={review.id} className="p-4 bg-accent/20 rounded-xl border border-border">
            <div className="flex items-start justify-between mb-2">
              <div className="flex gap-2 items-center">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-3.5 h-3.5 ${
                        star <= review.rating
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground font-medium">{review.rating}/5</span>
              </div>
              {user && user.email === review.created_by && (
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
              )}
            </div>
            {review.opinion && (
              <p className="text-sm text-foreground leading-relaxed mb-2">{review.opinion}</p>
            )}
            <p className="text-xs text-muted-foreground">
              {new Date(review.created_date).toLocaleDateString('pl-PL')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}