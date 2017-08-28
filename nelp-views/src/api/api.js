import axios from 'axios'

let URL = 'http://localhost:3000/yelp_request'

export default function search(location, term){
  axios.get(URL, {
    params: {
      location: location,
      term: term
    }
  })
  .then( console.log )
}
