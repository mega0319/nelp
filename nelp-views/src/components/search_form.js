import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { search } from '../actions'

class SearchForm extends Component {
  constructor() {
    super()

    this.state = {
      location: '',
      type: ''
    }
  }

  handleLocation = (e) => {
    this.setState({
      location: e.target.value
    })
    console.log(this.state.location)
  }

  handleType = (e) => {
    this.setState({
      type: e.target.value
    })
    console.log(this.state.type)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.search(this.state.location, this.state.type)
  }

  render() {
    return(

      <div className='search-form'>
        <img className='animated fadeIn logo' src={require('../images/NELP-01.png')} width='400px' height='150px'/>
        <h2 className='search-text'>
          Search
        </h2>
        <form className='animated slideInUp' onSubmit={this.handleSubmit}>
          <input onChange={this.handleLocation} type='text' placeholder='location' value={this.state.location}/>
          <input onChange={this.handleType} type='text' placeholder='type' value={this.state.type}/>
          <input className='btn' type='submit' value="search"/>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ search }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchForm)
