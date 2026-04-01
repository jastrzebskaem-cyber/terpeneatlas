import { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';

export function useReviews(strainId) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userReview, setUserReview] = useState(null);

  useEffect(() => {
    loadReviews();
  }, [strainId]);

  const loadReviews = async () => {
    try {
      const data = await base44.entities.Review.filter({ strainId });
      setReviews(data);
      
      const user = await base44.auth.me();
      if (user) {
        const userRev = data.find(r => r.created_by === user.email);
        setUserReview(userRev || null);
      }
    } catch (error) {
      console.error('Error loading reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  const addReview = async (rating, opinion) => {
    try {
      const newReview = await base44.entities.Review.create({
        strainId,
        rating,
        opinion: opinion || null
      });
      await loadReviews();
      return newReview;
    } catch (error) {
      console.error('Error adding review:', error);
      throw error;
    }
  };

  const updateReview = async (reviewId, rating, opinion) => {
    try {
      await base44.entities.Review.update(reviewId, {
        rating,
        opinion: opinion || null
      });
      await loadReviews();
    } catch (error) {
      console.error('Error updating review:', error);
      throw error;
    }
  };

  const deleteReview = async (reviewId) => {
    try {
      await base44.entities.Review.delete(reviewId);
      await loadReviews();
    } catch (error) {
      console.error('Error deleting review:', error);
      throw error;
    }
  };

  const averageRating = reviews.length > 0
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : 0;

  return {
    reviews,
    loading,
    userReview,
    averageRating,
    addReview,
    updateReview,
    deleteReview
  };
}