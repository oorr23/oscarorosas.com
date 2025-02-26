import "./NavBar.css"
import {ShoppingCartOutlined} from '@ant-design/icons'
import { useNavigate } from "react-router-dom";


const NavBar = () => {
  const navigate = useNavigate()
  return (
    <nav className="navbar">
      {<img className="logo" src="https://pbs.twimg.com/media/Ggom8rkXcAAW8Xt?format=jpg&name=large" alt="logo-image"></img>}
      <p className="navbar-heading navbar-icons">oscarorosas.com</p>
      <ShoppingCartOutlined className="navbar-icons" onClick={() => navigate("/Cart")}/>
    </nav>
  );
};

export default NavBar