import { useForm } from "react-hook-form";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  // Inicializar useForm para manejar errores
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Estado para controlar la respuesta erronea de la petición
  const [loginError, setLoginError] = useState("");

  // Estado para controlar la visibilidad de la contraseña
  const [showPassword, setShowPassword] = useState(false);
  
  // Importar useNavigate para la navegación al dashboard.
  const navigate = useNavigate();

  // Función que enviará los datos del formulario
  const  onSubmit = async (data) => {
    try {
      // Hacer la petición de Login al backend
      const response = await fetch("http://localhost:3000/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      });

      // Comprobar si la petición ha ido bien
      if(response.status === 200) {
        try {
          const res = await response.json();
          // Guardar el token en localStorage
          localStorage.setItem("hostyHouseToken", res.data.token);
          navigate("/dashboard");
        } catch (error) {
          setLoginError("Ha ocurrido un error inesperado. Prueba de nuevo más tarde");
        }        
      }else{
        // Si no obtenemos respuesta 200 convertir respuesta a JSON para mostrar error
        const res = await response.json();
        setLoginError("Usuario y/o contraseña incorrectos");
      }
    }catch (error) {
      setLoginError("Ha ocurrido un error inesperado. Prueba de nuevo más tarde");
    }    
  }

  return (
    <div className="login-container">
        <header>
            <img src="img/logo-original.webp" alt="logo hosty house" />
            <hr></hr>
            <h6>Inicio de sesión</h6>
        </header>
        <main>
            <form onSubmit={ handleSubmit(onSubmit) }>
              {/* EMAIL */}
              <div className="input-field">                
                {/* Crear campo de email obligatorio */}
                <input {...register("email", {required: true, pattern: /^\S+@\S+$/i})} placeholder="" className={errors.email ? "input-error" : ""}/>
                <label className={errors.email ? "label-error" : ""}>Correo electrónico</label>
                <img src="img/icons/mail.png" className="form-icon" />
              </div>
              {/* CONTRASEÑA */}
              <div className="input-field">
                {/* Crear campo de password obligatorio */}
                <input type={showPassword ? "text" : "password"} {...register("password", {required: true})} placeholder="" className={errors.password ? "input-error" : ""}/>
                <label className={errors.password ? "label-error" : ""}>Contraseña</label>
                <img 
                src={showPassword ? "img/icons/eye-open.png" : "img/icons/eye-close.png"} 
                alt="toggle password visibility" 
                onClick={() => setShowPassword(!showPassword)}
                className="form-icon" />
              </div>
              <div className="fp-container">
                <Link to="/forgot-password" >Olvidé mi contraseña</Link>              
              </div>
              <div className="input-field">
                <button type="submit">Iniciar sesión</button>
              </div>
              {/* Control de errores de conexión o datos incorrectos */}
              {loginError && <div className="error-container">
                <p className="error-message">{loginError}</p>
              </div>}
                            
            </form>            
        </main>
        <footer>
          <p>Manuel Guerrero Cabrera &copy; 2024</p>
        </footer>
    </div>
  )
}

export default Login