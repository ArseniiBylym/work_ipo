// ACTION TYPES
const GET_PAGE_DATA = `GET_PAGE_DATA`

// INITIAL STATE
const initialState = {

}

// REDUCER
export default function (pageData = initialState, action) {

  const {type, payload} = action

  switch (type) {

  case GET_PAGE_DATA:
    return payload

  default:
    return pageData
  }

}

// ACTION CREATORS
export function getPageContent(lang, path) {

  return function (dispatch) {
    fetch(`http://192.168.88.145:3000/${path}`, {
      method: `GET`,
      headers: {
        'language': lang
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        if (response.status >= 400) {
          throw Error(`Cannot get data`)
        }
        return response
      })
      .then(response => response.json())
      .then(jsonData => dispatch({type: GET_PAGE_DATA, payload: jsonData.data})
      )
      .catch(error => console.error(error.message))
  }
}
