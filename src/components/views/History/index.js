import React from 'react';
import { Layout,Card,Row,Button} from 'antd';
import './history.css';
import firebase from '../../../firebase';
import ButtonAksi from './buttonaction';
import EditBuy from '../EditBuy';

const { Content, Header,Footer } = Layout;



function History() {
  const [showticket, setShowTicket] = React.useState([]);

  React.useEffect(() => {
      const fetchData = async () => {
          const db = firebase.firestore()
          const data = await db.collection("ticket").get()
          setShowTicket(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      }
      fetchData();
  }, []);
  
  return (
      
      <div>
      <Layout style={{padding:'16px auto'}}>
          <Header style={{background: '#fff'}}>
          <Content style={{padding : '16px auto'}}>
            <Button shape="round"  style={{backgroundColor:'white', margin: '16px auto'}}>
                      <h4>History Order</h4>
            </Button>
            <Row justify="center">
            {showticket.map(ticket =>
             <Card title="Ticket" style={{ width: 300}}>
               <p>Atas nama <b>{ticket.name}</b></p>
               <p>Email : <b>{ticket.email}</b></p>
               <p>Film yang dipilih : <b>{ticket.choosenmovie}</b></p>
               <p>Total Tiket : <b>{ticket.totalticket}</b></p>
                  <ButtonAksi ticket={ticket}/>
                  <EditBuy ticket={ticket}> </EditBuy>
             </Card>
            )}
            </Row>
              </Content>
              <Footer style={{backgroundColor:'white' , textAlign: 'center'}}>Kelompok Film ©2020 </Footer>
          </Header>
      </Layout>
      </div>
  );
}
     

export default History;