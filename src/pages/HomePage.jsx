import { useEffect, useState } from "react"
import useFetch from "../hooks/useFetch"
import { FETCH_ALL_RECIPE_API } from "../utils/apis"
import { useDispatch, useSelector } from "react-redux";
import { deleteRecipe, fetchRecipes, searchRecipe } from "../features/recipes";
import { Link } from "react-router";

function HomePage() {

    const { recipes, status, error } = useSelector(state => state.recipe)
    const dispatch = useDispatch()
    const [recipeName, setRecipeName] = useState({ name: "" })

    useEffect(() => {
        dispatch(fetchRecipes())
    }, [])

    function onChangeHandler(e) {
        const { value, name } = e.target

        setRecipeName(({
            [name]: value
        }))
    }

    function searchHandler(e) {
        e.preventDefault()


        dispatch(searchRecipe(recipeName.name))
        setRecipeName({ name: "" })
    }

    return (
        <>
            <main className="container">
                <section>
                    <form onSubmit={searchHandler} className="mt-3 " style={{ maxWidth: "50%", }}>
                        <div className="form-floating mb-3">
                            <input type="text"
                                className="form-control"
                                id="floatingInput"
                                name="name"
                                onChange={(e) => onChangeHandler(e)}
                                value={recipeName.name}
                                placeholder="search"
                            />
                            <label htmlFor="floatingInput">Search by recipe name...</label>
                        </div>
                    </form>
                </section>

                <section>
                    <h3>All Recipe:</h3>
                    <div>
                        {status === "loading" && <div className="text-center mt-5">Loading...</div>}
                        {error && status === "error" &&
                            <div className="text-center mt-5 d-flex flex-column align-items-center justify-content-center">
                                {error}
                                <p className="btn btn-primary my-3 " onClick={()=>dispatch(fetchRecipes())}>Refresh</p>
                            </div>}

                        {
                            status == "success" &&
                            <div className="row my-4">
                                {
                                    recipes.length > 0 && (
                                        recipes.map(data => (
                                            <div key={data?._id} className="col-md-3 my-2">
                                                <div className="card">
                                                    <img src={data?.imageURL} className="card-img-top" alt={data?.name} />
                                                    <div className="card-body">
                                                        <strong className="fs-4 ">{data?.name}</strong>
                                                        <p className="m-0 mt-2 "><strong>Cuisine Type: </strong>{data?.cuisine}</p>
                                                        <p className="m-0"><strong>Ingredients: </strong>
                                                            <Link to={`/recipe/${data?._id}`}>See Recipe &gt; </Link>
                                                        </p>
                                                        <p className="m-0"><strong>Instructions: </strong>
                                                            <Link to={`/recipe/${data?._id}`}>See Recipe &gt; </Link>
                                                        </p>
                                                        <p
                                                            onClick={() => dispatch(deleteRecipe(data?._id))}
                                                            className="btn btn-danger mt-4"
                                                        >Delete</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )
                                }

                            </div>
                        }
                    </div>
                </section>
            </main>
        </>
    )

}

export default HomePage