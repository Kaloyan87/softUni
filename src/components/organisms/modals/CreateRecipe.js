import React, {useState} from 'react';

const CreateRecipe = ({onCreateRecipeSubmit}) => {

    const [title, setTitle] = useState('')
    const [duration, setDuration] = useState(0)
    const [description, setDescription] = useState('')
    const [ingredients, setIngredients] = useState([{
        title: '1',
        quantity: 2,
        unit: '3'
    }])
    const [img, setImg] = useState('')


    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const onChangeDuration = (e) => {
        setDuration(e.target.value)
    }
    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    const onChangeImg = (e) => {
        setImg(e.target.value)
    }

    const addIngredientHandler = () => {
        setIngredients({
            title: '',
            quantity: 0,
            unit: ''
        })
    }

    const onChangeIngredients = (e, index, ingredientKey) => {
        ingredients[index] = {...ingredients[index], [ingredientKey]: e.target.value}
        setIngredients(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const data = {
            title,
            img,
            description,
            duration,
            ingredients
        }
        onCreateRecipeSubmit(data)
    }

    return (
        <section>
            <form id='create' onSubmit={onSubmit}>
                <div>
                    <h1>Create Recipe</h1>
                    <label htmlFor="title"></label>
                    <input value={title}
                           onChange={onChangeTitle}
                           type="text"
                           id='title'
                           name="title"
                           placeholder="Enter recipe Name"/>

                    <label htmlFor="duration"></label>
                    <input value={duration}
                           onChange={onChangeDuration}
                           type="number"
                           id='duration'
                           name="duration"
                           placeholder="Enter duration"/>

                    <label htmlFor="img"></label>
                    <input
                        onChange={onChangeImg}
                        type="text" id='img'
                        name="img"
                        placeholder="Upload a photo.."/>

                    {ingredients?.length > 0 && ingredients.map((ingredient, index) => (
                        <Ingredients key={index}
                                     index={index}
                                     ingredient={ingredient}
                                     onChangeHandler={onChangeIngredients}/>
                    ))}
                    <input type="button" value={"add+"} onClick={addIngredientHandler}></input>
                    <label htmlFor="description"></label>
                    <textarea value={description}
                              onChange={onChangeDescription}
                              id='description'
                              name="description"
                              placeholder="Description"/>

                    <input type="submit" value="Create"/>
                    <input type="button" value="Cancel"/>
                </div>
            </form>
        </section>
    );
};

export default CreateRecipe;


const Ingredients = ({ingredient, onChangeHandler, index}) => {
    return (
        <>
            <div id="ingredients">
                <h3>Ingredients</h3>
                <label htmlFor="ingredientTitle"></label>
                <input value={ingredient.title}
                       onChange={(e) => {
                           onChangeHandler(e, index, "title")
                       }}
                       type="text"
                       id='title'
                       name="ingredient.title"
                       placeholder="Title"/>

                <label htmlFor="quantity"></label>
                <input value={ingredient.quantity}
                       onChange={(e) => {
                           onChangeHandler(e, index, 'quantity')
                       }}
                       type="number"
                       id='quantity'
                       name="quantity"
                       placeholder="Quantity"/>

                <label htmlFor="unit"></label>
                <input value={ingredient.unit}
                       onChange={(e) => {
                           onChangeHandler(e, index, "unit")
                       }}
                       type="text"
                       id='unit'
                       name="unit"
                       placeholder="Unit"/>
            </div>
        </>
    )
}