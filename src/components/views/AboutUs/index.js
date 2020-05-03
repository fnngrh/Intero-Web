import React ,{Component} from 'react';
import { Layout,Avatar,Row,Col,Button} from 'antd';
import './aboutus.css'
import {InstagramOutlined,GithubOutlined,TwitterOutlined } from '@ant-design/icons';
const { Content, Header,Footer } = Layout;

class AboutUs extends Component{
    render(){

        const Profile = [
            {
                nama : "Ahmad Rifal",
                image : require(`../../images/aboutus/rifal.jpg`),
                instagram : "https://instagram.com/rifalahmd2",
                twitter : "https://twitter.com/kalepalew",
                github : "https://github.com/regalforlyfe"
            },
            {
                nama : "Hani Fania N",
                image : require(`../../images/aboutus/fania.jpeg`),
                instagram : "https://instagram.com/fnngrh",
                twitter : "https://twitter.com/lohkoqq",
                github : "https://github.com/fanianugroho"
            },
            {
                nama : "Khairunnisa",
                image : require(`../../images/aboutus/nisa.jpeg`),
                instagram : "https://instagram.com/khrnisaa24",
                twitter : "https://twitter.com/khairunnisa",
                github : "https://github.com/khairunnisa24"
            }
        ]
        
        return(
            <Layout style={{padding:'16px auto'}}>
            <Header style={{background: '#fff'}}>
                <Button shape="round"  style={{backgroundColor:'white'}}>
                     <h4>About Us</h4>
                </Button>
                <h4 class="font">The Team</h4>
            <Content style={{}}>
                <div class="profil">
                <Row gutter={[32, 16]}>
                { Profile.map (data=> (
                <Col span={8}>
                        <Avatar size={250} src={data.image}/>
                        <h4 class="fontidentitas"> {data.nama}</h4>
                        <h3 class="fontcontact"> Contact Me! <br/>
                        
                            <Button shape="circle"  style={{backgroundColor:'white'}}  >
                            <a href={data.instagram}>
                            <InstagramOutlined />
                            </a>
                            </Button>
                       
                        
                            <Button shape="circle"  style={{backgroundColor:'white'}}>
                            <a href={data.twitter}>
                            <TwitterOutlined />
                            </a>
                            </Button>
                        
                        
                            <Button shape="circle"  style={{backgroundColor:'white'}}>
                            <a href={data.github}>
                            <GithubOutlined />
                            </a>
                            </Button>
                            </h3>
                </Col>
                ))}
                <Col span={8}>
                    
                </Col>
                
                </Row>
                </div>
            </Content>
            <Footer style={{backgroundColor:'white' , textAlign: 'center'}}>Kelompok Film ©2020 </Footer>
            </Header>
            </Layout>
        
        );
    }
}
export default AboutUs;