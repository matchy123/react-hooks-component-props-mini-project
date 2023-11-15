import React from 'react'
import logo from '../assets/logo'

function About({blogData}) {
  return (
    <div>
        <aside>
            <img src={blogData.image} placeholder= "https://via.placeholder.com/215" alt={logo}/>
            <p>{blogData.about}</p>
        </aside>
    </div>
  )
}

export default About