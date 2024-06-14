import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';

function Logout() {
    const [authUser , setauthUser] = useAuth();
    const handleLogout = ()=>{
        try {
            setauthUser({
                ...authUser,
                user:null
            });
            localStorage.removeItem("Users");
            toast.success("Logout successfully!");
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } catch (error) {
            toast.error(error.message);
        }
    }
  return (
    <div>
      <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLogout} >Logout</button>
    </div>
  )
}

export default Logout
