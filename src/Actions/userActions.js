import axios from "axios";

const url = "https://api.github.com/users/";

export function fetchUser(user) {
  return function(dispatch) {
    dispatch({ type: "GET_USER", payload: user });
    setTimeout(() => {axios.get(`${url}${user}`)
      .then(response => {
         dispatch({ type: "GET_USER_SUCESS", payload: response.data });
      })
      .catch(err => {
        dispatch({ type: "GET_USER_ERR", payload: err });
      });
    }, 1000)
  };
}
