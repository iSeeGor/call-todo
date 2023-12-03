import Input from "./ui/Input/Input";
import {useState} from "react";
import { timeToTimestamp} from '../helpers/time.js'

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

        data.set('time', timestamp.toString());

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
                            type="text"
                            name="name"
                            placeholder="Name"
                            pattern="^[A-Za-z0-9]{3,30}$"
                            errorMessage="Name should be 3-30 characters"
                            value={inputField.name}
                            onChange={onChange}
                        />

                        <Input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            pattern="^(00|\+)\d{2}\([\d]{6,8}\)\d{2,4}|\+[\d]{10,12}$"
                            errorMessage="Enter a valid phone number"
                            value={inputField.phone}
                            onChange={onChange}
                        />

                        <Input
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