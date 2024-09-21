import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import TagInput from '../../components/inputs/TagInput'

const AddNotes = () => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [tags, setTags] = useState([])


  return (
    <div>
        <div className="flex flex-col gap-2 ">
        <label htmlFor="" className='input-label'>enter a note Title</label>
        <input type="text"
        placeholder="Coding at 8AM"
        className='text-2xl text-slate-900 outline-none'
        title={title}
        onChange={({target})=>{setTitle(target.value)}} 
        />

        </div>
        <div className="flex flex-col mt-4 gap-2">
        <label htmlFor="" className='input-label'>enter a note</label>
        <textarea type="text"
        className='text-sm text-slate-900 outline-none bg-slate-200 p-2 rounded'
        placeholder='content...' 
        rows={10}
        value={content}
        onChange={({target})=>{setContent(target.value)}}
        />
        </div>

        <div className="mt-3">
        <label htmlFor="" className='input-label'>#Tags</label>
        <TagInput tags={tags} setTags={setTags}/>
        </div>
       <button className="btn-primary font-medium mt-5 p-3">ADD</button>
    </div>
  )
}

export default AddNotes