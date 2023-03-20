import React, {useEffect, useState} from 'react';
import RecipeCard from "../../components/molecules/RecipeCard";
import * as service from '../../services/services'
import CreateRecipe from "../../components/organisms/modals/CreateRecipe";


const RecipesList = () => {

    const [modalCreateRecipe, setModalCreateRecipe] = useState(false)
    const [recipes, setRecipes] = useState([])
    // const [error, setError] = useState([])

    //get all recipes
    useEffect(() => {
        service.getAll()
            .then(response => {
                setRecipes(response.results)
            })
    }, [])


    const openModal = () => {
        setModalCreateRecipe(true)
    }

    //delete recipes
    const onDeleteRecipe = async (recipeId) => {
        // Delete from server
        await service.deleteRecipe(recipeId);

        // Delete from state
        setRecipes(data => data.filter(recipes => recipes.id !== recipeId));
    };


    //add recipes
    const onCreateRecipeSubmit = async (newRecipeResponse) => {
        try{
        await service.create(newRecipeResponse)
            const allRecipes = await service.getAll()
        setRecipes(allRecipes.results)

        } catch (err) {
        console.log("Errors",err)
        }

    }


    return (
        <div>
            <button onClick={openModal}>Create Recipe</button>
            {/*{!recipes && <div>Loading...</div>}*/}
            {recipes?.length === 0 && (<h3>No recipes </h3>)}
            {recipes?.length > 0 && recipes.map(recipe =>

                <div key={recipe.id}>
                    <RecipeCard
                        onDeleteRecipe={onDeleteRecipe}
                        {...recipe}
                    />
                </div>)}
            {modalCreateRecipe && <CreateRecipe onCreateRecipeSubmit={onCreateRecipeSubmit} ingredients={recipes.ingredients}/>}
        </div>
    );
};

export default RecipesList;