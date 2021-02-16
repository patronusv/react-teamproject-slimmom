import RegistrationForm from '../../components/registrationForm/RegistrationForm';
import RegistrationWrapper from './RegistrationStyled';

const Registration = () => {
  return (
    <RegistrationWrapper>
      <div className="container">
        <RegistrationForm />
      </div>
    </RegistrationWrapper>
  );
};

export default Registration;
