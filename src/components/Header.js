import React from 'react'

function Header(props) {
  return (
    <div className="bg-primary w-full text-white flex flex-row basis-0 py-1 px-1 md:text-2xl">
    <div className="grow">
        <button onClick={() => props.viewSidebar ? props.setViewSideBar(false) : props.setViewSideBar(true)}>
        <i class="fa-solid fa-bars mx-2 py-1 px-1"></i>
        </button>
    </div>
    <div className='flex '>
        <button className="mx-2" onClick={() => props.viewForm ? props.setViewForm(false) : props.setViewForm(true)} ><i className="fa-regular fa-plus py-1 px-1"></i></button>
        <button className="mx-2"><i class="fa-regular fa-bell py-1 px-1"></i></button>
        <div className=' mx-2 py-1 px-1 border border-emerald-300 border-2  bg-gray-100 rounded-full text-emerald-300'>DD</div>
    </div>
    </div>
  )
}

export default Header