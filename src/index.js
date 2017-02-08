import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

import { createStore } from 'redux';
import messagesReducer from './reducers/messagesReducer'

import {addMessage} from './actions/index'

const store = createStore(messagesReducer)

store.dispatch(addMessage({content: 'Hello', sender: "message-other"}))
store.dispatch(addMessage({content: 'Anyone want to play?', sender: "message-other"}))

ReactDOM.render(<App store={store}/>, document.getElementById('container'))
