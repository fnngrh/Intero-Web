import React , {Component} from 'react';
import { Layout, Row, Col, Card, Button} from 'antd';
import axios from 'axios';
import { Carousel } from 'antd';
import "./upcoming.css"
const { Content, Header,Footer } = Layout;
const { Meta } = Card;



class Upcoming extends Component{ 

      state = {
        film : [],
    }
    
    componentDidMount () {
        this.getFilmData();
    }
    
    getFilmData = () => {
        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=5c3d8d8a6d3844bc331ef5ec6e8e6f01&language=en-US&page=1`)
          .then(res => {
            this.setState({ film : res.data.result });
          })
    }
   
render(){
    
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
                    { this.state.film.map (data=> 
                    <Col span={6}>
                        <Card hoverable title="" bordered={true} >
                        <img
                            src={data.poster_path}
                            alt="Upcoming"
                            style={{maxWidth: '100%'}}
                        />
                        <Meta title={data.original_title} style={{paddingTop:"20px"}}/>
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
  }
       
    

        
    


export default Upcoming;