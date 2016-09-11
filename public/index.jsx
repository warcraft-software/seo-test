import React from 'react'

export default class Index extends React.Component {
	render() {
		return (
			<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
				<link rel="stylesheet" href="public/main.css" />
				<title>YourApp.com</title>
			</head>
			<body>
				<div id="page"></div>
				<script src="public/build.js"></script>
			</body>
			</html>
		);
	}
}