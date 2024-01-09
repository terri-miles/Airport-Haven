import React from 'react'

function HotelList(props) {
    const {name, distance, address} = props.hotel;
    const {index} = props;
  return (
    <>
        <div  className='flex items-center gap-[20px] cursor-pointer w-full'>
            <ul className='w-full text-[14px]'>
                <li className='flex justify-between items-center font-[600] hover:bg-slate-300 w-full py-[12px] px-[10px] rounded'>
                    <div>
                        <span className='mr-[15px]'>{index + 1}</span> <span className='mr-[15px]'>{name}</span> <span className='text-gray-500 font-light'>Distance:</span> {distance.value}Km <span className='text-gray-500 font-light ml-[15px]'>Country:</span> {address.countryCode}
                    </div>
                    <div>
                        <span className='bg-black px-3 py-2 rounded text-white'><i className="ri-arrow-right-up-line"></i></span>
                    </div>
                </li>
            </ul>
        </div>
    </>
  )
}

export default HotelList