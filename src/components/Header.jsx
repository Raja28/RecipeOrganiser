import { Link, NavLink } from "react-router-dom"

function Header() {
    return (
        <>
            <header className="bg-light">
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <Link className="navbar-brand fw-semibold" to="/">Recipe Organiser</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav  d-flex justify-content-end  w-100">
                                <li className="nav-item">
                                    <Link className='nav-link text-primary' to={"/"}>Recipes</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link text-primary' to={"/add-recipe"}>Add Recipe</Link>
                                </li>
                                {/* {
                                    navData.map(data => (
                                        <li className="nav-item" key={data.id}>
                                            <NavLink className='nav-link' to={data.url}>{data.title}</NavLink>
                                        </li>
                                    ))
                                } */}
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>

        </>
    )
}

export default Header