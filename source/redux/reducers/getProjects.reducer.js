// ACTION TYPES
const GET_PROJECTS = `GET_PROJECTS`

// INITIAL STATE
const initialState = {
  
}

// REDUCER
export default function (state = initialState, action) {

  const {type, payload} = action

  switch (type) {

  case GET_PROJECTS:
    return payload

  default:
    return state
  }

}

//ACTION CREATORS

export function getAllProjects(lang, path) {

  return function (dispatch) {
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
      .then(jsonData => dispatch({type: GET_PROJECTS, payload: jsonData.data})
      )
      .catch(error => console.error(`---PAGE-PROJECTS-ERROR!!!`, error.message))


  }
}


// export function getAllProjects(lang, path) {

//   return function (dispatch) {
//     fetch(`http://192.168.88.145:3000/${path}`, {
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
//           throw Error(`Cannot get projects`)
//         }

//         return response
//       })
//       .then(response => response.json())
//       .then(jsonData => dispatch({type: GET_PROJECTS, payload: jsonData.data})
//       )
//       .catch(error => console.error(`---PAGE-PROJECTS-ERROR!!!`, error.message))


//   }
// }