import Input from "./ui/Input/Input";
import {useState} from "react";
import { timeToTimestamp} from '../helpers/time.js'

const AddTodoSection = ({addCall}) => {
    const emptyField = {
        name: '',
        phone: '',
        time: ''
    }
    const [inputField, setInputField] = useState(emptyField);

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

                <form className="add-call" onSubmit={handleSubmit}>
                    <div className="add-call__body">
                        <Input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={inputField.name}
                            onChange={onChange}
                        />

                        <Input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            value={inputField.phone}
                            onChange={onChange}
                        />

                        <Input
                            type="time"
                            name="time"
                            placeholder="Time"
                            value={inputField.time}
                            onChange={onChange}
                        />
                    </div>

                    <div className="add-call__footer">
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

export default AddTodoSection;