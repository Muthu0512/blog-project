import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {createUserWithEmailAndPassword,signOut} from "firebase/auth"
import auth from "../config/firebase.js"
function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [newUser,setNewUser]=useState(false)
    const navigate = useNavigate(); // Hook from React Router for navigation



     useEffect(()=>{
             auth.onAuthStateChanged((user)=>{
            if(user&&!newUser){
                navigate("/home")
            }
            else{
                navigate("/signup")
            }
        })
        },[navigate])
    const handleSubmit =  (e) => {
        e.preventDefault();

       

        try{
            
        // Check if the passwords match
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        createUserWithEmailAndPassword(auth,email,password).then(async(res)=>{
            console.log(res)
            setNewUser(true)
            await signOut(auth)
         

                navigate('/login'); // Replace '/login' with your login page route
         

        }).catch((err)=>{
            console.log("failed to add user",err)
        })

        // Simulate user registration process
        console.log('User registered:', { email, password });
        // After registration, redirect to the login page
        } catch(error){
            console.log(error)
        }

    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="p-10 bg-white rounded-lg shadow-lg" style={{ width: "70%" }}>
                <h2 className="text-2xl font-bold mb-5 text-gray-800">Sign In</h2>
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
                <div className="mb-4">
                    <label className="block text-gray-700">Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="mt-1 p-2 w-full border rounded"
                    />
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                </div>
                <p className='text-blue-600 cursor-pointer my-2' onClick={() => navigate("/login")}> Already have an account? Login here</p>
                <button type="submit" className="bg-orange-400 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-200 ease-in-out">
                    Register
                </button>
            </form>
        </div>
    );
}

export default Signup;
