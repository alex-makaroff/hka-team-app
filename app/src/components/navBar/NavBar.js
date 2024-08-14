import './navBar.css'
import {Link} from "react-router-dom";


const NavBar = (props) => {
    return(
        <div className="navbar-container">
            <Link to="/">
                <img src={props.avatar} alt="Avatar"/>
            </Link>
            <Link to="/shisha">
                <img src={props.cannabis} alt="cannabis"/>
            </Link>
            <Link to="/joint">
                <img src={props.joint} alt="joint"/>
            </Link>
            <Link to="/fight">
                <img src={props.fight} alt="fight"/>
            </Link>


        </div>
    )
}

export default NavBar;
