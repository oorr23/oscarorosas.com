import "./NavBar.css"
import {ShoppingCartOutlined} from '@ant-design/icons'
import { useNavigate } from "react-router-dom";


const NavBar = ({isCartPage}) => {
  const navigate = useNavigate()
  return (
    <nav className="navbar">
      {<img className="logo" src="https://pbs.twimg.com/media/Ggom8rkXcAAW8Xt?format=jpg&name=large" alt="logo-image"></img>}
      <p className="navbar-heading navbar-icons">oscarorosas.com</p>
      {!isCartPage ? <ShoppingCartOutlined className="navbar-icons" onClick={() => navigate("/Cart")}/>:<div style={{width:"47px"}}></div>}
    </nav>
  );
};

export default NavBar