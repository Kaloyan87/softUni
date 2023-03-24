import React, {useState} from 'react';
import styles from './RecipeCard.module.css'
import ModalDelete from "../organisms/modals/ModalDelete";
import * as service from "../../services/services-recipes";


const RecipeCard = ({
                        id,
                        title,
                        description,
                        duration,
                        image,
                        ingredients,
                        buttonsDisable,
                        openModal,
                        onDeleteRecipeId
                    }) => {

    const [showDetails, setShowDetails] = useState(false);
    const [favorite, setFavorite] = useState(false);


    const favoriteHandler = async (id) => {
        setFavorite(!favorite)
        const data = {is_favorite: !favorite}
        await service.patch(id, data);
    }


    return (
        <>
        <div className={styles.cardContainer}>
            <div className={styles.flex}>
                <div className={styles.cardTitle}>
                    {title}
                </div>
                <div>
                    <img
                        className={styles.recipesPhoto}
                        src={image}
                        alt={image}/>
                </div>
            </div>
            <div>
                <p className={styles.ingredients}>Ingredients: {ingredients}</p>
            </div>
            <div>Preparation:{duration} min.</div>
            <div className={styles.cardBody}>
                <p className={styles.ingredients}>
                    Description:{showDetails ? description : `${description.substring(0, 200)}`}...
                </p>
            </div>
            <div className={styles.buttonContainer}>

                <button
                    className={styles.detailBtn}
                    onClick={() => setShowDetails(!showDetails)}
                >
                    Details
                </button>

                <button
                    disabled={!!buttonsDisable}
                    className={styles.editBtn}>
                    Edit
                </button>

                <button
                    disabled={!!buttonsDisable}
                    className={styles.favoriteBtn}
                    onClick={() => {favoriteHandler(id)}}
                >
                    {favorite ? "Remove from Favorite" : "Add to Favorite"}
                </button>
                <button
                    type={"button"}
                    disabled={!!buttonsDisable}
                    className={styles.deleteBtn}
                    onClick={()=>{openModal(id)}}
                >
                    Delete
                </button>
            </div>
        </div>
        </>
    );
};

export default RecipeCard;