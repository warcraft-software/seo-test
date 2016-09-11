import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Component from './public/index.jsx'

const app = express()
const port = process.env.PORT || 3000
const App = renderToString(<Component />)

process.env.NODE_ENV = 'development';

app.use('/public', express.static('public'))
.get('/', (req, res) => {
	res.send(App)
}).listen(port, () => {
	console.log(`[APP] Listening on port => ${port}`)
})