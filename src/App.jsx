import './App.css';
import SectionAddCall from './components/SectionAddCall';
import SectionNextCall from './components/SectionNextCall';
import SectionCallTodos from './components/SectionCallTodos';

function App() {
  return (
    <>
      <div className="call-todo-app">
        <aside className="call-todo-app__aside">
          <SectionNextCall />
        </aside>

        <main className="call-todo-app__main">
          <SectionAddCall />

          <SectionCallTodos />
        </main>
      </div>
    </>
  );
}

export default App;
