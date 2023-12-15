import Input from "../ui/Input/Input";
import {useState} from "react";
import { timeToTimestamp} from '../../helpers/time.js'
import { preparePhone } from "../../helpers/preparePhone";

const SectionAddCall = ({addCall}) => {
    const emptyField = {
        name: '',
        phone: '',
        time: ''
    }
    const [inputField, setInputField] = useState(emptyField);

    const handleInvalid = (event) => {
        event.preventDefault();
        // console.log(event)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.target);
        const timestamp = timeToTimestamp(data.get('time'));
        const phone = data.get('phone');


        data.set('time', timestamp.toString());
        data.set('phone', preparePhone(phone));

        addCall({...Object.fromEntries(data.entries())});

        setInputField(emptyField);
    }

    const onChange = (e) => {
        setInputField({...inputField, [e.target.name]: e.target.value});
    }

    return (
        <>
            <section className="app-section">
                <header className="app-section__header">
                    <h2 className="app-section__title">Add Call</h2>
                </header>

                <form className="call-todo-form" onSubmit={handleSubmit} onInvalid={handleInvalid}>
                    <div className="call-todo-form__body">
                        <Input
                            label="Name"
                            type="text"
                            name="name"
                            placeholder="John"
                            pattern="^[A-Za-z0-9]{3,30}$"
                            errorMessage="Name should be 3-30 characters"
                            value={inputField.name}
                            onChange={onChange}
                        />

                        <Input
                            label="Phone"
                            type="text"
                            name="phone"
                            placeholder="+x(xxx)xxx xxx xxx"
                            pattern="^(\+|00)(\(?\d{3}\)?-?)(\s?\d{3}){3}$"
                            errorMessage="Enter a valid phone number"
                            value={inputField.phone}
                            onChange={onChange}
                        />

                        <Input
                            label="Time"
                            type="time"
                            name="time"
                            placeholder="Time"
                            errorMessage="Chouse a time"
                            value={inputField.time}
                            onChange={onChange}
                        />
                    </div>

                    <div className="call-todo-form__footer">
                        <button
                            type="submit"
                            className="button"
                        >Add Call</button>
                    </div>
                </form>
            </section>
        </>
    )
};

export default SectionAddCall;