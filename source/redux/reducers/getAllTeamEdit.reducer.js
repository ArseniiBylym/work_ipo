// ACTION TYPES
const GET_ALL_TEAM = `GET_ALL_TEAM`

// INITIAL STATE
const initialState = {
  
}

// REDUCER
export default function (state = initialState, action) {

  const {type, payload} = action

  switch (type) {

  case GET_ALL_TEAM:
    return payload

  default:
    return state
  }

}

//ACTION CREATORS

export function getAllTeam(lang, path) {
  console.log('action creator')

  return function (dispatch) {
    console.log('inside action creator')
    fetch(`http://34.199.42.221:3000/${path}`, {
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
          throw Error(`Cannot get projects`)
        }

        return response
      })
      .then(response => response.json())
      .then(jsonData => dispatch({type: GET_ALL_TEAM, payload: jsonData.data})
      )
      .catch(error => console.error(`---ALL-TEAM-EDIT-ERROR!!!`, error.message))


  }
}