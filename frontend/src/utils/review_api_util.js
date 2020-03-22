import axios from 'axios';

// TODO:
// MIGHT HAVE TO REFACTOR BUT LOOKS GOOD

export const createReview = review => (
  axios.post('/api/reviews', review)
);

export const updateReview = review => (
  axios.patch(`/api/reviews/${review._id}`, review)
);

export const deleteReview = id => (
  axios.delete(`/api/reviews/${id}`)
);
