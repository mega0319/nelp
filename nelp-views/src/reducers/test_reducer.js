export default function(state={}, action) {
  switch (action.type) {
    case 'TEST':
    return 'TEST STATE'
    default:
    return state
  }
}
