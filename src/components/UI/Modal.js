import React from 'react';
import styles from './Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
};

const Overlay = (props) => {
  return <div className={styles.modal}> {props.children}</div>;
};
const portalElement = document.getElementById('root-overlay');
const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <Overlay> {props.children} </Overlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
