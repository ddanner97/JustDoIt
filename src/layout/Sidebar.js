import React from 'react'

function Sidebar() {
  return (
    <div className="sidebar bg-slate-100 h-screen 
        px-28
    
        md:px-18 
        
        lg:px-28
    ">
        <ul className="sidebar__generic my-6 md:text-xl">
            <li className='my-4'>
                <span className='mx-2'>
                    <i className="fa-solid fa-inbox"></i>
                </span>
                <span>Inbox</span>
            </li>

            <li className='my-4'>
                <span className='mx-2'>
                    <i class="fa-regular fa-calendar"></i> 
                </span>
                <span>Today</span>
            </li>

            <li className='my-4'>
                <span className='mx-2'>
                    <i class="fa-solid fa-calendar-days"></i>   
                </span>
                <span>Next 7 days</span>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar