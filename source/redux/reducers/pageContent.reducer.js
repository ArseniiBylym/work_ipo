const axios = require('axios');

// ACTION TYPES
const GET_PAGE_DATA = `GET_PAGE_DATA`

// INITIAL STATE
const initialState = {
  // investor or enterpreneur
  userType: 'investor',
  userId: '1',
}

// REDUCER
export default function (pageData = initialState, action) {

  const {type, payload} = action

  switch (type) {

  case GET_PAGE_DATA:
    return {
      ...pageData,
      ...payload,
    }

    case 'RESET_PAGE_CONTENT': {
      return {
        userType: pageData.userType,
        userId: pageData.userId,
      }
    }

  default:
    return pageData
  }

}

// ACTION CREATORS
export function getPageContent(lang, path) {

  return function (dispatch) {
    return new Promise(async (go, stop) => {
      try {
        let response = await axios.get(`http://192.168.88.170:3000/${path}`, {
          headers: {
            'language': lang
          }
        });
        if (response.status >= 400) throw Error(`Cannot get data`);
        response = response.data;
        return go(dispatch({ type: GET_PAGE_DATA, payload: response.data }));
      } catch (e) {
        console.error(e.message);
        return stop(e);
      };
    });
  }
}

export function resetPageContent() {
  return dispatch => {
    return dispatch({type: 'RESET_PAGE_CONTENT'})
  }
}
