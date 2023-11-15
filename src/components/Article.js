import React from 'react'


function Article({name,date, preview}) {
  return (
    <div>
        <h3>{name}</h3>
        <small>{date}|| January 1, 1970 </small>
        <p>{preview}</p>
    </div>
  )
}

export default Article