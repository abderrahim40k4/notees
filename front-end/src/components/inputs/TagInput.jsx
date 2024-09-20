import React from 'react'
import { MdAdd } from 'react-icons/md'

const TagInput = ({tags, setTags}) => {
  return (
    <div>
        <div className="flex items-center gap-4 mt-3">
            <input type="text" className="text-sm bg-transparent border px-3 py-2 rounded outline-none" placeholder='Add Tags'/>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-primary hover:bg-primary">
                <MdAdd className='text-2xl text-primary hover:text-white'/>
            </button>
        </div>
    </div>
  )
}

export default TagInput