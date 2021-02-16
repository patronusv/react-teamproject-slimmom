const isAuth = state => state.auth.accessToken;

const getUserName = state => state.auth.user.username;

export default { isAuth, getUserName };
