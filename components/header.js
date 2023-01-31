import { deleteLikes } from '@/redux/features/likes/likesSlice';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import React from 'react'
import { useDispatch } from 'react-redux';

const header = () => {

  const dispatch = useDispatch()
  const router = useRouter()
  const logout = () => {
    deleteCookie("token");
    deleteCookie("remember")
    dispatch(deleteLikes())
    router.push('/')
  }

  return (
    <div className='flex justify-between items-center py-6 px-12 bg-header-color shadow-lg'>
      <div className=' bg-header-logo py-3 px-9 rounded-full font-semibold'>
        <span className='text-white text-4xl'>Piton</span>
        <span className=' text-white text-4xl opacity-60'>Shop</span>
      </div>
      <button onClick={() => logout()} className='bg-white text-black py-3 px-7 text-xl rounded-full font-semibold'>Logout</button>
    </div>
  )
}

export default header