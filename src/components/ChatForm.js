import React from 'react'

import {addMessage} from '../actions/index'

class ChatForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {message: ''}
  }

  handleInputChange(event){
    this.setState({
      message: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    let action = addMessage({content: this.state.message, sender: "message-self"})
    this.props.store.dispatch( action )
    this.setState({message: ''})
  }

  render() {
    return (
      <div className="input-box">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' onChange={this.handleInputChange.bind(this)} value={this.state.message}/>
          <button type='submit'>Send</button>
        </form>
      </div>
    )
  }
}

export default ChatForm
