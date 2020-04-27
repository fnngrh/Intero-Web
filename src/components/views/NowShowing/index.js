import React , {Component} from 'react';
import { Layout, Row, Col, Card, Button,Modal} from 'antd';
import { Carousel } from 'antd';
import "./nowshowing.css"
const { Content, Header,Footer } = Layout;
const { Meta } = Card;




class NowShowing extends Component{
    


    render(){

        const cardData = [
            {
                title : "Birds of Prey",
                image : require(`../../images/poster/bop.jpg`),
                sinopsis : "jajkshajkhjkashsajkhsjkshajhs",
            },
            {
                title : "Milea: Suara dari Dilan",
                image : require(`../../images/poster/milea.jpg`),
                sinopsis : "jajkshajkhjkashsajkhsjkshajhs",
            },
            {
                title : "The Invisible Man",
                image : require(`../../images/poster/tim.jpg`),
                sinopsis : "jajkshajkhjkashsajkhsjkshajhs",
            },
            {
                title : "Sebelum Iblis Menjemput Ayat 2",
                image : require(`../../images/poster/sim.jpg`),
                sinopsis : "jajkshajkhjkashsajkhsjkshajhs",
            },
            {
                title : "Teman Tapi Menikah 2",
                image : require(`../../images/poster/ttm2.jpg`),
                sinopsis : "jajkshajkhjkashsajkhsjkshajhs",
            },
            {
                title : "Toko Barang Mantan",
                image : require(`../../images/poster/tbm.jpg`),
                sinopsis : "jajkshajkhjkashsajkhsjkshajhs",
            },
            {
                title : "Fantasy Island",
                image : require(`../../images/poster/fa.jpg`),
                sinopsis : "jajkshajkhjkashsajkhsjkshajhs",
            },
            {
                title : "The King's Man",
                image : require(`../../images/poster/km.jpg`),
                sinopsis : "jajkshajkhjkashsajkhsjkshajhs",
            },
        ]
        
        const image1 = require(`../../images/carousel/tbm.jpg`);
        const image2 = require(`../../images/carousel/ttm.jpg`);
        const image3 = require(`../../images/carousel/tim.jpg`);

        function info() {
            Modal.info({
              title: 'Detail Film',
              content: (
                <div>
                  <p>tst</p>
                </div>
                
              ),
              onOk() {},
            });
          }
    
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
                    { cardData.map (data=> (
                    <Col span={6}>
                        <Card hoverable title="" bordered={true} onClick={info}>
                        <img
                            src={data.image}
                            alt="NowShowing"
                            style={{maxWidth: '100%'}}
                        />
                        <Meta title={data.title} style={{paddingTop:"20px"}}/>
                        </Card >
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
  }
       

export default NowShowing;