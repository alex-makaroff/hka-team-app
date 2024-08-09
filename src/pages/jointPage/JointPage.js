import './jointPage.css'

import NavBar from "../../components/navBar/NavBar";
import ShishaCount from "../../components/shishaCount/ShishaCount";
import Jerremy from "../../components/jerremy/Jerremy";

import avatar from '../../images/avatar.png'
import cannabis from '../../images/cannabis.png'
import jointGreen from '../../images/joint-green.png'
import fight from '../../images/fight.png'

import Button from "../../components/button/Button";
import {useState} from "react";


const JointPage = () => {



    const [frameNumber, setFrameNumber] = useState(1);

    function name() {
        if (frameNumber < 3) {
            setFrameNumber(frameNumber + 1);
        }
    }

    return(
        <>
            <div className="joint-page-container">

                <div className="joint-page-content">
                    <ShishaCount/>
                    <div className="jerremy-container">
                        <Jerremy
                            frameNumber={frameNumber}
                        />
                        <Button
                            width={230}
                            height={55}
                            fontSize={35}
                            text={'дунуть'}
                            borderRadius={20}
                            onClick={name}
                        />
                    </div>
                </div>

                <NavBar
                    avatar={avatar}
                    cannabis={cannabis}
                    joint={jointGreen}
                    fight={fight}
                />
            </div>

        </>
    )
}

export default JointPage;
