import React from 'react';
import { connect } from 'react-redux';

import authOperations from '../../redux/operations/authOperations';
import authSelectors from '../../redux/selectors/authSelectors';
import img from './Vector.svg';
import style from './UserInfoStyle';

const UserInfo = ({ name, onLogout }) => {
  // console.log('userinfo name, onLogout:', name, onLogout);
  return (
    <style.User>
      <style.Nic>{name}</style.Nic>
      <style.Vector src={img} />
      <style.Logout type="button" onClick={onLogout}>
        Выйти
      </style.Logout>
    </style.User>
  );
};

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOutOperation,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
