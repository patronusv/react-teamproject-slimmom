import Logo from '../logo/Logo';
import {HeaderContainer,Nav,Container} from './headerStyled';

const Header = () => {

  return (
    <>
      <HeaderContainer>
        <Container className="container">
          <Logo/>
          <Nav>
            <ul className="nav-list">
              <li className="nav-list-item">
                Enter
              </li>
              <li className="nav-list-item">
                Registration
              </li>
            </ul>
          </Nav>
        </Container>
      </HeaderContainer>
    </>
  );
};

export default Header;
