import { useEffect, useState } from "react"
import Header from "../components/Header"
import { useDispatch, useSelector } from "react-redux"
import { addRecipe, setError, setStatus } from "../features/recipes"

function AddRecipe() {
    const { recipes, error, status } = useSelector(state => state.recipe)

    const [formData, setFormData] = useState({
        name: '',
        cuisine: "",
        imageURL: "",
        ingredients: "",
        instructions: ""
    })

    const dispatch = useDispatch()

    useEffect(() => {
        if (status === "success") {
            dispatch(setStatus("idle"))
        }
        if (error !== null) {
            dispatch(setError())
        }
    }, [])

    function onChangeHandler(e) {
        const { name, value } = e.target

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function onSubmitHandler(e) {
        e.preventDefault()
        const { ingredients, instructions } = formData
        if (ingredients) {
            formData.ingredients = ingredients.split(",")
        }else{
            formData.ingredients = []
        }
        if (instructions) {
            formData.instructions = instructions.split(",")
        }else{
            formData.instructions = []
        }

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
                            cols={23}
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
                            cols={23}
                            type="text"
                            name="instructions"
                            id="instructions"
                            value={formData.instructions}
                            onChange={(e) => onChangeHandler(e)}>
                        </textarea>

                        <br />
                        <br />
                        <button className="btn btn-primary">Submit</button>
                        {error && status === "error" && <div className="my-2">{error}</div>}
                        {status === "success" && recipes?.length > 0 && <div className="my-2">
                            {recipes[recipes?.length - 1]?.name} Add Successfully
                        </div>}
                    </form>
                </section>
            </main>
        </>
    )
}

export default AddRecipe