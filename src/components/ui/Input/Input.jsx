import classes from './Input.module.css'

const Input = (props) => {
    return (
        <>
            <input
                className={classes.Input}
                {...props}
                required
            />
        </>
    );
}

export default Input;