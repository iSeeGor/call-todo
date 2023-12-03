import './App.css'
import {useEffect, useState} from "react";
import {closestTime as getClosestTime} from "./helpers/closestTime.js";
import useLocalStorage from "./hooks/useLocalStorage.js";
import SectionAddCall from './components/SectionAddCall.jsx';
import SectionNextCall from "./components/SectionNextCall.jsx";
import CallsTable from "./components/CallsTable.jsx";

function App() {
    // document.addEventListener('invalid', (function(){
    //     return function(e) {
    //         //prevent the browser from showing default error bubble / hint
    //         e.preventDefault();
    //         // optionally fire off some custom validation handler
    //         // myValidation();
    //     };
    // })(), true);

    const [callTodos, setCallTodos] = useLocalStorage([],'call_list');
    const [nextCall, setNextCall] = useState(null);

    const addCall = (callTodo) => {
        setCallTodos([...callTodos, callTodo]);
    };

    const delCall = ( time ) => {
        const filteredTodos = callTodos.filter(( obj ) => obj.time !== time);

        setCallTodos(filteredTodos);
    }

    const getNextCall = () => {
        const timestampArray = callTodos.map(obj => obj.time);
        const closestTime = getClosestTime(timestampArray);

        return callTodos.find(obj => obj.time === closestTime);
    }

    const removeOldCalls = () => {
        let actualCalls;
        const currentDate = new Date();
        const dayStartTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDay()).getTime() / 1000;

        actualCalls = callTodos.filter( ( obj ) => {
            const callTime = Math.floor( parseInt(obj.time, 10) / 1000 );
            return callTime > dayStartTime
        } );
    }

    useEffect(() => {
        setNextCall(getNextCall());

        const interval = setInterval(() => {
            setNextCall(getNextCall());
        }, 60000);

        return () => {
            clearInterval( interval );
        }
    }, [callTodos])

  return (
    <>
        <div className="call-todo-app">
            <aside className="call-todo-app__aside">
                <SectionNextCall call={nextCall} />
            </aside>

            <main className="call-todo-app__main">
                <SectionAddCall addCall={addCall} />

                <CallsTable callTodos={callTodos} delCall={delCall} />
            </main>
        </div>
    </>
  )
}

export default App
