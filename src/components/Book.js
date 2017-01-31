import React from 'react'

export default function Book (props) {
  return <div className='something'>{props.title}</div>
  // React.createElement
}


// module.exports = Book -- the browserify/node way
