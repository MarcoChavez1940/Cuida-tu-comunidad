import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Form from './Form';

const CreateTask = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Crear tarea
      </Button>
      <Modal title="Crear nueva tarea" open={isModalOpen} footer={null} onCancel={handleCancel}>
        <Form />
      </Modal>
    </>
  );
};

export default CreateTask;