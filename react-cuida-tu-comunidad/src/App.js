import './App.css';
import CreateTask from './components/CreateTask/CreateTask';

import TaskList from './components/Tasks/TaskList';

function App() {
  return (
    <div className="App" style={{ margin: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'blue' }}>
        <span>Cuida tu comunidad</span>
        <div><CreateTask /></div>

      </div>

      <div className='body'>
        <TaskList/>
      </div>
    </div>
  );
}

export default App;
