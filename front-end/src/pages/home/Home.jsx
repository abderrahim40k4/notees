import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import NoteCard from '../../components/cards/NoteCard'
import {MdAdd} from "react-icons/md"
import { useNavigate } from 'react-router-dom'
import AddNotes from './AddNotes'
import Modal from "react-modal"

const Home = () => {
    const [openAddEditNote, setOpenAddEditNote] = useState({
        isShow:false,
        type:"add",
        data:null,
    });
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
            <button className="w-16 h-16 flex items-center justify-center bg-primary hover:bg-blue-700 rounded-xl right-10 bottom-10 absolute" 
            onClick={()=>{setOpenAddEditNote({isShow: true, type:"add" , data:null,})}}>
                <MdAdd className="text-[32px] text-white"/>
            </button>

          <Modal
          isOpen={openAddEditNote.isShow}
          onRequestClose={()=>{}}
          style={{
            overlay:{
                background:"rgba(0,0,0,0.2)"
            }
          }}
          contentLabel=''
          className="w-[40%] max-h-3/4 bg-white mx-auto p-5 overflow-scroll mt-14"
          >

            <AddNotes/>
          </Modal>
        </>
    )
}

export default Home