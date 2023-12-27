import inputs from './config.js';
import Input from '../ui/Input/Input';
import { useSelector } from 'react-redux';
import { timeFromTimestamp } from '../../helpers/time.js';
import { useNextCall } from '../../hooks/useNextCall.js';

const SectionNextCall = () => {
  const callTodos = useSelector((state) => state.callTodos.list);
  const nextCall = useNextCall(callTodos);

  return (
    <section className="app-section app-section--nextcall" style={{ paddingBottom: '75px' }}>
      <header className="app-section__header">
        <h2 className="app-section__title">Next Call</h2>
      </header>

      <form className="call-todo-form">
        <div className="call-todo-form__body">
          {inputs.map((input, i) => {
            const { name } = input;
            let value = '-';

            if (nextCall && nextCall[name] !== undefined) {
              value = name === 'time' ? timeFromTimestamp(nextCall[name]) : nextCall[name];
            }

            return <Input key={i} {...input} value={value} readOnly />;
          })}
        </div>
      </form>
    </section>
  );
};

export default SectionNextCall;
