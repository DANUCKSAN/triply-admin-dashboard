import React from 'react'
import { Link } from 'react-router'
import { sidebarItems } from '~/constants'

const NavItems = () => {
  return (
    <div>
        <section className='nav-items'>
            <Link to='/' className='link-logo'>
            <img src='/assets/icons/logo1.png' alt='logo' className='size-[30px]'/>
            <h1>
                Tripzy
            </h1>
            </Link>
            <div className='container'>
              <nav>
                {sidebarItems.map(({id,href,icon,label})=>
                <div>
                  {label}
                </div>
                )}
              </nav>
            </div>
                 </section>
      
    </div>
  )
}

export default NavItems
