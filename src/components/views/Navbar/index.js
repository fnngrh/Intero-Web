import React ,{ useState } from 'react';
import { Menu, Layout} from 'antd';
import { Link } from 'react-router-dom';
import './navbar.css'
import {
  PlayCircleTwoTone ,
  RightCircleTwoTone,
  CopyrightCircleTwoTone,
  CreditCardTwoTone,
  InstagramFilled,
  TwitterCircleFilled ,
} from '@ant-design/icons';
const { Header } = Layout;
const { SubMenu } = Menu;


const Navbar = () =>{
  const initialKeyState = {
    current: 'play',
  }

  const [NPlaying, setKey] = useState (initialKeyState)

  const handleClick = NPlaying => {
    console.log('click ', NPlaying);
    setKey({
      current: NPlaying.current,
    })
  }
  
    return (
      <Layout>
        <Header style={{background: '#fff'}}>
        <div>
        <Menu mode="horizontal">
          <Menu.Item key="nowshowing" >
        <PlayCircleTwoTone twoToneColor="#eb2f96"/>
            <Link to="">Now Showing</Link> 
          </Menu.Item>
          <Menu.Item key="comingsoon">
        <RightCircleTwoTone twoToneColor="#eb2f96"/>
          <Link to="/">Upcoming</Link>
          </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <CreditCardTwoTone twoToneColor="#eb2f96" />
              Buy Ticket
            </span>
          }
        >
          <Menu.ItemGroup>
            <Menu.Item key="instagram">
            <InstagramFilled />
              <a href="https://instagram.com/fnngrh">
                  Instagram
              </a>
            </Menu.Item>
            <Menu.Item key="twitter">
            <TwitterCircleFilled />
              <a href="https://twitter.com/lohkoqq">
                  Twitter
              </a>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="about">
        <CopyrightCircleTwoTone twoToneColor="#eb2f96" />
          <a href="https://github.com/fanianugroho">
            About Us
          </a>
        </Menu.Item>
      </Menu>
      </div>
      </Header>
      </Layout>
  
    );
  }


export default Navbar;
