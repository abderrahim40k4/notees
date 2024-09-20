
import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'
import InputPassword from '../../components/inputs/InputPassword'
import { validateEmail } from '../../utils/helper'



const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    
    const handleSignUp = async (event) => {
        event.preventDefault()
        if (name.length < 4) {
            setError("Please enter a valid name")
            return;
        }

        if (!validateEmail(email)) {
            setError("Please enter a valid email address")
            return;
        }
        if (password.length < 8) {
            setError("Please enter a valid password")
            return;
        }

        // Add your login logic here
        setError(" ")
    }
  return (
    <>
            <Navbar/>
            <div className="flex items-center justify-center mt-28">
                <div className="w-96 border rounded bg-white px-7 py-10">
                    <form action="" onSubmit={handleSignUp}>
                        <h4 className="text-2xl mb-7 font-syne font-semibold">Sign Up </h4>

                        <input 
                            type="name" 
                            name="name" 
                            id="name" 
                            placeholder='name' 
                            className='input-box' 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                        />
                        
                        <input 
                            type="email" 
                            name="Email" 
                            id="email" 
                            placeholder='Email' 
                            className='input-box' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />

                        <InputPassword 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        {error && <p className='text-red-500 text-xs pb-1'>{error}</p>}
                        
                        <button type="submit" className="btn-primary">Log in</button>
                        
                        <p className='text-sm text-center mt-4 font-syne'>
                            already Have account?{" "}
                            <Link to={"/log-in"} className='font-medium text-primary underline font-syne'>
                                Log In
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
  )
}

export default Signup