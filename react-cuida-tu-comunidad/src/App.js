import React from 'react';
import './App.css';
import { Typography, notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import TaskList from './components/Tasks/TaskList';

const { Title } = Typography;

function App() {
  const [notificationApi, contextHolder] = notification.useNotification();

  return (
    <div className="App" style={{ padding: 16, backgroundColor: 'beige' }}>
      {contextHolder}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline' }}>
        <Title level={2}>Cuida tu comunidad</Title>
        <SmileOutlined style={{ color: '#108ee9', fontSize: 32, marginLeft: 8 }} />
      </div>

      <div className='body'>
        <TaskList notificationApi={notificationApi} />
      </div>
    </div>
  );
}

export default App;
