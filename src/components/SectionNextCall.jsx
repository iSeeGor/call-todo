import Input from "./ui/Input/Input";
import {timeFromTimestamp} from "../helpers/time.js";

const SectionNextCall = ({call}) => {

    return (
        <>
            <section className="app-section app-section--nextcall">
                <header className="app-section__header">
                    <h2 className="app-section__title">Next Call</h2>
                </header>

                <form className="call-todo-form">
                    <div className="call-todo-form__body">
                        <Input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={ call ? call.name : '-' }
                            readOnly
                        />

                        <Input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            value={ call ? call.phone : '-' }
                            readOnly
                        />

                        <Input
                            type="text"
                            name="time"
                            placeholder="Time"
                            value={ call ? timeFromTimestamp(call.time) : '-' }
                            readOnly
                        />
                    </div>
                </form>
            </section>
        </>
    )
};

export default SectionNextCall;