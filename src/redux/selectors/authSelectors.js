export const isAuth = state => state.auth.accessToken;

const getUserName = state => state.auth.user.username;
const getId = state => state.auth.user.id;

export default { isAuth, getUserName, getId };
