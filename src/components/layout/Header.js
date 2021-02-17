import React from 'react'
import {Link} from 'react-router-dom' // Link instead of <a> to not refresh page


// regular navbar
const Header = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="#">Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/hooks">Hooks</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/classes">Classes</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link disabled" to="#">Disabled</Link>
                </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Header