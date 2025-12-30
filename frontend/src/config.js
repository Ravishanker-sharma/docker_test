export const getApiUrl = () => {
    const hostname = window.location.hostname;
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
        return 'http://localhost:8000';
    }
    // If accessing from the specific IP, use that IP for the backend too
    return `http://${hostname}:8000`;
};
