import './App.css'
import AddTodoSection from './components/AddTodoSection';
import CallTodoList from "./components/CallTodoList.jsx";
function App() {

  return (
    <>
      <div className="call-todo-header">
          <AddTodoSection/>

          <AddTodoSection/>
      </div>

      <div className="call-todo-body">
          <CallTodoList />
      </div>
    </>
  )
}

export default App
