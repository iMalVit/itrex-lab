export const setAccessToken = (token: string) => localStorage.setItem('access_token', token);
export const setRefreshToken = (token: string) => localStorage.setItem('refresh_token', token);

export const getAccessToken = () => localStorage.getItem('access_token');
export const getRefreshToken = () => localStorage.getItem('refresh_token');
