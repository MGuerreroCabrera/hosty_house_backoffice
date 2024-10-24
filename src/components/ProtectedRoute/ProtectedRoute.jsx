import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {  
    // Comprobar que hay token de autenticación
    const isAutenticated = localStorage.getItem("hostyHouseToken");

    console.log("He entrado");

    // Si no hay usuario autenticado redireccionar a login
    if(!isAutenticated){
        return <Navigate to="/"/>;
    }

    // Si hay usuario autenticado renderizar el contenido de la ruta protegida
    return children;
}

export default ProtectedRoute