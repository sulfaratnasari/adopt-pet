import React from "react";
import { Layout,  Menu,Typography, Button } from "antd";
import { useNavigate } from "react-router-dom"
import logo from '../Images/logo192.png'

const { Header } = Layout;

const Navbar=()=> {
  const navigate = useNavigate()
  const navBar= [
    {
      id:'1',
      title:'About Us',
      path:'/aboutus',
      cName:'nav-text'
    },
    {
      id:'2',
      title:'Rehome a Pet',
      path:'/rehomepet',
      cName:'nav-text'
    },
    {
      id:'3',
      title:'Lost and Found',
      path:'/lostandfound',
      cName:'nav-text'
    },
    {
      id:'4',
      title:'Pet Care and Health',
      path:'/',
      cName:'nav-text'
    },
    {
      id:'1',
      title:'Shope',
      path:'/',
      cName:'nav-text'
    },
  ]
  
  const handleLoginBtn = ()=>{
    navigate('/login')
  }
  
  return (
    <Header style={{background:'#FFBD00',position: "fixed", zIndex: 1, width: "100%", display:'flex', flexDirection:'row', top:'0'}}>
      <div className="logo" style={{ marginRight:'1.5rem'}}><img src={logo} style={{width:'2rem'}}/></div>
      <Menu mode="horizontal" style={{background:'#FFBD00'}}>
        {navBar.map((item)=>{
          const onClick=()=>{
            navigate(item.path)
          }
          return(
            <Menu.Item className={item.cName} key={item.id} onClick={onClick}>{item.title}</Menu.Item>
          )
        })}
        {/* <Menu.Item key='1'>About Us</Menu.Item>
        <Menu.Item key='2'>Rehome a Pet</Menu.Item>
        <Menu.Item key='3'>Lost and Found</Menu.Item>
        <Menu.Item key='4'>Pet Care and Health</Menu.Item>
        <Menu.Item key='5'>Shop</Menu.Item> */}
      </Menu>
      <div className="btn-login" style={{position: "absolute", right: '0', marginRight:'1.5rem'}}>
        <Button type="link" block onClick={handleLoginBtn}>Login</Button>
      </div>
    </Header>
  );
}

export default Navbar;
