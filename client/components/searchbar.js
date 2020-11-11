import React from 'react';

class SearchBar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      term:'',
    };

  }

  onInputChange(term) {
    this.setState({term});

    if(this.props.onSearchTermChange){
      this.props.onSearchTermChange(term)
    }

  }

  render() {
    const styling = {};

    return (
      <div className="search-box">
        <input
          className="search-input"
          id="search"
          type="text"
          placeholder="I'm looking for..."
          style={styling}
          value={this.state.term}
          onChange={ (event) => this.onInputChange(event.target.value)}
          onKeyDown={this.props.onKeyDown || null}
        />
      </div>
    );
  }
}

export default SearchBar;
