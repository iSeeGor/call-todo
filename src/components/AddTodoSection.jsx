import Input from "./ui/Input/Input";
import {useState} from "react";

const AddTodoSection = ({addCall}) => {
    const [call, setCall] = useState({
        name: '',
        phone: '',
        time: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.target);

        addCall(Object.fromEntries(data.entries()))
    }

    const onChange = (e) => {
        setCall({...call, [e.target.name]: e.target.value});
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
                            value={call.name}
                            onChange={onChange}
                        />

                        <Input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            value={call.phone}
                            onChange={onChange}
                        />

                        <Input
                            type="time"
                            name="time"
                            placeholder="Time"
                            value={call.time}
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