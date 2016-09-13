import AppDispatcher from '../dispatcher/AppDispatcher.js';
import System from '../constants/System.js';


let AppActions = {
  /* 
    -------- Example for actions --------
  */

  exampleAction:(number) => {
    AppDispatcher.dispatch({
      actionType: System.EXAMPLE_CONSTANT,
      number: number
    });
  }
};

module.exports = AppActions;