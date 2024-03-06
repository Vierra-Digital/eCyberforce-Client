import React from 'react'

type SideProps = {
    onClick: () => void
}
export default function Sidebar({onClick}: SideProps) {
  return (
    <div className='fixed top-0 left-0 h-full w-full 2sm:hidden flex items-start bg-white z-[9999]'>
    <div className='flex items-center gap-20 px-[40px]'>
        <h1>SideBar</h1>
        <button onClick={onClick}>
            <span className='text-3xl'>&times;</span>
        </button>
    </div>
    </div>
  )
}
