import "./Header.css";
import imgHeader from "../../Img/header.png";

const Header = () => {
  return (
    <div className="header">
      <img className="imgHeader" src={imgHeader} alt="don Quijote Pedidos" />
    </div>
  );
};

export default Header;
