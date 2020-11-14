import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import StarStore from './StarStore';
import AdminPage from './AdminPage';
import Header from './Header';
import AlertContainer from './AlertContainer';
import DisabledOverlay from './DisabledOverlay';

import storeItems from './storeItems';

import access from 'safe-access';

import curry from 'lodash/fp/curry';
import findIndex from 'lodash/fp/findIndex';
import find from 'lodash/fp/find';
import filter from 'lodash/fp/filter';
import keyBy from 'lodash/fp/keyBy';
import uuid from 'uuid/v1';

import firebase from './firebaseConfig';
import {getSelectionsForUser, year} from './database';
import 'firebase/auth';

import Fuse from 'fuse.js';

const alertTimeout = 3000;
const keyByName = keyBy('name');

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
      filteredItems: items.map(i => i.name)
    };
  }

  freshItems = () => {
    return storeItems[year]
      .map(this.assignZeroQty)
      .map(this.calculateCost)
      .sort((i1, i2) => i2.cost - i1.cost || i1.name.localeCompare(i2.name))
      .map(this.addSetQuantityFunction)
      .map(this.addMakeSelectionFunction)
      .map(this.addUpchargeFunction);
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
    getSelectionsForUser(uid).then(doc => {
      const selections = doc.get(year);
      if(selections) {
        this.mergeItemsFromDb(selections);
      }
    })
    .finally(() => this.setEnabled(true));

  }

  setSearch = (search) => {
    const searchResult = search ? this.fuse.search(search) : this.state.items;

    const filteredItems = searchResult.map(i => i.name);
    
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
    makeSelection : this.createMakeSelectionFunction(index)
  }, item);
  addUpchargeFunction = (item, index) => Object.assign({
    calculateUpcharge : this.createCalculateUpchargeFuncion(index)
  }, item)

  createCalculateUpchargeFuncion = (index) => () => {
    const { options } = this.state.items[index];
    if(!options) return 0;
    return options.reduce((v, option) => {
        if(!option.upcharge || !option.selections) return v;
        const indexes = option.selections
            .map(s => option.options.indexOf(s));
        const upcharge = indexes.map(i => option.upcharge[i])
        const price = upcharge.reduce((tot, num) => tot + num, 0) + v;
        return price;
    }, 0);
  }
  createMakeSelectionFunction = (index) => {
    return (optionName, optionSelection) =>  {
      const options = access(this.state.items, `[${index}].options`);
      if(!options) {
        return;
      }
      const item = this.state.items[index];
      const optionIndex = findIndex({ name : optionName })(options);
      if(optionIndex >= 0) {
        const selections = options[optionIndex].selections || [];
        const newSelections = [ ...selections];
        const maxSelections = (item.qty || 1) * (options[optionIndex].count || 1);
        while(newSelections.length >= maxSelections) {
          newSelections.pop();
        }
        newSelections.unshift(optionSelection);
        const updatedOption = Object.assign({}, options[optionIndex], { selections : newSelections});
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
    const itemsByName = keyByName(this.state.items);

    const items = this.state.filteredItems.map(name => itemsByName[name]);

    return (
      <Router>
        <div>
          {disabledOverlay}
          <Header search={this.state.search} setSearch={this.setSearch} items={this.state.items} addAlert={this.addAlert} user={this.state.user} />        
          <AlertContainer alerts={this.state.alerts} />
          <Switch>
            <Route path="/admin"><AdminPage /></Route>
            <Route path="/"><StarStore items={items} enabled={this.state.enabled}/></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
