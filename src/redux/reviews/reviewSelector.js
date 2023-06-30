export const selectError = state => state?.reviews?.error;
export const selectAllReviews = state => state?.reviews?.reviews;
export const selectOwnReviews = state => state?.reviews?.ownReviews;
export const selectIsLoading = state => state?.reviews?.isLoading;
