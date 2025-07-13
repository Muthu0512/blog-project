import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import auth from "../../config/firebase"
import { signOut } from 'firebase/auth'
function Navbar() {
    const navigate = useNavigate()
    const [logsts,setLogsts]=useState(false)
    useEffect(()=>{
      auth.onAuthStateChanged(function(user){
        if(user){
          setLogsts(true)
        }
        else{
          setLogsts(false)
        }
      })
    },[])
function logout(){
  signOut(auth).then(()=>{
    navigate("/login")

  })

}
    
  return (
    <div className='py-5 flex justify-between items-center'>
        <h2 className='text-2xl font-bold'>Personal</h2>
        <div className='flex items-center'>
            <Link className='list-none px-5' to={"/home"}>Home</Link>
            <Link className='list-none px-5' to={"/blogs"}>Blogs</Link>
            <Link className='list-none px-5'>About</Link>

            {
              logsts?<button className='button-style hidden md:block' onClick={logout}>LogOut</button>:
              <button className='button-style hidden md:block' onClick={()=>navigate("/login")}>Login</button>
            }
        </div>
    </div>
  )
}

export default Navbar