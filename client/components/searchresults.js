import React from 'react';

class SearchResults extends React.Component {
  // constructor(props){
  //   super(props);

  //   // const list = this.props.list;
  // }


  render() {
  const { list, searchTerm } = this.props;
  let visibleList = searchTerm ? list.filter(ingredient => ingredient.name.toLowerCase().includes(searchTerm)) : list;

    return (
      <div >
        {visibleList.length ? visibleList.map(ingredient => (
          <div key={ingredient.id} >
            {ingredient.name}
          </div>))
        : (list.length ? 'No ingredients found' : 'Loading ingredients list...')
        }
      </div>
    );
  }
}

export default SearchResults;
