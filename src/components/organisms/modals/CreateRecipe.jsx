import React, {useState} from 'react';
import styles from "./CreateRecipe.module.css"
import Input from "../../atom/fields/Input";

const CreateRecipe = ({onCreateRecipeSubmit,setModalCreateRecipe}) => {

    const [title, setTitle] = useState('')
    const [duration, setDuration] = useState(0)
    const [description, setDescription] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [image, setImage] = useState('')


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
        setImage(e.target.value)
    }

    const onChangeIngredients = (e) => {
        setIngredients(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const data = {title, image, description, duration, ingredients}
        onCreateRecipeSubmit(data)
    }

    return (
        <section className={styles.overlay}>
            <form className={styles.form} onSubmit={onSubmit}>
                <div className={styles.formContainer}>
                    <h1>Create Recipe</h1>
                    <div className={styles.flexGroup}>
                        <div className={styles.flex}>
                            <label htmlFor="title">Name:</label>
                            <Input value={title}
                                   onChange={onChangeTitle}
                                   type="text"
                                   id='title'
                                   name="title"
                                   placeholder="Enter recipe Name"/>
                        </div>
                        <div className={styles.flex}>
                            <label htmlFor="duration">Duration:</label>
                            <Input value={duration}
                                   customStyles={styles.duration}
                                   onChange={onChangeDuration}
                                   type="number"
                                   id='duration'
                                   name="duration"
                                   placeholder="Enter duration"/>
                        </div>
                    </div>
                    <label htmlFor="img">Photo</label>
                    <Input
                        customStyles={styles.photo}
                        onChange={onChangeImg}
                        type="text"
                        id='img'
                        name="img"
                        placeholder="Photo Url..."/>
                    <label htmlFor="description">Description</label>
                    <textarea value={description}
                              onChange={onChangeDescription}
                              cols="36"
                              rows="5"
                              className={styles.textArea}
                              id='description'
                              name="description"
                              placeholder="Description"/>
                    <label htmlFor="ingredients">Ingredients</label>
                    <textarea value={ingredients}
                              cols="36"
                              rows="5"
                              className={styles.textArea}
                              onChange={onChangeIngredients}
                              id='ingredients'
                              name="ingredients"
                              placeholder="Ingredients: 1.. 2.. 3... 4..."/>
                    <div className={styles.flexGroup}>
                        <input type="submit" className={styles.buttonCreate}  value="Create"/>
                        <input type="button" onClick={()=>{setModalCreateRecipe(false)}} className={styles.buttonCancel} value="Cancel"/>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default CreateRecipe;