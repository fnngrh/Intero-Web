import React , {Component} from 'react';
import { Layout,Button,Descriptions} from 'antd';
const { Content, Header,Footer } = Layout;

class History extends Component{
    


  render(){
      
  
  return (
      
      <div>
      <Layout style={{padding:'16px auto'}}>
          <Header style={{background: '#fff'}}>
          <Content style={{padding : '16px auto'}}>
            <Button shape="round"  style={{backgroundColor:'white', margin: '16px auto'}}>
                      <h4>History Order</h4>
            </Button>
             <Descriptions  bordered>
              <Descriptions.Item label="Email">Email@ugm.com</Descriptions.Item>
              <Descriptions.Item label="Nama">Lalala</Descriptions.Item>
              <Descriptions.Item label="Actions" >
                <Button style={{backgroundColor:'#CBF3F9'}} >Edit</Button>
                <Button style={{backgroundColor:'#FF6961'}}>Delete</Button>
              </Descriptions.Item>
              <Descriptions.Item label="Judul Film">Milea</Descriptions.Item>
              <Descriptions.Item label="Jumlah Tiket">2</Descriptions.Item>
              <Descriptions.Item label="Total Harga">
                Rp.20.000
              </Descriptions.Item>
              </Descriptions>
             
              </Content>
              <Footer style={{backgroundColor:'white' , textAlign: 'center'}}>Kelompok Film ©2020 </Footer>
          </Header>
      </Layout>
      </div>
  );
}
}
     

export default History;