import React from 'react';
import firebase from '../../../firebase';
import {
  Form,
  Input,
  Button,
  Layout,
} from 'antd';
import './buynow.css'
import {Select} from 'antd';
import { Link } from 'react-router-dom';
const { Content, Header,Footer } = Layout;
const { Option } = Select;


function BuyNow() {

  const [newEmail, setEmail] = React.useState()
  const [newName, setName] = React.useState()
  const [newTotalTicket, setTotalTicket] = React.useState()
  const [newChoosenMovie, setChoosenMovie] = React.useState()

  const [nowshowing, setNowshowing] = React.useState([])

    // React.useEffect(() => {
    //     const fetchData = async () => {
    //         const db = firebase.firestore()
    //         const data = await db.collection("nowshowing").get()
    //         setNowshowing(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    //     };
    //     fetchData();
    // }, []);

    
  const onCreate = () => {
    const db = firebase.firestore()
    db.collection('ticket').add({email: newEmail, name: newName, totalticket: newTotalTicket, choosenmovie: newChoosenMovie});
  }
  // const addItem =()=>{
  //   setNowshowing([nowshowing, {
  //     id: nowshowing.length,
  //     value : nowshowing.title
  //   }])
  // }
 

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
      >
        <Form.Item label="Email" name="email" style={{margin : '16px auto'}}>
          <Input value={newEmail} onChange={(e) => setEmail(e.target.value)}/>
        </Form.Item>
        <Form.Item label="Nama" name="name" style={{margin : '16px auto'}}>
          <Input value={newName} onChange={(e) => setName(e.target.value)} />
        </Form.Item>
        <Form.Item label="Pilih Film" name="choosenmovie" style={{margin : '16px auto'}}>
          {/* <Select onChange={(e) => setChoosenMovie(e.target)}>
          {nowshowing.map(movie =>
            <Option value={movie.title}>{movie.title}</Option>
          )}
          </Select> */}
          <Input value={newChoosenMovie} onChange={(e) => setChoosenMovie(e.target.value)} />
        </Form.Item>
        <Form.Item label="Jumlah Tiket">
          <Input value={newTotalTicket} onChange={(e) => setTotalTicket(e.target.value)}/>
        </Form.Item> 
      </Form>
      <Link to="/History">
      <Button onClick={onCreate} type="primary" ghost style={{padding: '16px auto'}}>
        Finish
        </Button>
        </Link>
    </Content>
    <Footer style={{backgroundColor:'white' , textAlign: 'center'}}>Kelompok Film ©2020 </Footer>
    </Header>
    </Layout>
  );
};

export default BuyNow;