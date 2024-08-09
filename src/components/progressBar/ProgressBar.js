import React, { useState } from 'react';
import './ProgressBar.css'; // Вынесем стили в отдельный CSS файл

const ProgressBar = (props) => {

    const [ height, setHeight ] = useState(100);
     const onClick = () => {
        if (height > 0) {
             setHeight(height - 1);
             props.setScore(props.score + 1);
        }
    }
    const styles = { height: `${height}%`}

    return (
        <div onClick={onClick} className="progress-bar-container">
            <div className="progress-container">
                <div  className="progress-clear"></div>

                {height ? <div style={styles} className="progress-black"></div> :
                    <div className="progress-black">
                        <div className='test'>
                            8:00:00
                        </div>
                    </div>
                }

            </div>
        </div>


    );
};

export default ProgressBar;
