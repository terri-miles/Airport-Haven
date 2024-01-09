import React, { useState } from 'react';
import logo from '../assets/Airport-haven-logo.png';
import { Link } from 'react-router-dom';

function NavBar() {
    const [menu, setMenu] = useState('home')
  return (
    <div className='flex justify-between items-center px-[32px] py-[25px] bg-transparent w-full z-[100] absolute'>
        <div className="flex justify-center items-center gap-[20px]">
            <img src={logo} alt="logo-icon" className='h-[50px]' />
            <h1 className='text-2xl font-serif font-[600] text-white'><Link to='/'>Airport <span className='font-[300]'>Haven</span></Link></h1>
        </div>
        <div className="flex justify-center items-center gap-[15px]">
            <ul className='flex items-center gap-[20px] text-[14px] font-[400] text-gray-200 mr-[50px] cursor-pointer'>
                <li onClick={() => setMenu('home')}><Link to='/'>Home</Link>{menu === 'home' ? <hr className='h-[3px] w-[80%] mx-auto rounded-md border-none bg-[#ff6600] mt-1' /> : <></>}</li>
                <li onClick={() => setMenu('booking')}>Booking{menu === 'booking' ? <hr className='h-[3px] w-[80%] mx-auto rounded-md border-none bg-[#ff6600] mt-1' /> : <></>}</li>
                <li onClick={() => setMenu('blog')}><Link to='blog'>Blog</Link>{menu === 'blog' ? <hr className='h-[3px] w-[80%] mx-auto rounded-md border-none bg-[#ff6600] mt-1' /> : <></>}</li>
                <li onClick={() => setMenu('contact-us')}><Link to='contact'>Contact Us</Link>{menu === 'contact-us' ? <hr className='h-[3px] w-[80%] mx-auto rounded-md border-none bg-[#ff6600] mt-1' /> : <></>}</li>
            </ul>
            <button className='py-[10px] px-[35px] bg-[#ff6600] text-white rounded-[50px] font-semibold'>Login</button>
        </div>
    </div>
  )
}

export default NavBar