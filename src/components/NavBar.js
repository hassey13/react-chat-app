import React from 'react'

var NavBar = (props) => {
  return (
    <nav className="navbar navbar-inverse">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">{ props.header }</a>
      </div>
    </nav>)
}

export default NavBar
