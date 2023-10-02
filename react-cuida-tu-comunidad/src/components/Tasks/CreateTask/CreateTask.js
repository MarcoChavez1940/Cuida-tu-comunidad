import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import CreateTaskForm from './CreateTaskForm';

const CreateTask = ({ states, getTasksData }) => {
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
        <CreateTaskForm states={states} closeForm={() => handleCancel()} getTasksData={getTasksData} />
      </Modal>
    </>
  );
};

export default CreateTask;