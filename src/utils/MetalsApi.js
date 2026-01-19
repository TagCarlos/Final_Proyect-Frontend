const API_KEY = 'tu-clave-aqui';
const BASE_URL = 'https://api.metals.live/v1/spot';

export const getMetalPrices = async () => {
    try {
        const response = await fetch(`${BASE_URL}?api_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor');
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};