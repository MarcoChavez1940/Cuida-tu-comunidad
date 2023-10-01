import React, { useState } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card, Divider } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

const { Meta } = Card;

const Task = ({ title, description, author, state, likes }) => {
  const [isLiked, setIsLiked] = useState(false);

  const giveLike = () => {
    if (isLiked === false) {
      // Do http request
      setIsLiked(true);
    }
  }

  return (
    <Card
      title={title}
    >
      <p>Descripción: {description}</p>
      <p>Autor: {author}</p>
      <p>Estado: {state}</p>

      <Divider dashed />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ marginRight: 4 }}>{likes}</div>
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