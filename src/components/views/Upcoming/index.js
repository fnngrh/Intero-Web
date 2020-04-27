import React , {useState} from 'react';
import { Layout, Row, Col, Card, Button,Modal} from 'antd';
import { Carousel } from 'antd';
import "./upcoming.css"
const { Content, Header,Footer } = Layout;
const { Meta } = Card;




const Upcoming = () =>{ 
    const cardData = [
        {
            title : "Trolls World Tour",
            image : require(`../../images/poster/twt.jpg`),
        },
        {
            title : "Trauma Center",
            image : require(`../../images/poster/tc.jpg`),
        },
        {
            title : "Bucin",
            image : require(`../../images/poster/bucin.jpg`),
        },
        {
            title : "I Still Believe",
            image : require(`../../images/poster/still.jpg`),
        },
        {
            title : "Jexi",
            image : require(`../../images/poster/jexi.jpg`),
        },
        {
            title : "Teen Spirit",
            image : require(`../../images/poster/10spirit.jpg`),
        },
        {
            title : "Killerman",
            image : require(`../../images/poster/killer.jpg`),
        },
        {
            title : "My Spy",
            image : require(`../../images/poster/myspy.jpg`),
        },
    ]
    
    const image1 = require(`../../images/carousel/myspy.jpg`);
    const image2 = require(`../../images/carousel/still2.jpg`);
    const image3 = require(`../../images/carousel/teen2.jpg`);

    
 
//     const initialKeyState = {
//       visible: false,
//     };
  
//   const [popup, setKey] = useState (initialKeyState)

//   const showModal = () => {
//     setKey({
//         visible: true,
//       });
//   };

//   const handleOk = e => {
//     console.log(e);
//     setKey({
//       visible: false,
//     });
//   };

//   const handleCancel = e => {
//     console.log(e);
//     setKey({
//       visible: false,
//     });
//   };

   

    return (
        
        <div>
        <Layout style={{padding:'16px auto'}}>
            <Header style={{background: '#fff'}}>
            <Content style={{padding : '16px auto'}}>
                <Carousel autoplay>
                    <div class="posisi">
                        <img
                            src={image1}
                            style={{maxWidth: '100%'}}
                            />
                        
                    </div>
                    <div class="posisi">
                        <img
                            src={image3}
                            style={{maxWidth: '100%'}}
                            />
                    </div>
                    <div class="posisi">
                        <img
                            src={image2}
                            style={{maxWidth: '100%'}}
                            />
                    </div>
                </Carousel>
                <Button shape="round"  style={{backgroundColor:'white'}}>
                     <h4>Upcoming</h4>
                </Button>
                <div className="site-card-wrapper">
                    <Row gutter={[16, 8]}>
                    { cardData.map (data=> (
                    <Col span={6}>
                        <Card hoverable title="" bordered={true} >
                        <img
                            src={data.image}
                            alt="Upcoming"
                            style={{maxWidth: '100%'}}
                        />
                        <Meta title={data.title} style={{paddingTop:"20px"}}/>
                        </Card >
                            {/* <Modal
                            title="Basic Modal"
                            visible={setKey.visible}
                            onOk={setKey.handleOk}
                            >
                            <p>{data.title}</p>
                            </Modal> */}
                    </Col>
                    ))
                    }
                    </Row>
                    
                    </div>
                </Content>
                <Footer style={{backgroundColor:'white' , textAlign: 'center'}}>Kelompok Film ©2020 </Footer>
            </Header>
        </Layout>
        </div>
    );
  }
       
    

        
    


export default Upcoming;