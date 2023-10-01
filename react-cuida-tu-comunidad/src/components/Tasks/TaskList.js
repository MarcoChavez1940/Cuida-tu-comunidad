import React, { useState, useEffect } from 'react';
import { Col, Row } from 'antd';
import { Typography } from 'antd';
import Task from './Task';

const { Title } = Typography;

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/tasks`);
      const data = await response.json();
      setTasks(data);
    }
    getData();

  }, [])

  return (
    <div>
      <Row gutter={16} style={{ display: 'flex', justifyContent: 'center' }}>
        <Col span={10}>
          <Title level={2}>Tareas</Title>
          {tasks.map(task => {
            return (
              <Task
                key={task.id}
                title={task.title}
                description={task.description}
                author={task.author}
                state={task.state_id}
                likes={task.likes}
              />
            )
          })}
        </Col>
      </Row>
    </div>
  )
}

export default TaskList;