import React, { Component } from 'react'
import Messages from './Messages'
import ChatForm from './ChatForm'

class ChatApp extends React.Component {

  render() {
    return (
      <div className="chat-box">
        < Messages store={ this.props.store } />
        < ChatForm store={ this.props.store } />
      </div>
    )
  }
}

export default ChatApp
