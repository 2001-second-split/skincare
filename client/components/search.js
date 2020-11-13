import React from 'react'
import {connect} from 'react-redux'
import {logout} from '../store'
// import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom'

import axios from 'axios';

import SearchBar from './searchbar'
import SearchResults from './searchresults'

// import SearchResultsHook from './hooks-searchresults'

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: [],
      searchTerm: ''
    }
  }

  async componentDidMount() {
    const res = await axios.get('/api/ingredients')
    this.setState({ingredients: res.data})
  }

  onSearch(searchTerm) {
    this.setState({searchTerm: searchTerm.toLowerCase()});
  }

  render() {
    return (
      <>
        <h2>What would you like to lookup?</h2>
        <SearchBar onSearchTermChange={(term) => this.onSearch(term)} />
        <br/>
        <SearchResults list={this.state.ingredients} searchTerm={this.state.searchTerm}/>
      </>
    )
  }

}

/* CONTAINER */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Search)

/* PROP TYPES */
Search.propTypes = {

}
