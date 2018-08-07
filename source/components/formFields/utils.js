export const capitalizeFirstLetter = string => string[0].toUpperCase() + string.slice(1)

const getType = data => Object.prototype.toString.call(data).slice(8, -1).toLowerCase()

export const dataToSubmit = state => {
  return new Promise((resolve, reject) => {
    const data = {}

    for (const key in state) {
      if (state.hasOwnProperty(key)) {

        if (getType(state[key]) === `array`) {
          data[key] = state[key].map(item => {
            return {
              firstName: item.firstName.value,
              lastName: item.lastName.value,
              position: item.position.value,
              linkFacebook: item.linkFacebook.value,
              linkLinkedIn: item.linkLinkedIn.value,
              photo: item.photo.value,
            }
          })

        } else {
          if (key === `download`) continue
          if (key === `confirmPassword`) continue
          if (key === `confirmCompanyPassword`) continue
          data[key] = state[key].value
        }

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