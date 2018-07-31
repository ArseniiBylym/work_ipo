import message from  './validate.messages'

export const validate = (value, rules) => {

  let errors = []

  rules.forEach(rule => {

    switch (rule) {

    case `required`:
      !value ? errors.push(message.required) : null
      break

    case `email`:
      // eslint-disable-next-line
      !/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(value) ? errors.push(message.email) : null
      break

    case `text`:
      !/^[0-9a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(value) ? errors.push(message.text) : null
      break

    case `maxText`:
      (value.length > 255) ? errors.push(message.maxText) : null
      break

    case `minText`:
      (value.length < 8) ? errors.push(message.minText) : null
      break

    case `lowercase`:
      !/[a-z]+/g.test(value) ? errors.push(message.lowercase) : null
      break

    case `uppercase`:
      !/[A-Z]+/g.test(value) ? errors.push(message.uppercase) : null
      break

    case `number`:
      !/[0-9]+/g.test(value) ? errors.push(message.number) : null
      break

    case `phone`:
      !/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(value) ? errors.push(message.phone) : null
      break

    case `accountNumber`:
      !/^\d{1,30}$/.test(value) ? errors.push(message.accountNumber) : null
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