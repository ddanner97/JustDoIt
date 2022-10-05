import React from 'react'

function Sidebar() {
  return (
    <div className="sidebar">
        <ul className="sidebar__generic">
            <li>
                <span>
                    <i className="py-2.5 indent-8 fa-solid fa-inbox text-3xl"></i>
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