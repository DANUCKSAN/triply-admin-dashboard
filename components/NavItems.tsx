import React from 'react'
import { Link, NavLink, useLoaderData, useNavigate } from 'react-router'
import { logoutUser } from '~/appwrite/auth'
import { sidebarItems } from '~/constants'
import { cn } from '~/lib/utils'

const NavItems = ({handleClick}:{handleClick?:()=>void}) => {
const user=useLoaderData();
const navigate=useNavigate();

const handleLogout=async()=>{
  await logoutUser();
  navigate('/sign-in');
}
  
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
                  <NavLink to={href} key={id}>
                    {({isActive}:{isActive:boolean})=>(
                     <div className={cn('group nav-item',{'bg-primary-100 !text-white':isActive})}
                     onClick={handleClick}
                     >
                      <img 
                      src={icon}
                      alt={label}
                      className={`group-hover:brightness-0 size-0 group-hover:invert ${isActive ? 'brightness-0 invert':'text-dark-200'}`}
                      />
                      {label}
                 </div> 
                     
                      
                    )}
                  </NavLink>
                </div>
                )}
                
              </nav>
              <footer className='nav-footer'>
                <img src={user?.imageUrl || 'assets/images/david.webg'} alt={user?.name || 'david'} referrerPolicy='no-referrer'/>
                 <article>
                <h2>{user?.name}</h2>
                <p>{user?.email}</p>
              </article>

              <button onClick={handleLogout} className='cursor-pointer'
              
              >
                 <img 
             src='/assets/icons/logout.svg'
             alt='logout'
             className='size-6'/>
              </button>
             
            
              </footer>
            </div>
                 </section>

      
    </div>
  )
}


export default NavItems
