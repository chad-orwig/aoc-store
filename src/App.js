import React from 'react';

import Container from 'react-bootstrap/Container';
import StarStore from './StarStore.js';
import items from './storeItems';
import axios from 'axios';

const scrapeUrl = "https://us-central1-aoc-store.cloudfunctions.net/scrapeMetadata";
const amazonUrl = "https://www.amazon.com/Asmodee-SKR01-Skull/dp/B00GYDLY8E/ref=pd_bxgy_21_img_3/145-1576982-6284002";

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
