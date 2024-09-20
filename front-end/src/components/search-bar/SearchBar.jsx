import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";

const SearchBar = ({value, onChange, handellSearch, onClearSearch}) => {
  return (
    <div className="w-80 flex items-center px-4 bg-slate-100 rounded-md">
        <input type="text" 
        placeholder='Search Notes'
        className='w-full text-xs bg-transparent py-[11px] outline-none'
        value={value}
        onChange={onChange}
        />
        {
            value && (<MdClose  size={22} className='text-slate-500 font-medium cursor-pointer hover:text-black' onClick={onClearSearch} />)
        }
        <IoMdSearch size={22} className='text-slate-500 font-medium cursor-pointer hover:text-black' onClick={handellSearch} />
        

        
    </div>
  )
}

export default SearchBar