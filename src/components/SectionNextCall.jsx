import Input from "./ui/Input/Input";
import useLocalStorage from "../hooks/useLocalStorage.js";

const SectionNextCall = () => {

    const [callTodos, setCallTodos] = useLocalStorage([], 'call_list');

    const getNextCall = () => {
        const currentTime = Date.now();
        let closestItem = null;
        let closestDiff = Infinity;

        for ( let i = 0; i < callTodos.length; i++ ) {
            const timestamp = callTodos[i].id;

            if ( timestamp > currentTime ) {
                const diff = timestamp - currentTime;

                if ( diff < closestDiff ) {
                    closestItem = callTodos[i];
                    closestDiff = diff;
                }
            }
        }

        return closestItem;
    };

    const nextCall = getNextCall();


    return (
        <>
            <section className="app-section">
                <header className="app-section__header">
                    <h2 className="app-section__title">Next Call</h2>
                </header>

                <form className="add-call">
                    <div className="add-call__body">
                        <Input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={ nextCall ? nextCall.name : '-' }
                            readOnly
                        />

                        <Input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            value={ nextCall ? nextCall.phone : '-' }
                            readOnly
                        />

                        <Input
                            type="text"
                            name="time"
                            placeholder="Time"
                            value={ nextCall ? nextCall.time : '-' }
                            readOnly
                        />
                    </div>
                </form>
            </section>
        </>
    )
};

export default SectionNextCall;