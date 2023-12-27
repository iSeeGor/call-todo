import TableCallTodosRow from './TableCallTodosRow.jsx';
import { useSelector } from 'react-redux';
import { sortAndFilter } from '../../helpers/sortAndFilter';
import TableHead from './TableHead.jsx';

function TableCallTodos() {
  const { callTodos, filter, sortby, order } = useSelector((state) => {
    return {
      callTodos: state.callTodos.list,
      filter: state.filter.value,
      order: state.sorting.order,
      sortby: state.sorting.sortby,
    };
  });

  const sortedTodos = sortAndFilter(callTodos, { filter, order, sortby });

  return (
    <table className="table">
      <TableHead />

      <tbody>
        {sortedTodos && sortedTodos.length > 0 ? (
          sortedTodos.map((item, index) => <TableCallTodosRow key={index} data={item} />)
        ) : (
          <tr>
            <td colSpan="5" style={{ textAlign: 'center' }}>
              No calls available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default TableCallTodos;
