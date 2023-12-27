import { useEffect, useState } from 'react';
import Input from '../ui/Input/Input';
import { timeFromTimestamp } from '../../helpers/time.js';
import { closestTime as getClosestTime } from '../../helpers/closestTime.js';
import inputs from './config.js';

const SectionNextCall = ({ callTodos }) => {
  const [nextCall, setNextCall] = useState(null);

  const prepareNextCall = () => {
    const timestampArray = callTodos.map((obj) => obj.time);
    const closestTime = getClosestTime(timestampArray);

    return callTodos.find((obj) => obj.time === closestTime);
  };

  useEffect(() => {
    setNextCall(prepareNextCall());

    const interval = setInterval(() => {
      setNextCall(prepareNextCall());
    }, 30000);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callTodos]);

  return (
    <>
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
    </>
  );
};

export default SectionNextCall;
