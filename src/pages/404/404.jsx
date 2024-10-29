import { Link } from "react-router-dom";
import "./404.css";

const NotFound = () => {
  return (
    <div className="message-container">
      <h1 className="title">404 ¡¡ UPSSS !!</h1>
      <p>Parece que tenemos un problema con la página que estás buscando</p>
      <Link to="/" className="link-to-home">Iniciar sesión en la aplicación</Link>
    </div>
  )
}

export default NotFound;