import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const InputPassword = ({ title, onChange, value }) => {
    const [isShowPass, setIsSowPass] = useState(false)
    const toggalChange = () => {
        setIsSowPass(!isShowPass)
    }
    return (
        <div className="flex items-center bg-transparent border-[1.5px] rounded px-5 mb-3">
            <input value={value} onChange={onChange} type={isShowPass ? "text":"password"} placeholder={title || "Password"}
            className='w-full bg-transparent py-3 mr-3 rounded outline-none text-sm '
            />
           {
            isShowPass ?  <FaRegEye 
            size={22}
            className='text-primary cursor-pointer' 
            onClick={()=>toggalChange()}
            />:
            <FaRegEyeSlash 
            size={22}
            className='text-primary/50 cursor-pointer' 
            onClick={()=>toggalChange()}
            />
           }
        </div>
    )
}

export default InputPassword