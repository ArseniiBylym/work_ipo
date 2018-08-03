export const capitalizeFirstLetter = string => string[0].toUpperCase() + string.slice(1)

export const dataToSubmit = state => {
  return new Promise((resolve, reject) => {
    const data = {}

    for (const key in state) {
      if (state.hasOwnProperty(key) && state[key].value) {
        if (key === `confirmPassword`) continue
        data[key] = state[key].value
      }
    }

    resolve(data)
  })
}

export const imageToBase64 = image => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(image)
    reader.onload = () => {
      resolve(reader.result)
    }
    reader.onerror = error => {
      reject(error)
    }
  })
}