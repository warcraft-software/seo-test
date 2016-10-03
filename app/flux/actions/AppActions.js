import AppDispatcher from '../dispatcher/AppDispatcher.js';
import System from '../constants/System.js';


let AppActions = {
  /* 
    -------- Example for actions --------
  */

  exampleAction:() => {
    AppDispatcher.dispatch({
      actionType: System.EXAMPLE_CONSTANT
    });
  }
};

module.exports = AppActions;