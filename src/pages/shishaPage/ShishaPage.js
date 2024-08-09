import './shishaPage.css'

import ProgressBar from "../../components/progressBar/ProgressBar";
import NavBar from "../../components/navBar/NavBar";

import avatar from '../../images/avatar.png'
import cannabisGreen from '../../images/cannabis-green.png'
import joint from '../../images/joint.png'
import fight from '../../images/fight.png'

import ShishaCount from "../../components/shishaCount/ShishaCount";

import {useState} from "react";



const ShishaPage = () => {

    const [score, setScore] = useState(0);

    return(
        <>
            <div className="shisha-page-container">
                <div className="shisha-page-content">
                    <ShishaCount/>

                    <ProgressBar
                        setScore={setScore}
                        score={score}
                    />

                    <div className="score">
                        {score}/100
                    </div>
                </div>

                <NavBar
                    avatar={avatar}
                    cannabis={cannabisGreen}
                    joint={joint}
                    fight={fight}
                />
            </div>

        </>
    )
}

export default ShishaPage;
