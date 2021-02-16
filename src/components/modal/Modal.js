import { Component, useState } from 'react';
import './Modal.css';
import IconClose from './iconClose/IconClose';

const Modal = props => {
  return (
    <>
      <button onClick="">OpenModal</button>

      <div
        className={`modal__wrapper ${props.isOpened ? 'open' : 'close'}`}
        style={{ ...props.style }}
      >
        <div className="modal__body">
          <button type="button">
            <IconClose />
          </button>

          <h2>Ваша рекомендуемая суточная норма калорий составляет</h2>
          <hr />
          {props.children}
        </div>
      </div>
    </>
  );
};

export default Modal;
