class GoogleAuth {
    constructor(clientId) {
        this.clientId = clientId;
    }

    // Inicializar Google Auth
    async initializeGoogleAuth() {
        return new Promise((resolve) => {
            window.gapi.load('auth2', () => {
                window.gapi.auth2.init({
                    client_id: this.clientId,
                }).then(() => {
                    resolve(window.gapi.auth2.getAuthInstance());
                });
            });
        });
    }

    // Iniciar sesión con Google
    async signInWithGoogle() {
        try {
            const authInstance = await this.initializeGoogleAuth();
            const user = await authInstance.signIn();
            const profile = user.getBasicProfile();

            return {
                id: profile.getId(),
                name: profile.getName(),
                email: profile.getEmail(),
                imageUrl: profile.getImageUrl(),
                token: user.getAuthResponse().id_token
            };
        } catch (error) {
            throw new Error('Error al iniciar sesión con Google');
        }
    }

    // Cerrar sesión
    async signOut() {
        const authInstance = await this.initializeGoogleAuth();
        return authInstance.signOut();
    }
}

// Tu Client ID de Google (lo obtienes del paso 1)
const GOOGLE_CLIENT_ID = "721753213668-gb1ln7nmteqjo1cd4ftj4506hqscrkss.apps.googleusercontent.com";
const googleAuth = new GoogleAuth(GOOGLE_CLIENT_ID);

export default googleAuth;