import React from 'react';
import './App.css';
import { Typography, notification } from 'antd';
import TaskList from './components/Tasks/TaskList';

const { Title } = Typography;

function App() {
  const [notificationApi, contextHolder] = notification.useNotification();

  return (
    <div className="App" style={{ padding: 16, backgroundColor: 'beige' }}>
      {contextHolder}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Title level={3}>Cuida tu comunidad</Title>
      </div>

      <div className='body'>
        <TaskList notificationApi={notificationApi}/>
      </div>
    </div>
  );
}

export default App;
