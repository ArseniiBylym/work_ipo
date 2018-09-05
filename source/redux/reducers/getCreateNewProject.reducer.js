// ACTION TYPES
const CREATE_NEW_PROJECT = `CREATE_NEW_PROJECT`

// INITIAL STATE
const initialState = {
  
}

// REDUCER
export default function (state = initialState, action) {

  const {type, payload} = action

  switch (type) {

  case CREATE_NEW_PROJECT:
    return payload

  default:
    return state
  }

}

//ACTION CREATORS

export function getCreateNewProject(lang, path) {
  console.log('action createor')

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
      .then(jsonData => dispatch({type: CREATE_NEW_PROJECT, payload: jsonData.data})
      )
      .catch(error => console.error(`---CREATE_NEW_PROJECT-ERROR!!!`, error.message))


  }
}