import React from 'react';
import blog_pic2 from '../assets/blog-pic2.jpg';
import blog_ill from '../assets/blog-illustration.jpg'

function DestinationGuides() {
  return (
    <div className='w-full h-[80vh] relative'>
        <div className='absolute w-full h-full bg-black/30 z-10'></div>
        <div className='mx-[64px] mt-[200px] flex absolute z-30'>
           <div>
            <h1 className='text-[40px] font-[600] font-serif text-white drop-shadow-lg'>Paris: The City of Lights</h1>
                <p className='text-white mt-[10px]'>Welcome to the enchanting city of Paris, a timeless destination that<br /> beckons with its romantic ambiance, rich history, and iconic landmarks.</p>
                <p className='text-gray-400 font-[600] mt-[30px]'>Attraction: <span className='text-white italic'>Eiffel Tower, Louvre Museum, Notre-Dame Cathedral </span><i className="ri-more-fill bg-white/30 text-white rounded-full p-1" /></p>  
           </div>
           <div className='w-[300px] bg-white shadow-md rounded ml-[300px]'>
                <img src={blog_ill} alt="" className='rounded w-full' />
                <div className='w-full px-[16px] pb-[8px]'>
                    <h4 className='font-[500] text-[#8b8b8b]'>Transportation</h4>
                    <div className='flex items-center justify-between bg-gray-100 px-[10px] py-[8px] rounded mt-[8px]'>
                        <div className='flex items-center justify-center gap-[10px]'>
                            <i className="ri-train-line text-[18px] border-r-2 border-gray-300 text-[#ff6600] pr-[10px]"></i>
                            <p className='text-[14px] text-[#ff6600] font-[600]'>Metro</p>
                        </div>
                        <i class="ri-arrow-down-s-line text-2xl text-[#ff6600]"></i>
                    </div>
                </div>
           </div>
        </div>
        <img src={blog_pic2} alt="" className='w-full h-full object-cover absolute' />
    </div>
  )
}

export default DestinationGuides