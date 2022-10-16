import React from "react";
import { Button, Col, Form, Input, Row } from "antd";
import axios from "axios";

function AddCustomer() {
  const submitForm = (values) => {

axios.post('https://northwind.vercel.app/api/customers' , values)
.then(res => {
 console.log('res', res.data);
})
   
  };
  return (
    <>
      <Form layout="vertical" onFinish={submitForm}>
        <Row gutter={24}>
          <Col span={24}>
            <Form.Item 
            label="Company Name" 
            name="companyName"
            rules={[{ required: true, message: 'Please input your Company Name!' } , {max:35}]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item 
            label="Contact Name"
             name="contactName"
             rules={[{ required: true, message: 'Please input your Contact Name!' }, {max:35}]}
             >
              <Input />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item 
            label="Contact Title" 
            name="contactTitle"
            rules={[{ required: true, message: 'Please input your Contact Title!' },{max:35}]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Button type="primary" htmlType="submit">
          Add Customer
        </Button>
      </Form>
    </>
  );
}

export default AddCustomer;
