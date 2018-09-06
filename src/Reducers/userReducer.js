export default function reducer(
  state = {
    user: [],
    fetching: false,
    error: null,
    fetched: false
  },
  action
) {
  switch (action.type) {
    case "GET_USER": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: action.payload,
        loading: true
      };
    }
    case "GET_USER_SUCESS": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: action.payload,
        loading: false
      };
    }
    default:
      return state;
  }
}
