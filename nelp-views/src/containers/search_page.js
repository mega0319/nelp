import React from 'react'
import '../styles/main.css'
import SearchForm from '../components/search_form'
import SearchResults from './search_results'
import { connect } from 'react-redux'

class SearchPage extends React.Component {

  render() {
    return(
      <div className='landing'>
        <SearchForm />
        <SearchResults />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {results: state.results}
}

export default connect(mapStateToProps)(SearchPage)
