import React, {useEffect, useState} from 'react';
import * as service from "../../services/services-recipes";
import RecipeCard from "./RecipeCard";
import styles from './FavoriteRecipes.module.css'

const FavoriteRecipes = () => {

    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        service.getAllFavorite()
            .then(response => {
                setFavorites(response.results)
            })
    }, [])


    return (
        <>
            <h2 className={styles.favoriteTitle}>Your Favorite Recipes</h2>
            {favorites?.length === 0 &&
                (
                    <h3 style={{textAlign: "center"}}>
                        No Favorite Recipes
                    </h3>
                )}
            <div className={styles.favoriteContainer}>
                {favorites.map(favorite => <RecipeCard buttonsDisable={true} key={favorite.id} {...favorite}/>)}
            </div>
        </>
    );
};

export default FavoriteRecipes;