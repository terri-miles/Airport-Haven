import React from 'react'

function Subscribe() {
  return (
    <div className='mx-[64px] mb-[72px]'>
        <div className='w-full h-[55vh] bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto rounded'>
            <div className='w-full flex flex-col px-[32px] pt-[40px]'>
              <div className='flex justify-between'>
                <h2 className='text-3xl text-white font-[500] mb-[12px] font-serif'>Stay in the Loop!<br /> Subscribe for Exclusive<br /> Offers and Travel Updates.</h2>
                <p className='text-white'>Sign up for our newsletter and be the first to access<br /> exclusive hotel deals, travel tips, and exciting promotions.<br /> Join our community of savvy travelers and embark on a <br /> extraordinary stays!</p>
              </div>
                <div className='flex gap-[30px] my-[20px] mt-[50px]'>
                    <input type="text" className='w-[550px] h-[48px] rounded border-none outline-none px-[10px]' placeholder='Enter your email here!' />
                    <button className='px-[60px] py-[10px] bg-[#ff6600] rounded text-[#3d2616] font-[600]'>Subscribe</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Subscribe