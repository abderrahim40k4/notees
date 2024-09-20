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
        <IoMdSearch size={22} className='text-slate-900 font-medium cursor-pointer' onClick={handellSearch} />
        <MdClose  size={22} className='text-slate-900 font-medium cursor-pointer' onClick={onClearSearch} />

        
    </div>
  )
}

export default SearchBar