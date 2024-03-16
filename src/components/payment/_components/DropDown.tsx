import React from 'react'


export default function DropDown() {
  return (
    <div>
        <div className='border border-[#EAE9F7] rounded-[4px] h-[72px] flex items-center justify-center px-3'>
            <select name="Country" id="select" className='w-full outline-none text-[18px]'>
            <option value="Country">Country</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
            <option value="Australlia">Australlia</option>
            <option value="China">China</option>
            </select>
        </div>
    </div>
  )
}
