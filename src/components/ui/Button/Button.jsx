import classes from './Button.module.css';

const Button = ({ children, variant, isActive, ...attr }) => {
  const buttonVariant = variant ? variant : 'default';

  return (
    <button
      className={`${classes.Button} ${classes['Button__' + buttonVariant]} ${isActive ? classes.active : ''}`}
      {...attr}
    >
      {children}
    </button>
  );
};

export default Button;
