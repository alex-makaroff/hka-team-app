import './shishaCount.css'

import shisha from '../../images/shisha.png'
import {useState} from "react";



const ShishaCount = () => {
    const [shishaCount] = useState(102)
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
