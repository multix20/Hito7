import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext'; // Asegúrate de que la ruta sea correcta
import Login from './Login'; // Asegúrate de que Login esté en la misma carpeta

const LoginRedirect = () => {
    const { token } = useContext(UserContext);

    // Si el usuario ya está autenticado, redirigir al home
    if (token) {
        return <Navigate to="/" />;
    }

    // De lo contrario, renderiza la página de inicio de sesión
    return <Login />;
};

export default LoginRedirect;
