export const isAuth = state => state.auth.accessToken;

const getUserName = state => state.auth.user.username;
const isLoading = state => state.loading;

export default { isAuth, getUserName, isLoading };
