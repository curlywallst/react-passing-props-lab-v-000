import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      filters: [],
      fruit: [],
      currentFilter: null,
    }
  }

  componentWillMount() {
    this.fetchFilters();
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  updateFilterCallback = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  render() {
    return(
      <div>
        <FruitBasket
          filter={this.state.currentFilter}
          filters={this.state.filters}
          fruit={this.state.fruit}
          updateFilterCallback={this.updateFilterCallback}
        />
      </div>
    )
  }
}


export default App;
