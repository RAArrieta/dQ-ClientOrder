import "./Header.css";
import imgHeader from "../../Img/header.png"

const Header = () => {
  return (
  <header className="header">
    <img className="imgHeader" src={imgHeader} alt="don Quijote Pizzas" />
  </header>
  )
};

export default Header;
