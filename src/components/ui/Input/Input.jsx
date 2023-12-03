import classes from './Input.module.css'
import {useState} from "react";

const Input = ({errorMessage, onChange, ...attrs}) => {

    const [errorMsg, setErrorMsg] = useState('');
    const [invalid, setInvalid] = useState(false);

    const validate = ({target}) => {
        setInvalid(!target.validity.valid)

        if ( target.validity.valueMissing ) {
            setErrorMsg('This field is required')
        }

        if ( target.validity.patternMismatch ) {
            setErrorMsg(errorMessage)
        }
    }

    return (
        <>
            <div className={classes.InputField}>
                <input
                    className={`${classes.Input} ${invalid ? classes.invalid : ''}`}
                    // focused={focused.toString()}
                    // onBlur={() => setIsInvalid(false)}
                    {...attrs}
                    required
                    onChange={(e) => {
                        onChange(e);
                        validate(e)
                    } }
                    onInvalid={validate}
                />
                {
                    invalid
                        ? <span className={classes.InputError}>{errorMsg}</span>
                        : false
                }
            </div>
        </>
    );
}

export default Input;