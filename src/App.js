import React from 'react';

import Container from 'react-bootstrap/Container';
import StarStore from './StarStore.js';
import storeItems from './storeItems.js';

import curry from 'lodash/fp/curry';

class App extends React.Component {
  constructor() {
    super();
    const items = storeItems
      .map(this.assignZeroQty)
      .map(this.addSetQuantityFunction);

    this.state = {
      items
    };
  }

  assignZeroQty = (item) => Object.assign({ qty : 0 }, item);

  mergeUpdateAtIndex = (array, update, index) => array.map((item, i) => i === index ? Object.assign({}, item, update) : item);

  updatePropertyAtIndex = (stateName, propertyName, propertyValue, index) => {
    const updateObject = {
      [propertyName] : propertyValue
    };
    const updated = this.mergeUpdateAtIndex(this.state[stateName], updateObject, index);
    this.setState({
      [stateName] : updated
    });
  };

  updatePropertyAtIndexCurried = curry(this.updatePropertyAtIndex);

  setQuantityAtIndex = this.updatePropertyAtIndexCurried('items', 'qty');

  addSetQuantityFunction = (item, index) => Object.assign({
      setQty : this.setQuantityAtIndex(curry.placeholder,index)
    }, item);

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
