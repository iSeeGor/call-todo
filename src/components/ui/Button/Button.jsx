import classes from "./Button.module.css";

const Button = ({children, buttonVariant, onClick, isActive, filterName, ...attr}) => {
    const variant = buttonVariant ? buttonVariant : 'default';

    return (
        <>
         <button
             className={`${classes.Button} ${classes['Button__' + variant]} ${isActive ? classes.active : ''}`}
             onClick={() => {
                 onClick({
                    'filter': filterName,
                 })
             }}
             {...attr}
         >
             {children}
         </button>
        </>
    );
};

export default Button;