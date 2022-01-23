import React from "react";
import { Layout,  Menu,Typography, Button } from "antd";
import logo from '../Images/logo192.png'

const { Header } = Layout;

const Navbar=()=> {
  return (
    <Header style={{background:'#FFBD00',position: "fixed", zIndex: 1, width: "100%", display:'flex', flexDirection:'row', top:'0'}}>
      <div className="logo" style={{ marginRight:'1.5rem'}}><img src={logo} style={{width:'2rem'}}/></div>
      <Menu mode="horizontal" style={{background:'#FFBD00'}}>
        <Menu.Item key='1'>About Us</Menu.Item>
        <Menu.Item key='2'>Rehome a Pet</Menu.Item>
        <Menu.Item key='3'>Lost and Found</Menu.Item>
        <Menu.Item key='4'>Pet Care and Health</Menu.Item>
        <Menu.Item key='5'>Shop</Menu.Item>
      </Menu>
      <div className="btn-login" style={{position: "absolute", right: '0', marginRight:'1.5rem'}}>
        <Button type="link" block>Login</Button>
      </div>
    </Header>
  );
}

export default Navbar;
