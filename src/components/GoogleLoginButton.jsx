import React, { useEffect } from "react";
import googleAuth from "../utils/apiGoogle";

const GoogleLoginButton = ({ onLoginSuccess, onLoginError }) => {
  useEffect(() => {
    // 1. Inicializamos la configuración con el callback de éxito
    googleAuth.initializeGoogleAuth((user) => {
      if (user) {
        onLoginSuccess(user);
      } else {
        // Verificamos que onLoginError exista antes de llamarlo
        if (onLoginError) onLoginError("Error al obtener datos de usuario");
      }
    });

    // 2. Renderizamos el botón oficial en el contenedor
    googleAuth.renderButton("googleButtonContainer");
  }, [onLoginSuccess, onLoginError]);

  return (
    /* Este contenedor es donde Google dibujará el botón automáticamente */
    <div id="googleButtonContainer"></div>
  );
};

export default GoogleLoginButton;
