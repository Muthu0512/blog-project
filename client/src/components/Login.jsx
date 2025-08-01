import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from "../config/firebase"
import {signInWithEmailAndPassword} from "firebase/auth"

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err,setErr]= useState("")

    useEffect(() => {
        
        window.scrollTo(0, 0);
        auth.onAuthStateChanged((user)=>{
            if(user){
                navigate("/home")
            }
        })
    }, [navigate]);

    const handleLogin =  async (e) => {
        e.preventDefault();
        
        // Simulate login process
        console.log('User logged in:', { email, password });
        try{

            await signInWithEmailAndPassword(auth,email,password).then(()=>{
            
            navigate('/home');
        }).catch((error)=>{
            setErr( "Login error plz check email and password and try again")
        })

        // Redirect to homepage/dashboard after login
        // Replace '/home' with your homepage route
       }catch(error){
        console.log(error)
       }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleLogin} className="p-10 bg-white rounded-lg shadow-md" style={{ width: "75%" }}>
                <h2 className="text-2xl font-bold mb-5 text-gray-800">Login</h2>
                <div className="mb-4">
                    <label className="block text-gray-700">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1 p-2 w-full border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="mt-1 p-2 w-full border rounded"
                    />
                </div>
                <p className='text-red-600  my-2' >{err}</p>
                <p className='text-blue-600 cursor-pointer my-2' onClick={() => navigate("/signup")}>New user? Register here</p>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 ease-in-out">
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
