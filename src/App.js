import React from 'react';

import Container from 'react-bootstrap/Container';
import StarStore from './StarStore.js';
import items from './storeItems';
import got from 'got';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items
    };
  }

  render() {
    return (
      <Container>
        <h2>AoC Star Store</h2>
        <StarStore items={this.state.items}/>
      </Container>
    );
  }
}
export default App;
