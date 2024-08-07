import React, { useState } from 'react';
import './ProgressBar.css'; // Вынесем стили в отдельный CSS файл

const ProgressBar = (props) => {

    const [ height, setHeight ] = useState(100);
    const onClick = e => setHeight(height - 1);
    const styles = { height: `${height}%` };


    return (
        <div onClick={onClick} className="progress-bar-container">
            <div className="progress-container">

                <div  className="progress-clear"></div>
                <div style={styles} className="progress-black"></div>
            </div>
        </div>


    );
};

export default ProgressBar;
