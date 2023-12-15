import {useEffect, useState} from "react";
import Input from "./ui/Input/Input";
import {timeFromTimestamp} from "../helpers/time.js";
import {closestTime as getClosestTime} from "../helpers/closestTime.js";

const SectionNextCall = ({callTodos}) => {
    const [nextCall, setNextCall] = useState(null);

    const prepareNextCall = () => {
        const timestampArray = callTodos.map(obj => obj.time);
        const closestTime = getClosestTime(timestampArray);

        return callTodos.find(obj => obj.time === closestTime);
    }

    useEffect(() => {
        setNextCall(prepareNextCall());

        const interval = setInterval(() => {
            setNextCall(prepareNextCall());
        }, 30000);

        return () => {
            clearInterval( interval );
        }
    }, [callTodos])

    return (
        <>
            <section className="app-section app-section--nextcall" style={{'paddingBottom':'75px'}}>
                <header className="app-section__header">
                    <h2 className="app-section__title">Next Call</h2>
                </header>

                <form className="call-todo-form">
                    <div className="call-todo-form__body">
                        <Input
                            label="Name"
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={ nextCall ? nextCall.name : '-' }
                            readOnly
                        />

                        <Input
                            label="Phone"
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            value={ nextCall ? nextCall.phone : '-' }
                            readOnly
                        />

                        <Input
                            label="Time"
                            type="text"
                            name="time"
                            placeholder="Time"
                            value={ nextCall ? timeFromTimestamp(nextCall.time) : '-' }
                            readOnly
                        />
                    </div>
                </form>
            </section>
        </>
    )
};

export default SectionNextCall;