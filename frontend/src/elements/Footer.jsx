import React from 'react'
import '../elements/styleFooter.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="footer-content">
        <Link style={{textDecoration:'none',color:'white'}} to={'/'}>Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
       <Link style={{textDecoration:'none',color:'white'}}to={'/internship'}>Internship</Link>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
       <Link style={{textDecoration:'none',color:'white'}} to={'/Login'}>Login</Link>

            

       
        </div>
 

    </footer>

    </div>
  )
}

export default Footer
