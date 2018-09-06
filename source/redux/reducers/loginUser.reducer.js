// ACTION TYPES
const ADD_PDF_LINK = `ADD_PDF_LINK`

// INITIAL STATE
const initialState = {
  token: ``
}

// REDUCER
export default function (state = initialState, action) {

  const {type, payload} = action

  switch (type) {

  case ADD_PDF_LINK:
    return {
      state: payload
    }

  default:
    return state
  }

}

// ACTION CREATORS
export function test() {
  return dispatch => {
    return dispatch({
      type: `ADD_PDF_LINK`,
      payload: {pdfLink}
    })
  }
}
