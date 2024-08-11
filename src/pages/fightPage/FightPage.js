import './fightPage.css'

import man from '../../images/man.png'
import avatar from '../../images/avatar.png'
import cannabis from '../../images/cannabis.png'
import joint from '../../images/joint.png'
import fightGreen from '../../images/fight-green.png'

import NavBar from "../../components/navBar/NavBar";



const FightPage = () => {
    return(
        <div className="fight-page-container">
            <div className="fight-page-content">
                В разработке
                <img src={man} alt=""/>
            </div>
                <NavBar
                    avatar={avatar}
                    cannabis={cannabis}
                    joint={joint}
                    fight={fightGreen}
                />

        </div>
    )
}

export default FightPage;
