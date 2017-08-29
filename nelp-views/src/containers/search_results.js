import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import '../styles/search_results.css'

import InfoCard from '../components/info_card'

class SearchResults extends Component {
  renderCards(item) {
      return <InfoCard key={item.name} properties={item}/>
  }

  render() {
    let cards =  _.map(this.props.results.businesses, this.renderCards)
    return(
      <div className="results-section">
        <ul>
          {cards}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {results: state.results}
}

export default connect(mapStateToProps)(SearchResults)
