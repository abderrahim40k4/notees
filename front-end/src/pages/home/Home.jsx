import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import NoteCard from '../../components/cards/NoteCard'
import {MdAdd} from "react-icons/md"

const Home = () => {
    return (
        <>
            <Navbar/>
            <div className="container mx-auto">
                <div className="grid grid-cols-3 gap-4 mt-8">
                <NoteCard 
                title="coding on today " 
                date="20-09-2024" 
                tags="#coding" 
                content="coding all day long from wekin up till slip with max possible "
                isPinnd={true}
                onDelete={()=>{}}
                onEdit={()=>{}}
                onPinNote={()=>{}}
                />
                </div>
            </div>
            <button className="w-16 h-16 flex items-center justify-center bg-primary hover:bg-blue-700 rounded-xl right-10 bottom-10 absolute" onClick={()=>{}}>
                <MdAdd className="text-[32px] text-white"/>
            </button>
        </>
    )
}

export default Home