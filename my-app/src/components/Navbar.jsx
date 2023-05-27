
import { NavLink, Link } from 'react-router-dom'

function Navbar(){
    return(
        <>
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/projects">Project</Link></li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar