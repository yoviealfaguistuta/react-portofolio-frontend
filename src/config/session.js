export const getToken = () => {
    return localStorage.getItem('access_token');
}

// remove the token and user from the session storage
export const removeUserSession = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
}

// set the token and user from the session storage
export const setUserSession = (token, user) => {
    localStorage.setItem('access_token', token);
    localStorage.setItem('user', JSON.stringify(user));
}