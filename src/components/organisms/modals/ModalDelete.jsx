import React from 'react';
import styles from './ModalDelete.module.css'

const ModalDelete = ({onClose, onDeleteRecipe, idForDelete}) => {


    return (
        <div className={styles.overlay}>
            <div className={styles.modalContainer}>
                <header>
                    <h2>Are you sure you want to delete this recipe?</h2>
                </header>
                <div className={styles.actionsContainer}>
                    <button
                        className={styles.deleteBtn}
                        type="submit"
                        onClick={() => {
                            onDeleteRecipe(idForDelete)
                        }}
                    >
                        Delete
                    </button>
                    <button
                        className={styles.cancelBtn}
                        type="button" onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalDelete;