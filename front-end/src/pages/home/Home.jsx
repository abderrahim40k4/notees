import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
   <>
    <Navbar/>

    <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
            <form action="" onSubmit={()=>{}}>
                <h4 className="text-2xl mb-7 font-syne font-semibold">Log in </h4>
                <input type="email" name="Email" id="email" placeholder='Email' className='input-box' />
                <button type="submit" className="btn-primary" >Log in</button>
                <p className='text-sm text-center mt-4 font-syne'>
                    you don't have acou yet ?{""}
                    <Link to={"/sign-up"} className='font-medium text-primary underline font-syne'>Creat Acount</Link>
                </p>
            </form>

        </div>
    </div>
   </>
  )
}

export default Home