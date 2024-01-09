import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='w-full'>
        <div className='flex flex-col items-center bg-gray-600 py-[32px]'>
            <div className='flex items-center gap-[50px] cursor-pointer border-b-2 border-gray-600 pb-[24px] px-[40px]'>
                <i className="text-[40px] text-white ri-facebook-circle-fill"></i>
                <i className="text-[40px] text-white ri-instagram-fill"></i>
                <i className="text-[40px] text-white ri-threads-fill"></i>
                <i className="text-[40px] text-white ri-twitter-x-fill"></i>
            </div>
            <div className="flex items-center mt-[24px]">
                <ul className='flex gap-[64px] text-gray-400 text-[14px] font-[500] cursor-pointer'>
                    <li className='hover:text-white'><Link to={'/'}>Home</Link></li>
                    <li className='hover:text-white'>Booking</li>
                    <li className='hover:text-white'>Blog</li>
                    <li className='hover:text-white'>Contact Us</li>
                </ul>
            </div>
            <div className='flex justify-between items-center gap-[200px] mt-[64px] text-[14px] text-gray-400'>
                <p>A property of <span className='text-white'>Airport Haven</span></p>
                <p>Created and designed by: <span className='text-white'>Moedith Tech</span></p>
            </div>
        </div>
    </div>
  )
}

export default Footer