import React from 'react';

import Container from 'react-bootstrap/Container';
import StarStore from './StarStore.js';
import storeItems from './storeItems.js';
import access from 'safe-access';

import curry from 'lodash/fp/curry';
import findIndex from 'lodash/fp/findIndex'

class App extends React.Component {
  constructor() {
    super();
    const items = storeItems
      .map(this.assignZeroQty)
      .map(this.calculateCost)
      .sort((i1, i2) => i2.cost - i1.cost || i1.name.localeCompare(i2.name))
      .map(this.addSetQuantityFunction)
      .map(this.addMakeSelectionFunction);

    this.state = {
      items
    };
  }

  assignZeroQty = (item) => Object.assign({ qty : 0 }, item);

  calculateCost = (item) => Object.assign({
    cost : Math.round((5/9) * Math.pow(72*item.dollar + 121, .5) - (55/9))
  }, item)

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

  setOptionsAtIndex = this.updatePropertyAtIndexCurried('items', 'options');

  addMakeSelectionFunction = (item, index) => Object.assign({
    makeSelection : this.createMakeSelectionFunction(item, index)
  }, item);
  createMakeSelectionFunction = (item, index) => {
    return (optionName, optionSelection) =>  {
      const options = access(this.state.items, `[${index}].options`);
      if(!options) {
        return;
      }
      const optionIndex = findIndex({ name : optionName })(options);
      if(optionIndex >= 0) {
        const updatedOption = Object.assign({}, options[optionIndex], { selection : optionSelection});
        const updatedOptions = this.mergeUpdateAtIndex(options, updatedOption, optionIndex);
        this.setOptionsAtIndex(updatedOptions, index);
      }

    }
  }

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
