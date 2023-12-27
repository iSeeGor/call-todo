import TableFilter from '../TableFilter/TableFilter.jsx';
import TableCallTodos from '../Table/TableCallTodos.jsx';

const SectionCallTodos = () => {
  return (
    <>
      <section className="section">
        <header className="section__header">
          <h2 className="section__title">List of calls</h2>
        </header>
        <TableCallTodos />

        <TableFilter />
      </section>
    </>
  );
};

export default SectionCallTodos;
