import React from 'react';

import StarStore from './StarStore';
import Header from './Header';
import AlertContainer from './AlertContainer';

import storeItems from './storeItems';

import access from 'safe-access';

import curry from 'lodash/fp/curry';
import findIndex from 'lodash/fp/findIndex';
import filter from 'lodash/fp/filter';
import uuid from 'uuid/v1';

const alertTimeout = 3000;

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
      items,
      alerts : []
    };
  }

  removeAlert = (idToRemove) => {
    const alerts = filter(({id}) => id !== idToRemove)(this.state.alerts);
    this.setState({alerts});
  }

  addAlert = ({ heading, message, variant}) => {
    const id = uuid();
    this.setState({
      alerts : [...this.state.alerts, { heading, message, variant, id }]
    });
    setTimeout(() => this.removeAlert(id), alertTimeout);
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
      <div>
      <Header items={this.state.items} addAlert={this.addAlert}/>
        <AlertContainer alerts={this.state.alerts} />
        <StarStore items={this.state.items}/>
      </div>
    );
  }
}
export default App;
