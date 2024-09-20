import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'
import InputPassword from '../../components/inputs/InputPassword'
import { validateEmail } from '../../utils/helper'

const Home = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    
    const handleLogin = async (event) => {
        event.preventDefault()

        if (!validateEmail(email)) {
            setError("Please enter a valid email address")
            return;
        }
        if (!password) {
            setError("Please enter a valid password")
            return;
        }

        // Add your login logic here
        setError(" ")
    }
  
    return (
        <>
            <Navbar/>
            <Login/>
        </>
    )
}

export default Home
