import { useState } from "react"
import Header from "../components/Header"
import { useDispatch } from "react-redux"
import { addRecipe } from "../features/recipes"

function AddRecipe() {
    const [formData, setFormData] = useState({
        name: '',
        cuisine: "",
        imageURL: "",
        ingredients: "",
        instructions: ""
    })

    const dispatch = useDispatch()

    function onChangeHandler(e) {
        const { name, value } = e.target

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function onSubmitHandler(e) {
        e.preventDefault()
        formData.ingredients = formData.ingredients.split(" ")
        formData.instructions = formData.instructions.split(" ")

        dispatch(addRecipe(formData))
        setFormData({
            name: '',
            cuisine: "",
            imageURL: "",
            ingredients: "",
            instructions: ""
        })
    }

    return (
        <>
            <Header />
            <main className="container">
                <h2 className="mt-4">Add Recipe</h2>
                <section>
                    <form onSubmit={onSubmitHandler}>
                        <label htmlFor="name">Name:</label>
                        <br />
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <br />
                        <label htmlFor="cuisine">Cuisine Type:</label>
                        <br />
                        <input
                            type="text"
                            name="cuisine"
                            id="cuisine"
                            value={formData.cuisine}
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <br />
                        <label htmlFor="imageURL">Image Link:</label>
                        <br />
                        <input
                            type="text"
                            name="imageURL"
                            id="imageURL"
                            value={formData.imageURL}
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <br />
                        <label htmlFor="ingredients">Ingredients:</label>
                        <br />
                        <textarea
                            rows={3}
                            cols={25}
                            type="text"
                            name="ingredients"
                            id="ingredients"
                            value={formData.ingredients}
                            onChange={(e) => onChangeHandler(e)}
                        ></textarea>
                        <br />
                        <label htmlFor="instructions">Instructions:</label>
                        <br />
                        <textarea
                            rows={3}
                            cols={25}
                            type="text"
                            name="instructions"
                            id="instructions"
                            value={formData.instructions}
                            onChange={(e) => onChangeHandler(e)}>
                        </textarea>

                        <br />
                        <br />
                        <button className="btn btn-primary">Submit</button>
                    </form>
                </section>
            </main>
        </>
    )
}

export default AddRecipe