import Header from './header/Header';
import Main from './main/Main';
import Modal from './modal/Modal';

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Modal isOpened={true} />
    </>
  );
};

export default App;
