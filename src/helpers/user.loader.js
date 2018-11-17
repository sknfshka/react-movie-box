export function logIn(login, password) {
  return login && password && login === 'admin' && password === 'admin' ? 3231 : undefined;
}