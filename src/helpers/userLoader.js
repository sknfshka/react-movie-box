export function userExists(login, password) {
  return login && password && login === 'admin' && password === 'admin';
}