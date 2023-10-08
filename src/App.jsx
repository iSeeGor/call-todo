import './App.css'
import AddTodoSection from './components/AddTodoSection';
import CallsTable from "./components/CallsTable.jsx";
import useLocalStorage from "./hooks/useLocalStorage.js";
import SectionNextCall from "./components/SectionNextCall.jsx";
import {closestTime} from "./helpers/closestTime.js";

function App() {
    const [callTodos, setCallTodos] = useLocalStorage([],'call_list');

    const addCall = (callTodo) => {
        setCallTodos([...callTodos, callTodo]);
    };

    const delCall = ( time ) => {
        const filteredTodos = callTodos.filter(( obj ) => obj.time !== time);

        setCallTodos(filteredTodos);
    }

    function nextCall(data) {
        const timeData = data.map(obj => obj.time);
        const nextTime = closestTime(timeData);

        return data.find(obj => obj.time === nextTime);
    }

  return (
    <>
      <div className="call-todo-header">
          <AddTodoSection addCall={addCall} />

          <SectionNextCall call={nextCall(callTodos)} />
      </div>

      <div className="call-todo-body">
          <CallsTable callTodos={callTodos} delCall={delCall} />
      </div>
    </>
  )
}

export default App
