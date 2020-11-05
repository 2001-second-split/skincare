import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

import SearchBar from './searchbar'

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      skincareList: ['Niacinamide', 'Acid', 'Moisturizer'],
    }
  }

  onSearch() {
    console.log('hi')
    // code to retrieve info from server
  }

  render() {
    return (
      <>
        <h2>What would you like to lookup?</h2>
        <SearchBar searchBoxName={"userNameSearch"}
        onSearchTermChange={this.onSearch} />
        {/* <SkincareList list={this.skincareList} /> */}
      </>
    )
  }

}

/**
 * CONTAINER
 */
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

/**
 * PROP TYPES
 */
Search.propTypes = {

}
