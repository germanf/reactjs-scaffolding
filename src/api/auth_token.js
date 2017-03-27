export const storeToken = token => window.localStorage.setItem('token', token);

export const getToken = () => window.localStorage.getItem('token');

export const clearToken = () => window.localStorage.removeItem('token');

export const userIsAuthenticated = () => typeof window.localStorage.getItem('token') === 'string';
