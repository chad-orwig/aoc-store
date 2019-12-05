import React from 'react';

import StarStore from './StarStore';
import Header from './Header';
import AlertContainer from './AlertContainer';
import DisabledOverlay from './DisabledOverlay';

import storeItems from './storeItems';

import access from 'safe-access';

import curry from 'lodash/fp/curry';
import findIndex from 'lodash/fp/findIndex';
import find from 'lodash/fp/find';
import filter from 'lodash/fp/filter';
import uuid from 'uuid/v1';

import firebase from './firebaseConfig';
import 'firebase/auth';
import 'firebase/firestore';

import Fuse from 'fuse.js';

const alertTimeout = 3000;

const db = firebase.firestore();

class App extends React.Component {
  constructor() {
    super();
    const items = this.freshItems()

    const options = {
      keys: ['name', 'cost'],
      threshold: 0.4
    };
    this.fuse = new Fuse(items, options);

    this.state = {
      items,
      alerts : [],
      user : undefined,
      enabled : true,
      search : '',
      filteredItems: new Set(items.map(i => i.name))
    };
  }

  freshItems = () => {
    return storeItems
      .map(this.assignZeroQty)
      .map(this.calculateCost)
      .sort((i1, i2) => i2.cost - i1.cost || i1.name.localeCompare(i2.name))
      .map(this.addSetQuantityFunction)
      .map(this.addMakeSelectionFunction);
  }

  mergeItemsFromDb = (itemsFromDb) => {
    itemsFromDb.forEach(itemFromDb => {
      const item = find({name : itemFromDb.name})(this.state.items);
      if(item) {
        item.setQty(itemFromDb.qty);
        (itemFromDb.options || []).forEach(optionFromDb => {
          item.makeSelection(optionFromDb.name, optionFromDb.selection);
        })
      }
    })
  }

  checkForSelections = (uid) => {
    this.setEnabled(false);
    db.collection('selections').doc(uid).get().then(doc => {
      const selections = doc.get('selections');
      if(selections) {
        this.mergeItemsFromDb(selections);
      }
    })
    .finally(() => this.setEnabled(true));

  }

  setSearch = (search) => {
    const searchResult = search ? this.fuse.search(search) : this.state.items;

    const filteredItems = new Set(searchResult.map(i => i.name));
    
    this.setState({
      search,
      filteredItems
    });
  };

  setUser = (user) => {
    this.setState({user});
    if(user) {
      this.checkForSelections(user.uid);
    }
    else {
      this.setState({ items : this.freshItems() });
    }
  };
  setEnabled = (enabled) => this.setState({enabled});

  removeAlert = (idToRemove) => {
    const alerts = filter(({id}) => id !== idToRemove)(this.state.alerts);
    this.setState({alerts});
}

  addAlert = ({ heading, message, variant}) => {
    const id = uuid();
    this.setState((prevState) => ({
      alerts : [...prevState.alerts, { heading, message, variant, id }]
    }));
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
  
    this.setState((prevState) => {
      const updated = this.mergeUpdateAtIndex(prevState[stateName], updateObject, index);
      return {[stateName] : updated }
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

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(this.setUser);
  }
  
  render() {
    const disabledOverlay = this.state.enabled ? '' : <DisabledOverlay />
    const items = this.state.items.filter(i => this.state.filteredItems.has(i.name));

    return (
      <div>
        {disabledOverlay}
        <Header search={this.state.search} setSearch={this.setSearch} items={this.state.items} addAlert={this.addAlert} user={this.state.user} />        
        <AlertContainer alerts={this.state.alerts} />
        <StarStore items={items} enabled={this.state.enabled}/>
      </div>
    );
  }
}
export default App;
