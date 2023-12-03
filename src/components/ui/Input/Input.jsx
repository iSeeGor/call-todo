import classes from './Input.module.css'
import {useState} from "react";

const Input = ({errorMessage, ...attrs}) => {

    const [focused, setFocused] = useState(false);

    const handleFocus = (e) => {
        setFocused(true)
    }

    return (
        <>
            <div className={classes.InputField}>
                <input
                    className={classes.Input}
                    focused={focused.toString()}
                    onBlur={handleFocus}
                    {...attrs}
                    required
                />
                <span className={classes.InputError}>{errorMessage ? errorMessage : 'This field is required'}</span>
            </div>
        </>
    );
}

export default Input;