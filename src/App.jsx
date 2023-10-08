import './App.css'
import AddTodoSection from './components/AddTodoSection';
import CallsTable from "./components/CallsTable.jsx";
import useLocalStorage from "./hooks/useLocalStorage.js";
import SectionNextCall from "./components/SectionNextCall.jsx";
import {closestTime as getClosestTime} from "./helpers/closestTime.js";
import {useEffect, useState} from "react";

function App() {
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
      <div className="call-todo-header">
          <AddTodoSection addCall={addCall} />

          <SectionNextCall call={nextCall} />
      </div>

      <div className="call-todo-body">
          <CallsTable callTodos={callTodos} delCall={delCall} />
      </div>
    </>
  )
}

export default App
