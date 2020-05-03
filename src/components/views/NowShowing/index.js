import React from 'react';
import { Layout, Row, Col, Card, Button} from 'antd';
import { Carousel } from 'antd';
import "./nowshowing.css";
import firebase from '../../../firebase';
const { Content, Header,Footer } = Layout;
const { Meta } = Card;


function NowShowing() {
    const [nowshowing, setNowshowing] = React.useState([])

    React.useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore()
            const data = await db.collection("nowshowing").get()
            setNowshowing(data.docs.map(doc => doc.data()))
        }
        fetchData()
    }, [])
        
    const image1 = require(`../../images/carousel/tbm.jpg`);
    const image2 = require(`../../images/carousel/ttm.jpg`);
    const image3 = require(`../../images/carousel/tim.jpg`);
    
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
                     <h4>Now Showing</h4>
                </Button>
                <div className="site-card-wrapper">
                <Row gutter={[16, 8]}>
                    {nowshowing.map(movie =>
                    <Col span={6}>
                        <Card hoverable title="" bordered={true} >
                        <img
                            src={movie.poster}
                            alt="NowShowing"
                            style={{maxWidth: '100%', maxHeight: '300px'}}
                        />
                        <Meta title={movie.title}  style={{paddingTop:"20px"}}/>
                        <Meta title={movie.genre} style={{paddingTop:"20px"}}/>
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
       

export default NowShowing;