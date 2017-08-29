import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { search } from '../actions'

class SearchForm extends Component {
  constructor() {
    super()

    this.state = {
      location: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      location: e.target.value
    })
    console.log(this.state.location)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.search(this.state.location)
  }

  render() {
    return(

      <div className='login-form'>
        <h2 className='search-text'>
          Search
        </h2>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type='text' placeholder='location' value={this.state.location}/>
          <input className='btn' type='submit'/>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ search }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchForm)
