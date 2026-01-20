import { useState } from "react";
import React from "react";
import googleAuth from "../utils/apiGoogle";

function GoogleLoginButton({ onLoginSuccess, onLoginError }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setIsLoading(true);

    try {
      const userData = await googleAuth.signInWithGoogle();
      console.log("Usuario autenticado:", userData);

      // Llamar a la función de éxito pasada como prop
      onLoginSuccess(userData);
    } catch (error) {
      console.error("Error en login con Google:", error);
      onLoginError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      className="google-login-btn"
      onClick={handleGoogleLogin}
      disabled={isLoading}
    >
      {isLoading ? (
        <span>Iniciando sesión...</span>
      ) : (
        <>
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google"
            className="google-logo"
          />
          <span className="google-span">Inicia sesion con Google</span>
        </>
      )}
    </button>
  );
}

export default GoogleLoginButton;
