import React from 'react';
import { Button, Form, Input, Select } from 'antd';

const { Option } = Select;

const CreateTaskForm = ({ states, closeForm, getTasksData }) => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    // Do http request
    const response = await fetch(`${process.env.REACT_APP_API_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "title": values.title,
        "description": values.description,
        "author": values.author,
        "state_id": values.stateId
      })
    });
    const data = await response.json();
    closeForm();
    form.resetFields();
    getTasksData();
  };

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Título"
        name="title"
        rules={[
          {
            required: true,
            message: 'Ingrese un titulo para la tarea',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Descripción"
        name="description"
        rules={[
          {
            required: true,
            message: 'Ingrese una descripción.',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="stateId" label="Estado" rules={[{ required: true, message: 'Seleccione un estado', }]}>
        <Select
          placeholder="Seleccione un estado"
          allowClear
        >
          {states.map(state => {
            return (
              <Option key={state.id} value={state.id}>{state.name}</Option>
            )
          })}
        </Select>
      </Form.Item>

      <Form.Item
        label="Autor"
        name="author"
        rules={[
          {
            required: true,
            message: 'Ingrese nombre del autor',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Crear nueva tarea
        </Button>
      </Form.Item>
    </Form>
  );
}
export default CreateTaskForm;