import './App.css'
import useLocalStorage from "./hooks/useLocalStorage.js";
import SectionAddCall from './components/SectionAddCall.jsx';
import SectionNextCall from "./components/SectionNextCall.jsx";
import CallsTable from "./components/CallsTable.jsx";

function App() {
    const [callTodos, setCallTodos] = useLocalStorage([],'callTodos');
   

    const addCall = (callTodo) => {
        setCallTodos([...callTodos, callTodo]);
    };

    const delCall = ( time ) => {
        const filteredTodos = callTodos.filter(( obj ) => obj.time !== time);

        setCallTodos(filteredTodos);
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


  return (
    <>
        <div className="call-todo-app">
            <aside className="call-todo-app__aside">
                <SectionNextCall callTodos={callTodos} />
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
