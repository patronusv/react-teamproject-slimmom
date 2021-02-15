import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
import {HeaderContainer,Nav,Container} from './headerStyled';

const Header = () => {

  return (
    <>
      <HeaderContainer>
        <Container className="container">
          <Logo/>
          {/* <Nav>
            <Navigation link1="/register" link2="/login"/>
          </Nav> */}

          <Nav>
            <Navigation link1="/diary" link2="/calculator"/>
          </Nav>
        </Container>
      </HeaderContainer>
    </>
  );
};

export default Header;
