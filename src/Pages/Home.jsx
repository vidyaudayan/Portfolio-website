import React from 'react'
import Typed from 'typed.js'
import Type from '../components/Type'
import { Link } from 'react-router-dom'
import profileimg from '../assets/profile.jpg'

import { SiGmail } from "react-icons/si";
import LinkedInLink from '../components/Linkdin';
import GitLink from '../components/Github';
import Header from '../components/Header';



const Home = () => {
  return (
    <div>
    
        <section className="home">
  <div className="homeContent">
    <div>
      <h3>Hello, It's me</h3>
      <h1>Vidyamol Udayan</h1>
      <h3>
        And I'm a <Type/>
      </h3>
      <p>
        {" "}
        full stack web developer <br />
        expertise to create interactive user interfaces and  robust server-side applications
      </p>
      <div className="homeSci"> 
     <LinkedInLink/>
     <GitLink/>  
        
        <Link><SiGmail /></Link>
      </div>
      <Link to={'/about'} className="btnBox">
        More About Me
      </Link>
    </div>
    <div>
      <img className='mr-32 ' src={profileimg} alt="" />
    </div>
  </div>
</section>
    </div>
  )
}

export default Home