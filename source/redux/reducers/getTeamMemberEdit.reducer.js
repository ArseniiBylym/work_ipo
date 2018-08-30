// ACTION TYPES
const GET_TEAM_MEMBER = `GET_TEAM_MEMBER`

// INITIAL STATE
const initialState = {
  
}

// REDUCER
export default function (state = initialState, action) {

  const {type, payload} = action

  switch (type) {

  case GET_TEAM_MEMBER:
    return payload

  default:
    return state
  }

}

//ACTION CREATORS

export function getTeamMember(lang, path) {
  console.log('action creator')

  return function (dispatch) {
    console.log('inside action creator')
    fetch(`http://192.168.88.170:3000/${path}`, {
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
      .then(jsonData => dispatch({type: GET_TEAM_MEMBER, payload: jsonData.data})
      )
      .catch(error => console.error(`---TEAM-MEMBER-ERROR!!!`, error.message))


  }
}