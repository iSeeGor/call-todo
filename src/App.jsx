import './App.css'
import AddTodoSection from './components/AddTodoSection';
import CallTodoList from "./components/CallTodoList.jsx";
import useLocalStorage from "./hooks/useLocalStorage.js";

function App() {

    const [call, setCall] = useLocalStorage([],'calltodo');

    const addCall = (el) => {
        setCall([...call, el]);
    };

  return (

    <>
      <div className="call-todo-header">
          <AddTodoSection addCall={addCall}/>

          <AddTodoSection/>
      </div>

      <div className="call-todo-body">
          <CallTodoList callList={call} />
      </div>
    </>
  )
}

export default App
