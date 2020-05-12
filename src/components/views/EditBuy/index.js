import React from 'react';
import firebase from '../../../firebase';
import { Link } from 'react-router-dom';
import {
  Form,
  Input,
  Button,
  notification

} from 'antd';
//import './edit.css'



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

    notification.open({
      message: 'Hai!',
      description:
        'Data telah berhasil di Update, Silahkan Reload Halaman ini!',
    });
  }

  


  return (
      <div style={{marginTop:'20px'}}>
        <hr/>
                      <h4 style={{marginTop:'15px'}}>Edit Ticket</h4>
      
      <Form
        style={{padding: '5px auto'}}
        labelCol={{ span: 9 }}
        wrapperCol={{ span: 15 }}
      >
        
        <Form.Item label="Nama" name="name" style={{margin : '16px auto'}}>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Item>
        <Form.Item label="Email" name="email" style={{margin : '16px auto'}}>
          <Input value={email} onChange={(e) => setEmail(e.target.value)}/>
        </Form.Item>
        <Form.Item label="Judul Film" name="choosenmovie" style={{margin : '16px auto'}}>
          <Input value={choosenmovie} onChange={(e) => setChoosenMovie(e.target.value)} />
        </Form.Item>
        <Form.Item label="Jumlah Tiket" name="jmltiket">
          <Input value={totalticket} onChange={(e) => setTotalTicket(e.target.value)}/>
        </Form.Item>
      </Form>
      <Link to="/History">
      <Button onClick={onUpdate} type="primary" ghost style={{padding: '16px auto'}}>Update</Button>
      </Link>
      </div>
  );
};

export default EditBuy;