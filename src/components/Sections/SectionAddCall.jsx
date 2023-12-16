import Input from '../ui/Input/Input';
import { useState } from 'react';
import { timeToTimestamp } from '../../helpers/time.js';
import { preparePhone } from '../../helpers/preparePhone';

const SectionAddCall = ({ addCall }) => {
  const emptyField = {
    name: '',
    phone: '',
    time: '',
  };
  const [inputValues, setinputValues] = useState(emptyField);

  const handleInvalid = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const timestamp = timeToTimestamp(data.get('time'));
    const phone = data.get('phone');

    data.set('time', timestamp.toString());
    data.set('phone', preparePhone(phone));

    addCall({ ...Object.fromEntries(data.entries()) });

    setinputValues(emptyField);
  };

  const updateInputValue = (e) => {
    setinputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const inputs = [
    {
      label: 'Name',
      name: 'name',
      placeholder: 'John',
      type: 'text',
      pattern: '^[A-Za-z0-9]{3,30}$',
      errorMessage: 'Name should be 3-30 characters',
    },
    {
      label: 'Phone',
      name: 'phone',
      placeholder: 'xx(xxx)xxx xxx xxx',
      type: 'text',
      pattern: '^(\\+|00)(\\(?\\d{3}\\)?-?)(\\s?\\d{3}){3}$',
      errorMessage: 'Enter a valid phone number',
    },
    {
      label: 'Time',
      name: 'time',
      type: 'time',
      errorMessage: 'Chouse a time',
    },
  ];

  return (
    <>
      <section className="app-section">
        <header className="app-section__header">
          <h2 className="app-section__title">Add Call</h2>
        </header>

        <form className="call-todo-form" onSubmit={handleSubmit} onInvalid={handleInvalid}>
          <div className="call-todo-form__body">
            {inputs.map((input, i) => {
              const { name } = input;
              return <Input key={i} {...input} value={inputValues[name]} updateInputValue={updateInputValue} />;
            })}
          </div>

          <div className="call-todo-form__footer">
            <button type="submit" className="button">
              Add Call
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default SectionAddCall;
