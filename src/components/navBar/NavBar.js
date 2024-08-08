import './navBar.css'
import {Link} from "react-router-dom";


const NavBar = (props) => {
    return(
        <div className="navbar-container">
            <Link to="/">
                <img src={props.avatar} alt="Avatar"/>
            </Link>
            <img src={props.cannabis} alt="cannabis"/>
            <img src={props.joint} alt="joint"/>
            <img src={props.fight} alt="fight"/>
        </div>
    )
}

export default NavBar;
