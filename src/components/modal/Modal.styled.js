import styled from 'styled-components';
import arrowCloseOrange from './image/arrowCloseOrange.svg';
import arrowClose from './image/arrowClose.svg';
import iconClose from './image/iconClose.svg';
import iconCloseWhite from './image/iconCloseWhite.svg';

const ModalWindow = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(33, 33, 33, 0.12);
  z-index: 1200;

  @media (min-width: 768px) {
    top: 0;
  }

  @media (min-width: 1280px) and (orientation: landscape) {
  }
  .open {
    overflow: hidden;
  }
  .close {
    overflow: visible;
  }
  .modal {
    position: absolute;
    top: 35px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    height: 100vh;
    box-shadow: 0px 22px 40px 0px rgba(0, 0, 0, 0.1);
    padding: 30px 15px 0;

    @media (max-width: 767px) {
      width: 100%;
    }

    @media (min-width: 768px) {
      width: 594px;
      height: 580px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 0 40px;
    }

    @media (min-width: 1280px) and (orientation: landscape) {
      max-width: 690px;
    }
  }

  .closeButton {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    padding: 0;
    margin: 0;
    border: none;
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer;
    transition: background-color 200ms ease-in-out;
    outline: none;
    background-image: url(${iconClose});
    background-position: center;
    background-size: 60%;
    background-repeat: no-repeat;
    transition: all 300ms ease-in;
  }

  .closeButton:hover,
  .closeButton:focus {
    background-image: url(${iconCloseWhite});
    background-color: #fc842d;
  }
  .arrowCloseButton {
    position: absolute;
    top: -23px;
    left: 15px;
    width: 14px;
    height: 9px;
    padding: 10px 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: background-color 200ms ease-in-out;
    outline: none;
    background-image: url(${arrowClose});
    background-repeat: no-repeat;
    transition: all 300ms ease-in;
  }
  .arrowCloseButton:hover,
  .arrowCloseButton:focus {
    background-image: url(${arrowCloseOrange});
  }
`;
export default ModalWindow;
