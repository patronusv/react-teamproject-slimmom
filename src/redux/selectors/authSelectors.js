export const isAuth = state => {
  console.log(state);
 return state.auth.accessToken;
};

const getUserName = state => state.auth.user.username;
const getId = state => state.auth.user.id;

const getUserdata = state => ({
  weight: state.auth.user.userData.weight,
  height: state.auth.user.userData.height,
  age: state.auth.user.userData.age,
  bloodType: state.auth.user.userData.bloodType,
  desiredWeight: state.auth.user.userData.desiredWeight,
});

export default {isAuth, getUserName, getId, getUserdata };
