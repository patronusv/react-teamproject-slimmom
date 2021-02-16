import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import authOperations from '../../redux/operations/authOperations';
import authSelectors from '../../redux/selectors/authSelectors';
import img from './Vector.svg';
import style from './UserInfoStyle';

const UserInfo = ({ name, onLogout }) => {
  return (
    <style.User>
      <style.Nic>User {name}</style.Nic>
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
  onLogout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
