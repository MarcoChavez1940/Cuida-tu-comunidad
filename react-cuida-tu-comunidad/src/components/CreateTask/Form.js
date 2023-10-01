import React from 'react';
import { Button, Checkbox, Form, Input, Select } from 'antd';

const { Option } = Select;

const onFinish = (values) => {
  // Do http request
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const App = () => (
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
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

    <Form.Item name="state" label="Gender" rules={[{ required: true, message: 'Seleccione un estado', }]}>
      <Select
        placeholder="Select a option and change input text above"
        allowClear
      >
        <Option value="1">male</Option>
        <Option value="2">female</Option>
        <Option value="3">other</Option>
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
export default App;