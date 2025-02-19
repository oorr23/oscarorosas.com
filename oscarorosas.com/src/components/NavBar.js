import "./NavBar.css"
import {ShoppingCartOutlined} from '@ant-design/icons'


const NavBar = () => {
  return (
    <nav className="navbar">
      {<img src="#" alt="logo-image"></img>}
     
      <p className="navbar-heading navbar-icons">oscarorosas.com</p>
      <ShoppingCartOutlined className="navbar-icons"/>
    </nav>
  );
};

export default NavBar