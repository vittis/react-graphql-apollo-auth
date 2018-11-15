import * as jwtDecode from 'jwt-decode';

export const AUTH_TOKEN = 'auth-token';

export const isExpired = token => {
  if (token === null) {
    return true;
  }
  let isExp = false;
  const decodedToken = jwtDecode(token);

  const currentTime = new Date().getTime() / 1000;
  if (currentTime > decodedToken.exp) {
    isExp = true;
  }
  return isExp;
};

export const saveUserData = token => {
  localStorage.setItem(AUTH_TOKEN, token);
};
