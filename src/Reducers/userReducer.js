export default function reducer(state = { user: {id: null, name: null}, fetching: false, error: null, fetched: false }, action) {
  switch (action.type) {
    case "GET_USER": {
      return { ...state, fetching: true };
    }
  }

  return state;
}
