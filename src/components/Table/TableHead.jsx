import ButtonSort from '../ui/ButtonSort/ButtonSort.jsx';
import { changeSorting } from '../../features/sorting/sortingSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { tableHead } from './config.js';

const TableHead = () => {
  const dispatch = useDispatch();
  const { sortby, order } = useSelector((state) => state.sorting);

  const renderButton = (name) => {
    return (
      <ButtonSort
        order={order}
        isActive={sortby === name.toLowerCase()}
        onClick={() => {
          dispatch(changeSorting({ sortby: name.toLowerCase() }));
        }}
      >
        {name}
      </ButtonSort>
    );
  };

  return (
    <thead>
      <tr>
        {tableHead.map((name, index) => {
          const buttons = ['name', 'time'];

          return <th key={index}>{buttons.includes(name.toLowerCase()) ? renderButton(name) : name}</th>;
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
