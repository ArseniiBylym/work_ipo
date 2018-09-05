// // ACTION TYPES
// const GET_PAGE_DATA = `GET_PAGE_DATA`
//
// // INITIAL STATE
// const initialState = {
//   userType: 'enterpreneur',
//   userId: '1',
// }
//
// // REDUCER
// export default function (pageData = initialState, action) {
//
//   const {type, payload} = action
//
//   switch (type) {
//
//     case GET_PAGE_DATA:
//       return payload
//
//     default:
//       return pageData
//   }
//
// }
//
// // ACTION CREATORS
// export function getPageContent(lang, path) {
//
//   return function (dispatch) {
//     fetch(`http://192.168.88.170:3000/${path}`, {
//       method: `GET`,
//       headers: {
//         'language': lang
//       }
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw Error(response.statusText)
//         }
//         if (response.status >= 400) {
//           throw Error(`Cannot get data`)
//         }
//         return response
//       })
//       .then(response => response.json())
//       .then(jsonData => dispatch({type: GET_PAGE_DATA, payload: jsonData.data})
//       )
//       .catch(error => console.error(error.message))
//   }
// }

const axios = require('axios');
import store from '../index';
import {history} from '../../history';

// ACTION TYPES
const GET_PAGE_DATA = `GET_PAGE_DATA`

// INITIAL STATE
const initialState = {
  // investor or enterpreneur
  userType: 'enterpreneur',
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

    case 'SIGN_UP': {

      return {
        ...pageData,
        userType: action.user,
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
        let response = await axios.get(`http://34.199.42.221:3000/${path}`, {
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

export function signUp(user) {
  return dispatch => {

    let newPath;

    dispatch({type: 'SIGN_UP', user})
    if(user === 'investor') {
      newPath = 'dash/investor/1/projects/';
    } else if(user === 'enterpreneur') {
      newPath = 'dash/enterpreneur/1/projects';
    }

    const hs = history.push(newPath);
  }
}

export function resetPageContent() {
  return dispatch => {
    return dispatch({type: 'RESET_PAGE_CONTENT'})
  }
}
