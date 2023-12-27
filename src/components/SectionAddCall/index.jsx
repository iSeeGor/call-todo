import formFields from './config.js';
import Input from '../ui/Input/Input.jsx';
import { useState } from 'react';
import { timeToTimestamp } from '../../helpers/time.js';
import { preparePhone } from '../../helpers/preparePhone.js';
import { addCall } from '../../features/callTodo/callTodoSlice';
import { useDispatch } from 'react-redux';

const SectionAddCall = () => {
  const [inputValues, setInputValues] = useState({});
  const dispatch = useDispatch();

  const handleInvalid = (event) => {
    event.preventDefault();
  };

  const resetFormFields = () => {
    const emptyValues = Object.fromEntries(Object.keys(inputValues).map((key) => [key, '']));

    setInputValues(emptyValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const timestamp = timeToTimestamp(data.get('time'));
    const phone = data.get('phone');

    data.set('time', timestamp.toString());
    data.set('phone', preparePhone(phone));

    const fields = Object.fromEntries(data.entries());

    dispatch(addCall({ ...fields }));

    resetFormFields();
  };

  const updateInputValue = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  return (
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
  );
};

export default SectionAddCall;
