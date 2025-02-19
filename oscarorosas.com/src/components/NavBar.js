import "./NavBar.css"
import {ShoppingCartOutlined} from '@ant-design/icons'


const NavBar = () => {
  return (
    <nav className="navbar">
      {<img className="logo" src="https://pbs.twimg.com/media/Ggom8rkXcAAW8Xt?format=jpg&name=large" alt="logo-image"></img>}
      <p className="navbar-heading navbar-icons">oscarorosas.com</p>
      <ShoppingCartOutlined className="navbar-icons"/>
    </nav>
  );
};

export default NavBar