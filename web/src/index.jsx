import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { initializeAnalytics } from './analytics'
import './styles.css'

initializeAnalytics()

const mountNode = document.getElementById('app')
ReactDOM.render(<App />, mountNode)
