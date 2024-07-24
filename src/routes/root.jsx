import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <footer></footer>
    </div>
  )
}

export default Root