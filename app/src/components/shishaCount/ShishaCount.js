import './shishaCount.css'

import shisha from '../../images/shisha.png'
import {useEffect, useState} from "react";
import axios from "axios";
import {useTelegram} from "../../hooks/useTelegram";



const ShishaCount = () => {
    const [shishaCount, setShishaCount] = useState(0)

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


    const addShisha = () => {
        axios.post(`${process.env.REACT_APP_API_URL}/api/user/${userId}/shishaCount`)
            .then(response => {
                setShishaCount(response.data[0].shisha_count);
            })
            .catch(error => {
                console.error(error);
            });
    }

    return(
        <>
            <div className="shisha-count">
                <img onClick={addShisha} src={shisha} alt="shisha"/>
                {shishaCount}
            </div>
        </>
    )
}

export default ShishaCount;
