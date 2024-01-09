import React from 'react'
import map_illust from '../assets/map-illustration.jpg'

function MapDirection() {
  return (
    <div className='mx-[64px] py-[56px]'>
      <h2 className='text-[36px] text-center font-medium leading-tight'>Navigate with Ease: Find Your<br /> Way to Comfort and Convenience</h2>
      <div className='grid grid-cols-3 gap-5'>
        <img src={map_illust} alt="" className='col-span-2' />
        <div className='mt-[90px]'>
          <h3 className='text-[24px] font-semibold tracking-[5px]'>Featuring</h3>
          <hr className='bg-orange-400 border-none h-[4px] mt-2 w-[250px] rounded'/>
          <div className='mt-[16px]'>
            <div className='flex items-center gap-[6px]'>
              <i className="ri-bus-fill px-3 py-2 bg-blue-200 rounded-full text-blue-700"></i>
              <p className='font-medium text-gray-500 text-[14px]'>Airport Shuttle Services.</p>
            </div>
            <div className='flex items-center gap-[6px] mt-[8px]'>
              <i className="ri-bus-2-fill px-3 py-2 bg-[#964B00]/20 rounded-full text-[#964B00]/70"></i>
              <p className='font-medium text-gray-500 text-[14px]'>Public Transportation.</p>
            </div>
            <div className='flex items-center gap-[6px] mt-[8px]'>
              <i className="ri-taxi-fill px-3 py-2 bg-[#FF0000]/20 rounded-full text-[#FF0000]/70"></i>
              <p className='font-medium text-gray-500 text-[14px]'>Taxi Services.</p>
            </div>
            <div className='flex items-center gap-[6px] mt-[8px]'>
              <i className="ri-sailboat-fill px-3 py-2 bg-[#008000]/20 rounded-full text-[#008000]/70"></i>
              <p className='font-medium text-gray-500 text-[14px]'>Ferry or boat Services.</p>
            </div>
            <div className='flex items-center gap-[6px] mt-[8px]'>
              <i className="ri-train-fill px-3 py-2 bg-[#800080]/20 rounded-full text-[#800080]/70"></i>
              <p className='font-medium text-gray-500 text-[14px]'>Airport Express Trains.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MapDirection