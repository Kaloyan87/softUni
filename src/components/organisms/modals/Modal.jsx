import React from 'react';
import styles from "./Modal.module.css"
import {AiFillCloseCircle} from "react-icons/ai";
import UserForm from "../forms/UserForm";

const Modal = ({ open, onClose }) => {
    if (!open) return null;
    return (
        <div onClick={onClose} className={styles.overlay}>
            <div onClick={(e) => {e.stopPropagation();}} className={styles.modalContainer}>
                <div className={styles.modalRight}>
                    <AiFillCloseCircle className={styles.closeBtn} onClick={onClose}/>
                    <div className={styles.content}>
                        <UserForm/>
                    </div>
                    <div className={styles.btnContainer}>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;