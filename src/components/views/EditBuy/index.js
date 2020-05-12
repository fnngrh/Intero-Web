import React from 'react';
import firebase from '../../../firebase';
import { Link } from 'react-router-dom';
import {
  Form,
  Input,
  Button,
  Layout,Card,Row
} from 'antd';
import './buynow.css'

const { Content, Header,Footer } = Layout;


const EditBuy = ({ ticket }) => {
  
  const [email, setEmail] = React.useState()
  const [name, setName] = React.useState()
  const [totalticket, setTotalTicket] = React.useState()
  const [choosenmovie, setChoosenMovie] = React.useState()

  // const [newEmail, setEmail]= React.useState(ticket.newEmail);
  // const [newName, setName]= React.useState(ticket.newName);
  // const [newTotalTicket, setTotalTicket]= React.useState(ticket.newTotalTicket);
  // const [newChoosenMovie, setChoosenMovie]= React.useState(ticket.newChoosenMovie);
  
  const [showticket, setShowTicket] = React.useState([]);

  React.useEffect(() => {
      const fetchData = async () => {
          const db = firebase.firestore()
          const data = await db.collection("ticket").get()
          setShowTicket(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      }
      fetchData();
  }, []);
  

  const onUpdate = () => {
    const db = firebase.firestore()
    db.collection('ticket').doc(ticket.id).set({...ticket, email,name,totalticket,choosenmovie})
  }

  


  return (
      <div>
      <Form
        style={{padding: '16px auto'}}
        labelCol={{ span: 15 }}
        wrapperCol={{ span: 15 }}
      >
        
        <Form.Item label="Email" name="email" style={{margin : '16px auto'}}>
          <Input value={email} onChange={(e) => setEmail(e.target.value)}/>
        </Form.Item>
        <Form.Item label="Nama" name="name" style={{margin : '16px auto'}}>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Item>
        <Form.Item label="Judul Film" name="choosenmovie" style={{margin : '16px auto'}}>
          <Input value={choosenmovie} onChange={(e) => setChoosenMovie(e.target.value)} />
        </Form.Item>
        <Form.Item label="Jumlah Tiket">
          <Input value={totalticket} onChange={(e) => setTotalTicket(e.target.value)}/>
        </Form.Item>
      </Form>
      <Button onClick={onUpdate} type="primary" ghost style={{padding: '16px auto'}}><a href="/History">Update</a></Button>
      </div>
  );
};

export default EditBuy;