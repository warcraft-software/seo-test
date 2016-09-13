import React from 'react';
import AppActions from '../flux/actions/AppActions.js';

export default class Header extends React.Component {
	constructor(props) {
    super(props);

    //Flux methods
    this.myAlert = this.myAlert.bind(this);
    this.i = 0;
  }

  myAlert(){
  	AppActions.exampleAction(this.i++);
  }

	render() {
		return (
		  <div>
		  	<button onClick={this.myAlert}>
		  		ALERT FROM STORE	 
		  	</button>	 
		  </div>
		);
	}
}