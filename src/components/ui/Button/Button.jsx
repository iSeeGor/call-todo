import classes from "./Button.module.css";

const Button = ({children, buttonVariant, filterName, onClick, ...attr}) => {
    const variant = buttonVariant ? buttonVariant : 'default';

    return (
        <>
         <button
             className={`${classes.Button} ${classes['Button__' + variant]}`}
             onClick={() => onClick(filterName)}
             {...attr}
         >
             {children}
         </button>
        </>
    );
};

export default Button;