import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext'; // Asegúrate de que la ruta sea correcta
import Register from './Register'; // Asegúrate de que Register esté en la misma carpeta

const RegisterRedirect = () => {
    const { token } = useContext(UserContext);

    // Si el usuario ya está autenticado, redirigir al home
    if (token) {
        return <Navigate to="/" />;
    }

    // De lo contrario, renderiza la página de registro
    return <Register />;
};

export default RegisterRedirect;
