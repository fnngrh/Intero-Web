import React from 'react';
import { Layout, Row, Col, Card, Button} from 'antd';
import { Carousel } from 'antd';
import "./upcoming.css";
import firebase from '../../../firebase';
const { Content, Header,Footer } = Layout;
const { Meta } = Card;


function Upcoming(){ 

    const [upcoming, setUpcoming] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore()
            const data = await db.collection("upcoming").get()
            setUpcoming(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        };
        fetchData();
    }, []);

    
    const image1 = require(`../../images/carousel/myspy.jpg`);
    const image2 = require(`../../images/carousel/still2.jpg`);
    const image3 = require(`../../images/carousel/teen2.jpg`);

    return (
        
        <div>
        <Layout style={{padding:'16px auto'}}>
            <Header style={{background: '#fff'}}>
            <Content style={{padding : '16px auto'}}>
                <Carousel autoplay>
                    <div class="posisi2">
                        <img
                            src={image1}
                            style={{maxWidth: '100%'}}
                            />
                        
                    </div>
                    <div class="posisi2">
                        <img
                            src={image3}
                            style={{maxWidth: '100%'}}
                            />
                    </div>
                    <div class="posisi2">
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
                    { upcoming.map (data=> 
                    <Col span={6}>
                        <Card hoverable title="" bordered={true} >
                        <img
                            src={data.poster}
                            alt="Upcoming"
                            style={{maxWidth: '100%', maxHeight: '300px'}}
                        />
                        <Meta title={data.title} style={{paddingTop:"20px"}}/>
                        <Meta title={data.releasedate} style={{paddingTop:"20px"}}/>
                        <Meta title={data.genre} style={{paddingTop:"20px"}}/>
                        </Card >
                    </Col>
                    )}
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