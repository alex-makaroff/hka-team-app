import './button.css'
import {Link} from "react-router-dom";

const Button = (props) => {



    let styles = {
        width: `${props.width}px`,
        height: `${props.height}px`,
        fontSize: `${props.fontSize}px`,
        borderRadius: `${props.borderRadius}px`,
        marginBottom: `${props.marginBottom}px`,
        backgroundSize: `${props.width}px`

    }

    const buttonTypeSettings = (buttonType) => {
        if(buttonType === 'active') {
            return {className:'active', disabled:false}
        }
        if(buttonType === 'using') {
            return {className:'using', disabled:true}
        }
        if(buttonType === 'disable') {
            return {className:'disable', disabled:true}
        }
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

    if (props.href) {
        return(
            <>
                <a href={props.href} style={{textDecoration: 'none'}}>
                    <button style={styles} className="button">
                        {props.text}
                    </button>
                </a>
            </>
        )
    }

    if (props.setModalActive) {
        return(
            <>
                <button onClick={() => props.setModalActive(!props.modalActive)} style={styles} className="button">
                    {props.text}
                </button>
            </>
        )
    }

    if (props.onClick) {
        return(
            <>
                <button disabled={props.buttonType ? buttonTypeSettings(props.buttonType).disabled : false} onClick={props.onClick} style={styles} className={props.buttonType ? `button ${buttonTypeSettings(props.buttonType).className}` : "button"}>
                    {props.text}
                </button>
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
