import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import authOperations from '../../redux/operations/authOperations';
import authSelectors from '../../redux/selectors/authSelectors';
import img from './Vector.svg';

const User = styled.div`
  display: flex;
  justify-content: space-between;
  background: inherit;
  @media screen and (min-width: 290px) and (max-width: 767px) {
    width: 320px;
    background: #eff1f3;
  }
  @media screen and (min-width: 768px) and (max-width: 1079px) {
    width: 202px;
    margin-left: 174px;
    margin-top: 34px;
  }
  @media screen and (min-width: 1080px) {
    width: 215px;
    margin-left: 429px;
    margin-top: 134px;
  } ;
`;

const Nic = styled.h3`
  width: 122px;
  height: 12px;
  font-family: Gotham Pro;
  font-size: 14px;
  line-height: 1.08;
  text-align: right;
  letter-spacing: 0.04em;
  color: #212121;
  background: inherit;
  margin-top: 10px;
  @media screen and (min-width: 290px) and (max-width: 767px) {
    margin-left: 103px;
    margin-right: 15px;
    margin-top: 13px;
  }
`;

const Logout = styled.button`
  width: 50px;
  height: 12px;
  font-family: Gotham Pro;
  font-weight: bold;
  font-size: 14px;
  line-height: 13px;
  letter-spacing: 0.04em;
  border: none;
  color: #9b9faa;
  background: inherit;
  margin-top: 10px;
  &:hover,
  :focus,
  :active {
    cursor: pointer;
    color: #fc842d;
    outline: none;
  }
  @media screen and (min-width: 290px) and (max-width: 767px) {
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 13px;
  }
`;

const Vector = styled.img`
  @media screen and (min-width: 290px) and (max-width: 767px) {
    margin-top: 4px;
    margin-bottom: 4px;
  }
`;

const UserInfo = ({ name, onLogout }) => {
  return (
    <User>
      <Nic>User {name}</Nic>
      <Vector src={img} />
      <Logout type="button" onClick={onLogout}>
        Выйти
      </Logout>
    </User>
  );
};

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
