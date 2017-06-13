import axios from 'axios';

const LOGIN_USER = 'LOGIN_USER';

const initialState = {
  user: {}
};

// normal action creators
export const loginUser = user => ({
  type: LOGIN_USER, user
});

// thunks
export const fetchUser = (email, password) => {
  axios.post('/api/users/login', { email, password })
    .then(res => res.data)
    .then(user => loginUser(user))
    .catch(err => console.error(err));
};

export const signupUser = (email, password) => {
  console.log('axios signupUser hit', email, password)
  axios.post('/api/users/signup', { email, password })
    .then(res => res.data)
    .then(user => loginUser(user))
    .catch(err => console.error(err));
}

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case LOGIN_USER:
      newState.user = action.user;
    break;
    default:
      return state;
  }
  return newState;
}
