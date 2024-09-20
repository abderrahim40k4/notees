import React from 'react'
import { MdCreate, MdDelete, MdOutlinePushPin } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const NoteCard = ({ title, date, content, tags, isPinnd, onEdit, onDelete, onPinNote }) => {
   

    return (
        <div className="border rounded hover:shadow-xl p-4 bg-white transition-all ease-in-out">
            <div className="flex items-center justify-between">
                <div className="">
                    <h6 className="text-sm font-syne font-medium ">{title}</h6>
                    <span className="text-xs text-slate-500">{date}</span>
                </div>
                <MdOutlinePushPin className={`icon-btn ${isPinnd ? 'text-primary' : 'text-slate-600'}`} onClick={onPinNote} />
            </div>
            <p className=''>{content?.slice(0, 60)}</p>
            <div className="flex justify-between items-center ">
                <div className="text-sm text-slate-500 font-syne">{tags}</div>

                <div className="flex items-center gap-2">
                    <MdCreate
                        className='icon-btn hover:text-green-500'
                        onClick={onEdit}
                    />
                    <MdDelete
                        className='icon-btn hover:text-red-500'
                        onClick={onDelete}
                    />
                </div>
            </div>
        </div>
    )
}

export default NoteCard