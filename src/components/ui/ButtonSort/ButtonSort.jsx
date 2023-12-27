import classes from './ButtonSort.module.css';

const ButtonSort = ({ children, order, isActive, ...props }) => {
  const arrows = {
    asc: '\u2BC5',
    desc: '\u2BC6',
  };

  return (
    <button type="button" className={classes.ButtonSort} {...props}>
      {children}

      {isActive ? arrows[order] : ' '}
    </button>
  );
};

export default ButtonSort;
