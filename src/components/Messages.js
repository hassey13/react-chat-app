import React from 'react'

class Messages extends React.Component {

  componentDidMount(){
    this.props.store.subscribe( this.forceUpdate.bind(this) )
  }

  render() {
    const store = this.props.store
    const messages = store.getState()
    return (
      <div className="message-box">
        <ul>
          { messages.map((message, i) => <li key={i} className={message.sender}>{message.content}</li> ) }
        </ul>
      </div>
    )
  }
}

export default Messages
