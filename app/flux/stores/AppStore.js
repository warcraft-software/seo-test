import AppDispatcher  from '../dispatcher/AppDispatcher.js';
import System  from '../constants/System.js';
import {EventEmitter} from 'events';
import assign         from 'object-assign';

let CHANGE_EVENT = 'change';

/*
  -------- Example for Stores --------
*/

let _exampleStore = {
  number: ''
};

/* METHODS */
  let exampleStoreMethod = (theNumber) => {
    _exampleStore.number = theNumber;
  };

  
let AppStore = assign({}, EventEmitter.prototype, {
  /*============= DEFAULT =================*/
    emitChange: function() {
      this.emit(CHANGE_EVENT);
    },

    /**
     * @param {function} callback
     */
    addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
    },

    /**
     * @param {function} callback
     */
    removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    }
  /*============= DEFAULT =================*/
});


/* NOTIFICATIONS */
AppStore = assign({}, AppStore, {
  /**
   * Get the data from the store.
   * @return {data}
   */
  getExampleStore: function() {
    return _exampleStore;
  }
});


AppDispatcher.register(function(action) {
  switch(action.actionType) {
    /*
      -------- Example for actions Calls --------
    */
      case System.EXAMPLE_CONSTANT:
        exampleStoreMethod(action.number);
        AppStore.emitChange();
      break;
    default:
      // no op
  }
});

module.exports = AppStore;