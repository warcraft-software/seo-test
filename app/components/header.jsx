import React from 'react';
import AppStore from '../flux/stores/AppStore.js';

/**
 * Retrieve the current Store
 */
let getStates = () => {
  return AppStore.getExampleStore()
};

export default class Header extends React.Component {
	constructor(props) {
    super(props);

    this._onChange = this._onChange.bind(this);

    this.state = getStates();
    console.log(this.state);
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onChange);
    
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
  }

  /**
   * Event handler for 'change' events coming from the AppStore
   */
  _onChange() {
    this.setState(getStates());
  }


	render() {
		return (
		  <div>
		  	{'number: '+this.state.number} 
		  </div>
		);
	}
}