import Input from "./ui/Input/Input";
import {useState} from "react";


const AddTodoSection = () => {
    const [value, setValue] = useState({
        name: '',
        phone: '',
        time: ''
    });

    return (
        <>
            <section className="app-section">
                <header className="app-section__header">
                    <h2 className="app-section__title">Add Call</h2>
                </header>

                <div className="add-call">
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
                            type="text"
                            placeholder="Time"
                            value={value.time}
                            onChange={ e => setValue({...value, time: e.target.value}) }
                        />
                    </div>

                    <div className="add-call__footer">
                        <button type="button" className="button">Add Call</button>
                    </div>
                </div>
            </section>
        </>
    )
};

export default AddTodoSection;