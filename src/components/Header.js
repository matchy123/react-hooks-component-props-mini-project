import React from 'react'

function Header(props) {
  return (
    <div>
       <h1> {props.blogData.name}</h1>
    </div>
  )
}

export default Header