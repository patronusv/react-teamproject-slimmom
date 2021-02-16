import UserInfo from '../userInfo/UserInfo';
import Navigation from '../navigation/Navigation';
import { connect } from 'react-redux';
import authSelectors from '../../redux/selectors/authSelectors';

const Header = ({ isLogin }) => {
  return (
    <div>
      <Navigation />
      <UserInfo />
      {/* {isLogin && <UserInfo />} */}
    </div>
  );
};

const mapStateToProps = state => ({
  isLogin: authSelectors.isLogin(state),
});

export default connect(mapStateToProps)(Header);
