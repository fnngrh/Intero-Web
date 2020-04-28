import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Select,
  InputNumber,
  Layout,
} from 'antd';
import './buynow.css'

const { Content, Header,Footer } = Layout;


const BuyNow = () => {
  const [componentSize] = useState('medium');

  return (
    <Layout style={{padding:'16px auto', background: '#fff'}}>
        <Header style={{background: '#fff'}}>
        <Content style={{padding : '16px auto'}}>
        <Button shape="round"  style={{backgroundColor:'white', margin: '16px auto'}}>
              <h4>Buy Ticket</h4>
        </Button>

      <Form
        style={{padding: '16px auto'}}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 10 }}
        size={componentSize}
      >
        <Form.Item label="Email" name="email" style={{margin : '16px auto'}}>
          <Input />
        </Form.Item>
        <Form.Item label="Nama" name="nama" style={{margin : '16px auto'}}>
          <Input />
        </Form.Item>
        <Form.Item label="Pilih Film">
          <Select>
            <Select.Option value="film">Birds of Prey</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Jumlah Tiket">
          <InputNumber />
        </Form.Item> 
      </Form>
      <Button type="primary" ghost style={{padding: '16px auto'}}>Finish</Button>
    </Content>
    <Footer style={{backgroundColor:'white' , textAlign: 'center'}}>Kelompok Film ©2020 </Footer>
    </Header>
    </Layout>
  );
};

export default BuyNow;