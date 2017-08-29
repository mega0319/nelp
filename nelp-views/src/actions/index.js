import axios from 'axios'

let URL = 'http://localhost:3000/yelp_request'

export function search(location, term='restaurant'){
  let response = axios.get(URL, {
    params: {
      location: location,
      term: term
    }
  })

  return {
    type: 'YELP_FETCH',
    payload: response
  }
}
