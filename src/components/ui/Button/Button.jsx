import classes from "./Button.module.css";

const Button = ({children, buttonVariant, filterName, onClick, buttonHandler, isActive, ...attr}) => {
    const variant = buttonVariant ? buttonVariant : 'default';

    return (
        <>
         <button
             className={`${classes.Button} ${classes['Button__' + variant]} ${isActive ? classes.active : ''}`}
             onClick={() => {
                 onClick(filterName);
                 buttonHandler(filterName);
             }}
             {...attr}
         >
             {children}
         </button>
        </>
    );
};

export default Button;