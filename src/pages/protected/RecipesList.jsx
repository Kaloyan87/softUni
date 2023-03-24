import React, {useEffect, useState} from 'react';
import RecipeCard from "../../components/molecules/RecipeCard";
import CreateRecipe from "../../components/organisms/modals/CreateRecipe";
import * as service from '../../services/services-recipes'
import styles from './RecipesList.module.css'
import Header from "../../components/organisms/layout/Header";
import ModalDelete from "../../components/organisms/modals/ModalDelete";


const RecipesList = () => {

    const [modalCreateRecipe, setModalCreateRecipe] = useState(false)
    const [modalDelete, setModalDelete] = useState(false)
    const [recipeForDelete, setRecipeForDelete] = useState('')
    const [recipes, setRecipes] = useState([])


    //get all recipes
    useEffect(() => {
        service.getAll()
            .then(response => {
                setRecipes(response.results)
            })
    }, [])


    const openModalCreate = () => {
        setModalCreateRecipe(true)
    }

    const openModal = (id) => {
        setModalDelete(true)
        setRecipeForDelete(id)
    }

    const onDeleteRecipeId = (id) => {
        setRecipeForDelete(id)
    }

    const onClose = () => {
        setModalDelete(false)
        setModalCreateRecipe(false)
    }

    //delete recipes
    const onDeleteRecipe = async (recipeId) => {
        // Delete from server
        await service.deleteRecipe(recipeId);

        // Delete from state
        setRecipes(data => data.filter(recipes => recipes.id !== recipeId));
        setModalDelete(false);
    };


    //add recipes
    const onCreateRecipeSubmit = async (newRecipeResponse) => {
        try {
            await service.create(newRecipeResponse)

            const allRecipes = await service.getAll()
            setRecipes(allRecipes.results)
            setModalDelete(false)
        } catch (err) {
            console.log("Errors", err)
        }
    }

    return (
        <>
            {modalCreateRecipe &&
                <CreateRecipe
                    onClose={onClose}
                    onCreateRecipeSubmit={onCreateRecipeSubmit}
                    setModalCreateRecipe={setModalCreateRecipe}
                />}
            {modalDelete &&
                <ModalDelete
                    idForDelete={recipeForDelete}
                    onClose={onClose}
                    onDeleteRecipe={onDeleteRecipe}/>}

            <Header/>

            <h1 className={styles.recipesListTitle}>Your Recipes</h1>
            <button className={styles.openCreateForm} onClick={openModalCreate}>
                Create Recipe
            </button>

            <div className={styles.recipeCardContainer}>
                {recipes?.length === 0 && (<h3>No recipes </h3>)}
                {recipes?.length > 0 && recipes.map(recipe =>
                    <RecipeCard
                        key={recipe.id}
                        openModal={openModal}
                        onDeleteRecipeId={onDeleteRecipeId}
                        {...recipe}
                    />
                )}
            </div>
        </>
    );
};

export default RecipesList;