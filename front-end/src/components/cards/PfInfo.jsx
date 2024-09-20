import React from 'react'
import { getIntails } from '../../utils/helper'

const PfInfo = ({onLogout}) => {
  return (
    <div className="font-roboto flex items-center gap-4">
        <div className=" w-12 h-12 flex items-center justify-center rounded-full text-slate-950 bg-slate-300 font-medium font-roboto cursor-pointer">{
            getIntails()}</div>
        <div className="">
            <p className="text-sm font-roboto font-medium">Abderrahim</p>
            <button className='text-slate-600 underline text-sm' onClick={onLogout}>Logout</button>
        </div>

    </div>
  )
}

export default PfInfo