import { Link } from 'react-router-dom';

function Navigation() {
    return(
        <nav>
            <Link to="/">Home page</Link>
            <Link to="/add-exercise">Add exercise</Link>   
        </nav>
    )
}

export default Navigation;