import classes from './TableFilter.module.css';
import filterButtons from './config.js';
import Button from '../ui/Button/Button.jsx';
import { changeFilter } from '../../features/filter/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

function TableFilter() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.value);

  return (
    <div className={classes.TableFilter}>
      {filterButtons.map(({ name, title, ...rest }, i) => {
        return (
          <Button key={i} {...rest} onClick={() => dispatch(changeFilter(name))} isActive={filter === name}>
            {title}
          </Button>
        );
      })}
    </div>
  );
}

export default TableFilter;
