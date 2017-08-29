export default function(state={}, action) {
  switch (action.type) {
    case 'YELP_FETCH':
      return action.payload.data
    default:
      return state
  }
}
