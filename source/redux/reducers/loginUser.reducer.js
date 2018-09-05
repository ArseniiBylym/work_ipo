const axios = require('axios');
import { dataToSubmit, formDataToSubmit } from '../../components/formFields/utils';

const LOGIN_USER = 'LOGIN_USER';

const initialState = {
  token: null
};

export default function (state = initialState, action) {
  const {type, payload} = action
  switch (type) {
  case LOGIN_USER:
    return payload
  default:
    return state
  }
};

export function loginUser(data, lang) {
  return function (dispatch) {
    return new Promise(async (go, stop) => {
      try {
        let formatted = await formDataToSubmit({
          ...data,
          email: data.company_email,
          password: data.password,
        });
        let signupResponse = await axios.post('http://192.168.88.170:3000/signupenterpreneur', formatted, {
          headers: {
            'language': lang,
          },
        });
        if (signupResponse.status !== 200) throw Error(signupResponse.statusText);
        if (! signupResponse.data.success) throw Error('NOOO');
        signupResponse = signupResponse.data;
        let loginResponse = await axios.post('http://192.168.88.170:3000/signin', {
          email: data.company_email.value,
          password: data.password.value,
        }, {
          headers: {
            'language': lang,
          },
        });
        loginResponse = loginResponse.data;
        axios.defaults.headers.common['Token'] = loginResponse.token; 
        return go(dispatch({ type: LOGIN_USER, payload: { token: loginResponse.token } }));
      } catch (e) {
        console.error(`---LOGIN-USER-ERROR!!!`, e.message)
        return stop(e);
      };
    });
  }
}