import React from 'react';
import { ExclamationCircleFilled, SmileOutlined, FrownOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';

const { confirm } = Modal;

const DeleteTask = ({ taskId, getTasksData, notificationApi }) => {

  const showDeleteConfirm = (taskId, getTasksData) => {
    confirm({
      title: '¿Está seguro de eliminar esta tarea?',
      icon: <ExclamationCircleFilled />,
      content: 'No se podrá revertir una vez confirmado.',
      okText: 'Eliminar',
      okType: 'danger',
      cancelText: 'No',
      async onOk() {
        // Do http request
        const response = await fetch(`${process.env.REACT_APP_API_URL}/tasks/${taskId}`, {
          method: 'DELETE'
        });
        const data = await response.json();
        if (data.message === 'Can not delete task with likes') {
          notificationApi.open({
            message: 'No se puede eliminar esta tarea',
            description:
              'Esta tarea no puede ser eliminada ya que cuenta con el apoyo de la comunidad (likes).',
            icon: <SmileOutlined style={{ color: '#108ee9' }} />,
          });
        } else {
          notificationApi.open({
            message: 'Tarea eliminada',
            description:
              'Se ha eliminado con éxito la tarea, esperemos que el autor pueda mejorar su propuesta.',
            icon: <FrownOutlined style={{ color: '#108ee9' }} />,
          });
          getTasksData();
        }

      }
    });
  };

  return (
    <Button onClick={() => showDeleteConfirm(taskId, getTasksData)}>
      Eliminar tarea
    </Button>
  );
}

export default DeleteTask;