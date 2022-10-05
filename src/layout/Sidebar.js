import React from 'react'

function Sidebar() {
  return (
    <div className="sidebar bg-slate-100 h-screen lg:px-20">
        <ul className="sidebar__generic mx-auto">
            <li>
                <span>
                    <i className="fa-solid fa-inbox"></i>
                </span>
                <span>Inbox</span>
            </li>

            <li>
                <span>
                    <i class="fa-regular fa-calendar"></i> 
                </span>
                <span>Today</span>
            </li>

            <li>
                <span>
                    <i class="fa-solid fa-calendar-days"></i>   
                </span>
                <span>Next 7 days</span>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar