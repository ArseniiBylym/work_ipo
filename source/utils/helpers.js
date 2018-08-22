// array to object
export const convertArrayToObject = array => {
  return array.reduce((accumulator, currentValue, index) => {
    accumulator[index] = currentValue
    return accumulator
  }, {})
}

// object to array
export const convertObjectToArray = object => {
  return Object.keys(object).map((key) => object[key])
}