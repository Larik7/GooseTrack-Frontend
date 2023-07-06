export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const isToken = state => state.auth.accessToken;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectedError = state => state.auth.error;
