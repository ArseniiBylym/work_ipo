export function logout() {
  return dispatch => {
    return dispatch({type: 'LOGOUT'});
  }
}
