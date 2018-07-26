import message from  './validate.messages'

export const validate = (value, rules) => {

  let errors = []

  rules.forEach(rule => {

    switch (rule) {

    case `required`:
      !value ? errors.push(message.required) : null
      break

    case `email`:
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? errors.push(message.email) : null
      break

    default:
      return

    }
  })

  return errors
}

export const getValidateRules = (rules, messages = message) => {
  let data = []

  rules.forEach(ruleName => data.push(messages[ruleName]))

  return data
}