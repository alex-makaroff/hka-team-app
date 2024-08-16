import './shishaCount.css'

import shisha from '../../images/shisha.png'
import {useEffect} from "react";
import axios from "axios";
import {useTelegram} from "../../hooks/useTelegram";



const ShishaCount = ({score, setScore, shishaCount, setShishaCount}) => {


    const {tgUser} = useTelegram()
    const userId = tgUser?.id || 1072604443;

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/user/${userId}/shishaCount`)
            .then(response => {
                setShishaCount(response.data[0].shisha_count);
            })
            .catch(error => {
                console.error(error);
            });
    }, [userId]);

    if (score === 1000) {
        const optimisticShishaCount = shishaCount + 1
        setShishaCount(optimisticShishaCount)

        axios.post(`${process.env.REACT_APP_API_URL}/api/user/${userId}/shishaCount`)
            .then(response => {
                setShishaCount(response.data[0].shisha_count);
            })
            .catch(error => {
                console.error(error);
            });
        setScore(0)
    }


    return(
        <>
            <div className="shisha-count">
                <img src={shisha} alt="shisha"/>
                {shishaCount}
            </div>
        </>
    )
}

export default ShishaCount;
