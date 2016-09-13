// Import libraries
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, NotFoundRoute, useRouterHistory } from 'react-router'
import { createHashHistory, createHistory } from 'history'

// delete hash element into URL
const appHistory = useRouterHistory(createHistory)({
	queryKey: false
})

// Components
import Header from './components/header.jsx';
import Home from './views/home.jsx';

class App extends React.Component {
	render() {
		return (
			<div id="AppMain">
				<Header />
				<div className="containerPage">
					{this.props.children}
				</div>
			</div>
		);
	}
}

ReactDOM.render(
  <Router history={appHistory}>
		<Route component={App}>
			<Route path="/"  component={Home} />
		</Route>
	</Router>,
	document.getElementById('page')
)