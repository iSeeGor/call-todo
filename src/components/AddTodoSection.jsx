import Input from "./ui/Input/Input";
import {useState} from "react";


const AddTodoSection = () => {
    const [value, setValue] = useState({
        name: '',
        phone: '',
        time: ''
    });

    const addCall = (e) => {
        e.preventDefault();

        console.log(value)
    }

    return (
        <>
            <section className="app-section">
                <header className="app-section__header">
                    <h2 className="app-section__title">Add Call</h2>
                </header>

                <form className="add-call">
                    <div className="add-call__body">
                        <Input
                            type="text"
                            placeholder="Name"
                            value={value.name}
                            onChange={ e => setValue({...value, name: e.target.value}) }
                        />

                        <Input
                            type="text"
                            placeholder="Phone"
                            value={value.phone}
                            onChange={ e => setValue({...value, phone: e.target.value}) }
                        />

                        <Input
                            type="time"
                            placeholder="Time"
                            value={value.time}
                            onChange={ e => setValue({...value, time: e.target.value}) }
                        />
                    </div>

                    <div className="add-call__footer">
                        <button
                            type="submit"
                            className="button"
                            onClick={addCall}
                        >Add Call</button>
                    </div>
                </form>
            </section>
        </>
    )
};

export default AddTodoSection;