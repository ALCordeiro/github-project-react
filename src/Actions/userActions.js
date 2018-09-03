import axios from "axios";

const url = "https://api.github.com/users/";

export function fetchUser(user) {
  return function(dispatch) {
    axios.get(`${url}${user}`)
      .then(response => {
        dispatch({ type: "GET_USER", payload: response.data });
      })
      .catch(err => {
        dispatch({ type: "GET_USER_ERR", payload: err });
      });
  };
}
