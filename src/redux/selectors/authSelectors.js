export const isAuth = state => state.auth.accessToken;

const getUserName = state => state.auth.user.name;

export default { isAuth, getUserName };
