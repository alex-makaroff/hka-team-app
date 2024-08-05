import './button.css'

const Button = (props) => {

    const styles = {
        width: `${props.width}px`,
        height: `${props.height}px`,
        fontSize: `${props.fontSize}px`,
        borderRadius: `${props.borderRadius}px`
    }

    return(
        <button style={styles} className="button">
            {props.text}
        </button>
    )
}

export default Button;

//{{width: {props.with} {heigth: {props.height}}
