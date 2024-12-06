import { useSelector } from "react-redux";
import { useParams } from "react-router"
import Header from "../components/Header";


function Recipe(params) {

    const { recipes } = useSelector(state => state.recipe)
    const { recipeId } = useParams()

    const recipeIndex = recipes.findIndex(recipe => recipe?._id == recipeId)

    return (
        <>
            <Header />
            <main>
                <section className="container">
                    <div className="row ">
                        <h5 class="card-title fs-4 my-3">{recipes[recipeIndex]?.name}</h5>
                        <div className="col">
                            <div className="card mb-3" >
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={recipes[recipeIndex]?.imageURL} className="img-fluid rounded-start" alt={recipes[recipeIndex]?.name} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <p className="fs-4"><strong className="fs-4">Cuisine: </strong> {recipes[recipeIndex]?.cuisine} </p>
                                            <p className="card-text">
                                                <h4 className="fw-bold">Ingredients:</h4>
                                                {recipes[recipeIndex]?.ingredients.join(", ")}
                                            </p>
                                            <h4 className="fw-bold">Instructions:</h4>
                                            <ol className="card-text">
                                                {recipes[recipeIndex]?.instructions?.map((info, index) => (
                                                    <li key={index}>{info}</li>
                                                ))}
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Recipe