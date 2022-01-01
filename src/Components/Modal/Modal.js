import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.css';

const Backdrop = (props) => {
    return (
        <div onClick={props.exitModal} className={styles["backdrop"]} />
    );
};

const ModalContent = (props) => {
    return (
        <div className={styles["modal"]}>

                <div className={styles["modal-header"]}>
                    {props.title}
                </div>

                <div className={styles["modal-message"]}>
                    {props.message}
                </div>

        </div>
    );
};

const Modal = (props) => {
    return (
        <React.Fragment>
            {
                ReactDOM.createPortal(<Backdrop exitModal={props.exitModal} />, document.getElementById('modal-backdrop'))
            }
            {
                ReactDOM.createPortal(<ModalContent title={props.title} message={props.message} />, document.getElementById('modal-content'))
            }
        </React.Fragment>
    )
}

export default Modal;