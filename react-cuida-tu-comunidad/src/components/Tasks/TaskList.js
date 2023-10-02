import React, { useState, useEffect } from 'react';
import { Col, Row } from 'antd';
import { Typography } from 'antd';
import Task from './Task';
import CreateTask from './CreateTask/CreateTask';

const { Title } = Typography;

const TaskList = ({ notificationApi }) => {
  const [tasks, setTasks] = useState([]);
  const [states, setStates] = useState([]);

  const getTasksData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/tasks`);
    const data = await response.json();
    setTasks(data);
  }

  const getStatesData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/states`);
    const data = await response.json();
    setStates(data);
  }

  useEffect(() => {
    getTasksData();
    getStatesData();
  }, [])

  return (
    <div>
      <Row gutter={16} style={{ display: 'flex', justifyContent: 'center' }}>
        <Col span={10}>
          <Title level={2}>Lista de Tareas</Title>
          <CreateTask states={states} getTasksData={getTasksData} />
          <div style={{ marginTop: 16 }}>
            {tasks.map(task => {
              return (
                <Task
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  description={task.description}
                  author={task.author}
                  state={task.state}
                  likes={task.likes}
                  getTasksData={getTasksData}
                  notificationApi={notificationApi}
                />
              )
            })}
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default TaskList;