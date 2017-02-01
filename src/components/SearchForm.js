import React from 'react'

class SearchForm extends React.Component {

  constructor(){
    super()
    this.state = {query: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    console.log('Form submitted!!')
    this.props.updateGif( this.state.query )
  }

  handleChange(event) {
    console.log(event.target.value)
    // DO NOT DO
    // this.state.query = event.target.value
    // DO IT LIKE THIS
    this.setState({query: event.target.value })
  }

  // setState(newState){
  // THIS IS WHAT SET STATE DOES, MORE OR LESS - DO NOT IMPLEMENT
  //   this.state = Object.assign(this.state, newState)
  //   this.render()
  // }


  render(){
    console.log('Render was fired in the form')
    console.log(this.props)
    return (
      <div className='col-md-4'>
        <h2>{ this.state.query }</h2>
        <form onSubmit={ this.handleSubmit }>
          <input type='text' value={ this.state.query } onChange={this.handleChange} />
          <input type='submit' />
        </form>
      </div>)
  }

}

export default SearchForm
