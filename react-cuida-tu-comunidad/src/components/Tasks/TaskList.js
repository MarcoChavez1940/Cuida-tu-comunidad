import React, { useState, useEffect } from 'react';
import { Col, Row, Input, Select, Typography } from 'antd';
import Task from './Task';
import CreateTask from './CreateTask/CreateTask';

const { Title } = Typography;
const { Search } = Input;
const { Option } = Select;

const TaskList = ({ notificationApi }) => {
  const [tasks, setTasks] = useState([]);
  const [states, setStates] = useState([]);

  const getTasksData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/tasks`);
    const data = await response.json();
    setTasks(data);
    sessionStorage.setItem('tasks', JSON.stringify(data));
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

  const onSearch = (value) => {
    if (value === '') {
      setTasks(JSON.parse(sessionStorage.getItem('tasks')));
    } else {
      const tasksFilter = JSON.parse(sessionStorage.getItem('tasks')).filter(task => task.title.toLowerCase().includes(value.toLowerCase()));
      setTasks(tasksFilter);
    }
  }
  const onSelect = (value) => {
    if (value) {
      const tasksFilter = JSON.parse(sessionStorage.getItem('tasks')).filter(task => task.state.id === value);
      setTasks(tasksFilter);
    } else {
      setTasks(JSON.parse(sessionStorage.getItem('tasks')));
    }
  }

  return (
    <div>
      <Row gutter={16} style={{ display: 'flex', justifyContent: 'center' }}>
        <Col xs={24} md={18} lg={12}>
          <Title level={2}>Lista de Tareas</Title>
          <CreateTask states={states} getTasksData={getTasksData} />
          <br />
          <div style={{ marginTop: 16 }}>
            <Search allowClear placeholder="Filtrar por título" onSearch={onSearch} style={{ width: 200 }} />
            <Select
              placeholder="Seleccione un estado"
              allowClear
              style={{ width: 200 }}
              onChange={onSelect}
            >
              {states.map(state => {
                return (
                  <Option key={state.id} value={state.id}>{state.name}</Option>
                )
              })}
            </Select>
          </div>

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
            {tasks.length === 0 ? <Title level={4}>No hay tareas</Title> : null}
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default TaskList;