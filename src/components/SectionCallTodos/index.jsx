import TableCallTodosRow from '../Table/TableCallTodosRow';
import ButtonSort from '../ui/ButtonSort/ButtonSort.jsx';
import Button from '../ui/Button/Button.jsx';
import { useState } from 'react';
import { useQuery } from '../../helpers/useQuery.js';
import { useEffect } from 'react';
import filterButtons from './config.js';

const SectionCallTodos = ({ callTodos, delCall }) => {
  const [options, setOptions] = useState({});

  const [sortedTodos, sortOptions] = useQuery(callTodos, options);

  const filterButtonHandler = (data) => {
    setOptions({ filter: data.filter });
  };

  const buttonSortHandler = (data) => {
    const order = options.order === 'asc' ? 'desc' : 'asc';

    setOptions({ sortby: data.sortby, order: order });
  };

  useEffect(() => {
    setOptions(sortOptions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section className="section">
        <header className="section__header">
          <h2 className="section__title">List of calls</h2>
        </header>

        <table className="table">
          <tbody>
            <tr>
              <th>
                <ButtonSort sortType="name" sortOptions={options} buttonSortHandler={buttonSortHandler}>
                  Name
                </ButtonSort>
              </th>
              <th>Phone</th>
              <th>
                <ButtonSort sortType="time" sortOptions={options} buttonSortHandler={buttonSortHandler}>
                  Time
                </ButtonSort>
              </th>
              <th>Action</th>
              <th>Finished</th>
            </tr>

            {sortedTodos && sortedTodos.length > 0 ? (
              sortedTodos.map((item, index) => <TableCallTodosRow key={index} data={item} delCall={delCall} />)
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center' }}>
                  No calls available
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="table-control">
          {filterButtons.map((button, i) => {
            return (
              <Button
                key={i}
                onClick={filterButtonHandler}
                filterName={button.name}
                buttonVariant="outline"
                type="button"
                isActive={options.filter === button.name}
              >
                {button.title}
              </Button>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default SectionCallTodos;
