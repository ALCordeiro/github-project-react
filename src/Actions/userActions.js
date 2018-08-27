import axios from "axios";

export function getUser() {
  return function(dispatch) {
    axios
      .get("http://api.github.com/users/mvmjacobs")
      .then(response => {
        dispatch({ type: "GET_USER", payload: response.data });
      })
      .catch(err => {
        dispatch({ type: "GET_USER_ERR", payload: err });
      });
  };
}
