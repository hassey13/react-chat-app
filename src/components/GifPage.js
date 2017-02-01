import React from 'react'

import GifShow from './GifShow'
import SearchForm from './SearchForm'

class GifPage extends React.Component {

  constructor(){
    super()
    this.state = {currentGif: 'default value'}
    this.updateGif = this.updateGif.bind(this)
  }

  updateGif(gif){
    console.log(this)
    this.setState({currentGif: gif})
  }

  render(){
    console.log('render was fired in the gifpage!')
    return (
      <div>
        < SearchForm updateGif={ this.updateGif }  dog='Fido' goodQuestions='ruby doo'/>
        < GifShow gif={ this.state.currentGif } />
      </div>
    )
  }
}

export default GifPage
