import "./Header.css";
import { RxAvatar } from "react-icons/rx";

const Header = () => {
  return (
    <header className="dashboard-header">
        <img src="/img/logo-original-transparente.png" alt="Logo Hosty House" className="header-logo"/>
        <div className="data-user-container">
            <span><RxAvatar /></span><p>Manuel Guerrero</p>
        </div>
    </header>
  )
}

export default Header