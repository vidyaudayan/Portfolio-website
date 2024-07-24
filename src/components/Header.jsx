import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <header className="header" id="header">
  <a href="#" className="logo">
    Portfolio
  </a>
  <nav id="navList">
    <ul>
      <li>
        <Link to={'/'}>Home</Link>
      </li>
      <li>
        <Link to={'/about'}>About</Link>
      </li>
      <li>
        <Link to={'/service'}>Services</Link>
      </li>
      <li>
        <Link to={'/projects'} >Projects</Link>
      </li>
      <li>
        <Link to={'/skill'} >Skill</Link>
      </li>
     
      <li>
        <Link to={'/contact'}>Contact</Link>
      </li>
    </ul>
  </nav>
</header>
    </div>
  )
}

export default Header