import React from 'react';
import AppActions from '../flux/actions/AppActions.js';
import AppStore from '../flux/stores/AppStore.js';


/**
 * Retrieve the current Store
 */
var getStates = () => {
  return AppStore.getExampleStore()
};

export default class Home extends React.Component {
	constructor(props) {
    super(props);

    this._onChange = this._onChange.bind(this);

    this.state = getStates();
  }

 componentDidMount() {
    AppStore.addChangeListener(this._onChange);

    AppActions.exampleAction();
    
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
		var view = null;

		view = this.state.data.map(function(v,i){
			return v.map(function(v2,i2){
				return (
				  <div className={"carrousel "+"i-"+i} key={v2.upc+'-'+i2}>
				  	<a href={v2.ProductUrl}>
					  	<div>
					  		{v2.UrlDescription}
					  	</div>
					  	<div>
					  		{v2.upc}
					  	</div>
				  	</a>
				  </div>
				)
			});
		});

		return (
		  <div>
		  	{view}
		  </div>
		);
	}
}