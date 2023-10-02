import React, { useState } from 'react';
import { Card, Divider, Typography } from 'antd';
import { HeartOutlined, HeartFilled, SmileOutlined } from '@ant-design/icons';
import DeleteTask from './DeleteTask';

const { Title } = Typography;

const Task = ({ id, title, description, author, state, likes, getTasksData, notificationApi }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCounter, setLikesCouter] = useState(likes)

  const giveLike = async () => {
    if (isLiked === false) {
      // Do http request
      const response = await fetch(`${process.env.REACT_APP_API_URL}/tasks/${id}`, {
        method: 'PUT'
      });
      const data = await response.json();
      setLikesCouter(data.task.likes);
      setIsLiked(true);
      notificationApi.open({
        message: 'Gracias por tu like',
        description:
          'Gracias por mostrar tu apoyo a esta propuesta.',
        icon: <SmileOutlined style={{ color: '#108ee9' }} />,
      });
    }
  }

  return (
    <Card
      title={title}
      style={{ marginBottom: 16 }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
        <Title level={4}>Descripción:</Title>
        <div style={{ textAlign: 'justify' }}>
          {description}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline' }}>
        <Title level={4}>Autor:</Title>
        <div style={{ textAlign: 'justify', marginLeft: 6 }}>
          {author}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline' }}>
        <Title level={4}>Estado:</Title>
        <div style={{ textAlign: 'justify', marginLeft: 6 }}>
          {state.name}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <DeleteTask taskId={id} getTasksData={getTasksData} notificationApi={notificationApi}/>
      </div>


      <Divider dashed />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ marginRight: 4 }}>{likesCounter}</div>
        <HeartOutlined
          onClick={() => giveLike()}
          style={{
            color: '#FF0000',
            fontSize: 24,
            display: isLiked ? 'none' : 'block'
          }} />
        <HeartFilled
          style={{
            color: '#FF0000',
            fontSize: 24,
            display: !isLiked ? 'none' : 'block'
          }} />
      </div>

    </Card>
  )
}

export default Task;