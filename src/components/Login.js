import GoogleLoginButton from "./GoogleLoginButton";
import { useState } from "react";

function Login() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    const handleLoginSuccess = (userData) => {
        setUser(userData);
        setError('');
        console.log('Login exitoso:', userData);

        // Aquí puedes guardar el token en localStorage
        localStorage.setItem('googleToken', userData.token);
        localStorage.setItem('userData', JSON.stringify(userData));

        // Redirigir o actualizar el estado de la app
    };

    const handleLoginError = (errorMessage) => {
        setError(errorMessage);
        setUser(null);
    };

    const handleLogout = async () => {
        try {
            await googleAuth.signOut();
            setUser(null);
            localStorage.removeItem('googleToken');
            localStorage.removeItem('userData');
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    return (
        <div className="login-container">
            <h2>Iniciar Sesión</h2>

            {error && (
                <div className="error-message">
                    {error}
                </div>
            )}

            {user ? (
                <div className="user-info">
                    <h3>¡Bienvenido, {user.name}!</h3>
                    <p>Email: {user.email}</p>
                    <img src={user.imageUrl} alt="Avatar" className="user-avatar" />
                    <button onClick={handleLogout} className="logout-btn">
                        Cerrar Sesión
                    </button>
                </div>
            ) : (
                <GoogleLoginButton
                    onLoginSuccess={handleLoginSuccess}
                    onLoginError={handleLoginError}
                />
            )}
        </div>
    );
}

export default Login;


