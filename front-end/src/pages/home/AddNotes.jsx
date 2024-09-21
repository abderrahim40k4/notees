import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import TagInput from '../../components/inputs/TagInput'
import { MdClose } from 'react-icons/md'
import { IoAlertCircleOutline } from "react-icons/io5";

const AddNotes = ({ noteData, type, onClose }) => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [tags, setTags] = useState([])

    const [error, setError] = useState(null);
    //edit note
    const editNote = async () => {


    }
    //add note
    const addNote = async () => {

    }

    //handle action pf click
    const handleAddNote = () => {
        if (!title) {
            setError("please Give the Note a Title")
            return;
        }
        if (!content) {
            setError("please Enter the note Content")
            return;
        }
        setError("")

        if (type == "edite") {
            editNote()

        }
        if (type == "add") {
            addNote()

        }
    }



    return (
        <div className='relative'>
            <button className="w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-100"
                onClick={onClose}>
                <MdClose className='text-xl text-slate-400' />
            </button>

            <div className="flex flex-col gap-2 ">
                <label htmlFor="" className='input-label'>enter a note Title</label>
                <input type="text"
                    placeholder="Coding at 8AM"
                    className='text-2xl text-slate-900 outline-none'
                    title={title}
                    onChange={({ target }) => { setTitle(target.value) }}
                />

            </div>
            <div className="flex flex-col mt-4 gap-2">
                <label htmlFor="" className='input-label'>enter a note</label>
                <textarea type="text"
                    className='text-sm text-slate-900 outline-none bg-slate-200 p-2 rounded'
                    placeholder='content...'
                    rows={10}
                    value={content}
                    onChange={({ target }) => { setContent(target.value) }}
                />
            </div>

            <div className="mt-3">
                <label htmlFor="" className='input-label'>#Tags</label>
                <TagInput tags={tags} setTags={setTags} />
            </div>
            {error && <p className='text-xs font-medium text-red-500 mt-4 flex items-center'> <IoAlertCircleOutline size={16} className='mx-1' />{error}</p>}
            <button className="btn-primary font-medium mt-5 p-3" onClick={handleAddNote}>ADD</button>
        </div>
    )
}

export default AddNotes