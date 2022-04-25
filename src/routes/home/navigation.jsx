import React,{Fragment} from 'react'
import {Outlet,Link} from 'react-router-dom'
import './navigation.styles.scss'
import image from './crown.svg'
const Navigation=()=>{
  return(
    <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to="/">
             <div><img src={image} className="logo"/></div> 
            </Link>
            <div className='nav-links-container'>
                 <Link className='nav-link' to="/shop">
                    SHOP
                 </Link>
                 <Link className='nav-link' to="/signin">
                    SIGN IN
                 </Link>
            </div>
        </div>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation