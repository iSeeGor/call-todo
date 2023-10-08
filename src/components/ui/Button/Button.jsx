import classes from "./Button.module.css";

const Button = ({children, buttonVariant, ...attr}) => {
    const variant = buttonVariant ? buttonVariant : 'default';

    return (
        <>
         <button
             className={`${classes.Button} ${classes['Button__' + variant]}`}
             {...attr}
         >
             {children}
         </button>
        </>
    );
};

export default Button;