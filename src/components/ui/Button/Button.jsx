import classes from "./Button.module.css";

const Button = ({children, buttonVariant, filterName, getFilterName, ...attr}) => {
    const variant = buttonVariant ? buttonVariant : 'default';

    return (
        <>
         <button
             className={`${classes.Button} ${classes['Button__' + variant]}`}
             onClick={() => getFilterName(filterName)}
             {...attr}
         >
             {children}
         </button>
        </>
    );
};

export default Button;