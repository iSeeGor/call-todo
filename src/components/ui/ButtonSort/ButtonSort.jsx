import classes from './ButtonSort.module.css';

const ButtonSort = ({ children, sortType, sortOptions, buttonSortHandler }) => {
  const { sortby, order } = sortOptions;
  const isActive = sortby && sortby === sortType;
  const arrows = {
    asc: '\u2BC5',
    desc: '\u2BC6',
  };

  const onClick = () => {
    buttonSortHandler({ sortby: sortType });
  };

  return (
    <>
      <button type="button" className={classes.ButtonSort} onClick={onClick}>
        {children}

        {isActive ? arrows[order] : ' '}
      </button>
    </>
  );
};

export default ButtonSort;
