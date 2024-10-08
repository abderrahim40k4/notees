import React, { useState } from 'react'
import PfInfo from '../cards/PfInfo'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../search-bar/SearchBar';

const Navbar = () => {
const [searcQurey, setSearchQuiry] = useState("");
    const navigate = useNavigate();
    const onLogout = ()=> {
        navigate("/log-in")
    }
    const handellSearch = ()=>{};
    const onClearSearch = ()=>{
        setSearchQuiry("")
    }
  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
        <h2 className="text-xl text-black font-syne font-medium py-2">Notee</h2>
        <SearchBar value={searcQurey}
        onChange={({target})=>{setSearchQuiry(target.value)}}
        onClearSearch={onClearSearch}
        handellSearch={handellSearch}
        />
        <PfInfo onLogout={onLogout}/>
    </div>
  )
}

export default Navbar