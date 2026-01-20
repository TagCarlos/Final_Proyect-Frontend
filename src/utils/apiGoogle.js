class GoogleAuth {
    constructor(clientId) {
        this.clientId = clientId;
    }

    // Inicializar el cliente (Reemplaza a gapi.auth2.init)
    initializeGoogleAuth(callback) {
        window.google.accounts.id.initialize({
            client_id: this.clientId,
            callback: (response) => {
                // El perfil ahora viene codificado en el JWT (response.credential)
                const payload = this._decodeJwt(response.credential);
                callback({
                    id: payload.sub,
                    name: payload.name,
                    email: payload.email,
                    imageUrl: payload.picture,
                    token: response.credential
                });
            }
        });
    }

    // Renderizar el botón oficial (Reemplaza a signInWithGoogle programático)
    renderButton(elementId) {
        window.google.accounts.id.renderButton(
            document.getElementById(elementId),
            { theme: "outline", size: "large" }
        );
    }

    // Cerrar sesión
    signOut() {
        window.google.accounts.id.disableAutoSelect();
        // Nota: GIS no tiene un "signOut" global que limpie cookies de Google, 
        // simplemente deshabilita la selección automática en tu web.
    }

    _decodeJwt(token) {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        return JSON.parse(window.atob(base64));
    }
}

const GOOGLE_CLIENT_ID = "72175321368-gb1ln7nmteqjo1cd4ftj4506hqscrkss.apps.googleusercontent.com";
const googleAuth = new GoogleAuth(GOOGLE_CLIENT_ID);
export default googleAuth;