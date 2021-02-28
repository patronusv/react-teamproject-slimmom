import logoMobile  from './images/logoMobile.png';
import logoMobAuth  from './images/logoMobAuth.png';
import logoTablet  from './images/logoTablet.png';
import LogoDesktop from './images/logoDesktop.png';
import {LogoContainerMobile,LogoContainerTablet,LogoContainerDesktop} from './LogoStyled'

const Logo = ({isAuth,dailyRate}) => {

  return (
    <>
      <a href={isAuth  ? "/calculator" :  "/"}>

        {isAuth ?(
        <LogoContainerMobile src={logoMobAuth} width="162.3" height="44"/> 
        ) : (
          <LogoContainerMobile src={logoMobile} width="46" height="44"/>
        )}
        <LogoContainerTablet src={logoTablet} width="162.3" height="44"/>
        <LogoContainerDesktop src={LogoDesktop} width="166.41" height="66"/>
      </a>
    </>
  );
};

export default Logo;
