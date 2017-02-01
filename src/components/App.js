import React from 'react'
import NavBar from './NavBar'

import GifPage from './GifPage'

var App = () => {
  // React.createElement(NavBar, {header: 'Ruby Doo'})
  return (
    <div>
      < NavBar header='Hey Ruby Doo' />
      < GifPage />
    </div>
  )
}

export default App
