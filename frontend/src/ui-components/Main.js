import React from 'react'
import Navbar from '../elements/Navbar'
import Footer from '../elements/Footer'

const Main = (props) => {
  return (
    <div>
        <Navbar/>
        {props.child}
        <br/>
      <Footer/>
    </div>
  )
}

export default Main
