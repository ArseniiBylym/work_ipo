export const capitalizeFirstLetter = string => string[0].toUpperCase() + string.slice(1)

export const dataToSubmit = state => {
  return new Promise((resolve, reject) => {
    const data = {}

    for (const key in state) {
      if (state.hasOwnProperty(key) && state[key].value) {
        data[key] = state[key].value
      }
    }

    resolve(data)
  })
}