export function addMessage(message){
  return {
    type: 'ADD_MESSAGE',
    payload: {content: message.content, sender: message.sender}
  }
}
