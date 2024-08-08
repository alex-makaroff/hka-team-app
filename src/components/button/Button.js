import './button.css'
import {Link} from "react-router-dom";

const Button = (props) => {

    const styles = {
        width: `${props.width}px`,
        height: `${props.height}px`,
        fontSize: `${props.fontSize}px`,
        borderRadius: `${props.borderRadius}px`,
        marginBottom: `${props.marginBottom}px`,
        backgroundSize: `${props.backgroundSize}px`

    }

    if (props.link) {
        return(
            <>
                <Link to={props.link} style={{textDecoration: 'none'}}>
                    <button style={styles} className="button">
                        {props.text}
                    </button>
                </Link>
            </>
        )
    }
    return(
        <>
            <button style={styles} className="button">
                {props.text}
            </button>
        </>
    )


}

export default Button;

//{{width: {props.with} {heigth: {props.height}}
