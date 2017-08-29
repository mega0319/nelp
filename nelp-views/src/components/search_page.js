import React from 'react'
import '../styles/login.css'
import SearchForm from './search_form'
import { connect } from 'react-redux'

class SearchPage extends React.Component {

  render() {
    return(
      <div className='login'>
        <SearchForm />
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {results: state.results}
}

export default connect(mapStateToProps)(SearchPage)
