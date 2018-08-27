// ACTION TYPES
const SET_STATUS = `SET_STATUS`
const CLEAR_STATUS = `CLEAR_STATUS`
const SET_TOUCHED = `SET_TOUCHED`

// INITIAL STATE
const initialState = {
  step1: {
    passed: false,
    touched: false
  },
  step2: {
    passed: false,
    touched: false
  },
  step3: {
    passed: false,
    touched: false
  },
  step4:{
    passed: false,
    touched: false
  },
  step5: {
    passed: false,
    touched: false
  }
}

// REDUCER
export default function (status = initialState, action) {

  const {type, payload} = action

  switch (type) {

  case SET_STATUS:
    return {
      ...status,
      [payload.step]: {
        ...status[payload.step],
        passed: payload.value
      }
    }

  case SET_TOUCHED:
    return {
      ...status,
      [payload.step]: {
        ...status[payload.step],
        touched: true
      }
    }

  case CLEAR_STATUS:
    return {
      step1: {
        passed: false,
        touched: false
      },
      step2: {
        passed: false,
        touched: false
      },
      step3: {
        passed: false,
        touched: false
      },
      step4:{
        passed: false,
        touched: false
      },
      step5: {
        passed: false,
        touched: false
      }
    }

  default:
    return status
  }

}

// ACTION CREATORS
export function setStatus(step, value) {
  return {
    type: SET_STATUS,
    payload: {step, value}
  }
}

export function setTouched(step) {
  return {
    type: SET_TOUCHED,
    payload: {step}
  }
}

export function clearStatus() {
  return {
    type: CLEAR_STATUS
  }
}