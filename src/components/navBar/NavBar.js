import './navBar.css'


const NavBar = (props) => {
    return(
        <div className="navbar-container">
            <img src={props.avatar} alt="Avatar" />
            <img src={props.cannabis} alt="cannabis" />
            <img src={props.joint} alt="joint" />
            <img src={props.fight} alt="fight" />
        </div>
    )
}

export default NavBar;
