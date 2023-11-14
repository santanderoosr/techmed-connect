import Logo from "../../assets/images/logprincipal.png";

import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__containerImg">
        <img src={Logo} alt="" className="header__img" />
      </div>

      <ul className="header__ul">
        <li className="header__li"><a href="#">Inicio</a></li>
        <li className="header__li"><a href="#">Cadastre-se</a></li>
        <li className="header__li"><a href="#">Sobre Nos</a></li>
        <li className="header__li"><a href="#">Contato</a></li>
        <li className="header__li"><a href="#">login</a></li>
      </ul>
    </header>
  )
}

