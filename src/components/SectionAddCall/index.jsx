import Input from '../ui/Input/Input.jsx';
import { useState } from 'react';
import { timeToTimestamp } from '../../helpers/time.js';
import { preparePhone } from '../../helpers/preparePhone.js';
import formFields from './config.js';

const SectionAddCall = ({ addCall }) => {
  const [inputValues, setInputValues] = useState({});

  const handleInvalid = (event) => {
    event.preventDefault();
  };

  const resetFormFields = () => {
    for (let key in inputValues) {
      // eslint-disable-next-line no-prototype-builtins
      if (inputValues.hasOwnProperty(key)) {
        inputValues[key] = '';
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const timestamp = timeToTimestamp(data.get('time'));
    const phone = data.get('phone');

    data.set('time', timestamp.toString());
    data.set('phone', preparePhone(phone));

    const fields = Object.fromEntries(data.entries());

    addCall({ ...fields });

    resetFormFields();
  };

  const updateInputValue = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section className="app-section">
        <header className="app-section__header">
          <h2 className="app-section__title">Add Call</h2>
        </header>

        <form className="call-todo-form" onSubmit={handleSubmit} onInvalid={handleInvalid}>
          <div className="call-todo-form__body">
            {formFields.map((input, i) => {
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
