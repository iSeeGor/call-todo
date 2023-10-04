import './App.css'
import AddTodoSection from './components/AddTodoSection';
import CallTodoList from "./components/CallTodoList.jsx";
import useLocalStorage from "./hooks/useLocalStorage.js";
import SectionNextCall from "./components/SectionNextCall.jsx";

function App() {

    const [callTodos, setCallTodos] = useLocalStorage([],'call_list');

    const addCall = (el) => {
        setCallTodos([...callTodos, el]);
    };

    const delCall = ( id ) => {
        const filteredTodos = callTodos.filter(( obj ) => obj.id !== id);

        setCallTodos(filteredTodos);
    }

  return (

    <>
      <div className="call-todo-header">
          <AddTodoSection addCall={addCall} />

          <SectionNextCall />
      </div>

      <div className="call-todo-body">
          <CallTodoList callList={callTodos} delCall={delCall} />
      </div>
    </>
  )
}

export default App
