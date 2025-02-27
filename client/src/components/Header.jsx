 import React from 'react'
 import { Link } from 'react-router-dom'
 const Header = () => {
    return(
            <>
            <div>
               <Link to = '/'>Home</Link>
               <Link to = '/about'> About Us</Link>
               <Link to = '/grievance'>Grievance</Link>
            </div>   
            </>
    )
}
export default Header
