import './App.css'
import useLocalStorage from "./hooks/useLocalStorage.js";
import SectionAddCall from './components/Sections/SectionAddCall';
import SectionNextCall from "./components/Sections/SectionNextCall";
import SectionCallTodos from "./components/Sections/SectionCallTodos";

function App() {
    const [callTodos, setCallTodos] = useLocalStorage([],'callTodos');
   

    const addCall = (callTodo) => {
        setCallTodos([...callTodos, callTodo]);
    };

    const delCall = ( time ) => {
        const filteredTodos = callTodos.filter(( obj ) => obj.time !== time);

        setCallTodos(filteredTodos);
    }

  return (
    <>
        <div className="call-todo-app">
            <aside className="call-todo-app__aside">
                <SectionNextCall callTodos={callTodos} />
            </aside>

            <main className="call-todo-app__main">
                <SectionAddCall addCall={addCall} />

                <SectionCallTodos callTodos={callTodos} delCall={delCall} />
            </main>
        </div>
    </>
  )
}

export default App
