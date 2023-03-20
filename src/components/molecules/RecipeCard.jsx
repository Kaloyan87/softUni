import React, {useState} from 'react';
import styles from './RecipeCard.module.jsx.css'
import ModalDelete from "../organisms/modals/ModalDelete";


const RecipeCard = ({
    id,
    title,
    description,
    duration,
    image,
    onDeleteRecipe
}) => {
    const [modalDelete, setModalDelete] = useState(false)

    const openModal =  () => {
        setModalDelete(true)
    }

    //close modal
    const onClose = () => {
        setModalDelete(false)
    }
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardTitle}>
                Name:{title}
            </div>
            <div className={styles.imgRecipe}>
                <img src={image} alt=''/>
            </div>

            <div>{duration}</div>
            <div className={styles.cardBody}>
                <p>description:{description}</p>
            </div>
            <div className={styles.buttonContainer}>
                <button onClick={openModal}>Delete</button>
                <button>Edit</button>
            </div>
            {modalDelete && <ModalDelete id={id} onClose={onClose} onDeleteRecipe={onDeleteRecipe} />}
        </div>
    );
};

export default RecipeCard;