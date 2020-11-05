import React from 'react';

class SearchBar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      term:'',
    };

  }

  onInputChange(term){
    const name = this.props.searchBoxName || undefined;

    this.setState({term});

    if(this.props.onSearchTermChange){
      this.props.onSearchTermChange({name,term})
    }

  }

  render() {
    const name = this.props.searchBoxName || undefined;
    const styling = {};

    return (
      <div className="search-box">
        <input
          name={name}
          className="search-input"
          id="search"
          type="text"
          placeholder="I'm looking for..."
          style={styling}
          value={this.state.term}
          onChange={ (event) => this.onInputChange(event.target.value)}
          onKeyDown={this.props.onKeyDown || null}
        />
        <button type='button' onClick={this.searchTerm || null}>
          Search
        </button>
      </div>
    );
  }
}

export default SearchBar;
