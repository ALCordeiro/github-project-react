import axios from "axios";

const url = "https://api.github.com/users/";

export function fetchRepos(username) {
  return function(dispatch) {
    axios
      .get(`${url}${username}/repos`)
      .then(response => {
        dispatch({ type: "GET_REPOS", payload: response.data });
      })
      .catch(err => {
        dispatch({ type: "GET_REPOS_ERR", payload: err });
      });
  };
}
