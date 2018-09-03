export default function reducer(
  state = { repos: [], fetching: false, error: null, fetched: false },
  action
) {
  switch (action.type) {
    case "GET_REPOS": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        repos: action.payload,
        loading: false
      };
    }
    default:
      return state;
  }
}
