import React from 'react'
import test_1 from '../assets/test-1.jpg'
import test_2 from '../assets/test-2.jpg'
import test_3 from '../assets/test-3.jpg'

function Testimonials() {
  return (
    <div className='bg-blue-50'>
      <div className='mx-[64px] mb-[72px] py-[32px] px-[24px]'>
        <h2 className='text-center text-3xl text-blue-600 font-[500] mt-[30px] mb-[32px]'>What Our clients Say About Us<hr className='w-[18%] mx-auto bg-[#468dd5] h-[3px] rounded-md mt-5'/></h2>
        <div className='grid grid-cols-3 gap-[30px] mt-[60px]  mb-[25px]'>
          <div className='border-2 border-blue-200 rounded p-[16px]'>
            <p className='text-[12px] text-[#6d6d6d] mb-[30px]'><i className="ri-double-quotes-l text-[18px] text-blue-400"></i> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod omnis facilis saepe, quis veniam laudantium perspiciatis quos ullam nostrum iusto quas cupiditate et nulla! Cupiditate modi similique deleniti est fuga.</p>
            <hr className='mt-[60px] mb-[25px] h-[2px] border-none bg-blue-200 rounded'/>
            <img src={test_1} alt="" className='w-[80px] h-[80px] rounded-full object-cover mx-auto' />
            <div className='flex flex-col items-center'>
              <h3 className='text 2xl text-[#626262] font-[600] mt-[15px]'>Ogheneruno Esther</h3>
              <h4 className='text-[#9d9d9d] text-[12px] font-[500]'><i className="ri-briefcase-2-fill text-[#9d9d9d] mb-[15px]"></i> Financial Analyst</h4>
              <div>
                <i className="ri-star-s-fill text-2xl text-yellow-500"></i>
                <i className="ri-star-s-fill text-2xl text-yellow-500"></i>
                <i className="ri-star-s-fill text-2xl text-yellow-500"></i>
                <i className="ri-star-s-fill text-2xl text-yellow-500"></i>
                <i className="ri-star-half-s-fill text-2xl text-yellow-500"></i>
              </div>
            </div>
          </div>
          <div className='border-2 border-blue-200 rounded p-[16px]'>
            <p className='text-[12px] text-[#6d6d6d] mb-[30px]'><i className="ri-double-quotes-l text-[18px] text-blue-400"></i> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod omnis facilis saepe, quis veniam laudantium perspiciatis quos ullam nostrum iusto quas cupiditate et nulla! Cupiditate modi similique deleniti est fuga.</p>
            <hr className='mt-[60px] mb-[25px] h-[2px] border-none bg-blue-200 rounded'/>
            <img src={test_2} alt="" className='w-[80px] h-[80px] rounded-full object-cover mx-auto' />
            <div className='flex flex-col items-center'>
              <h3 className='text 2xl text-[#626262] font-[600] mt-[15px]'>Micheal Sunday</h3>
              <h4 className='text-[#9d9d9d] text-[12px] font-[500]'><i className="ri-briefcase-2-fill text-[#9d9d9d] mb-[15px]"></i> Web Developer</h4>
              <div>
                <i className="ri-star-s-fill text-2xl text-yellow-500"></i>
                <i className="ri-star-s-fill text-2xl text-yellow-500"></i>
                <i className="ri-star-s-fill text-2xl text-yellow-500"></i>
                <i className="ri-star-s-fill text-2xl text-yellow-500"></i>
                <i className="ri-star-half-s-fill text-2xl text-yellow-500"></i>
              </div>
            </div>
          </div>
          <div className='border-2 border-blue-200 rounded p-[16px]'>
            <p className='text-[12px] text-[#6d6d6d] mb-[30px]'><i className="ri-double-quotes-l text-[18px] text-blue-400"></i> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod omnis facilis saepe, quis veniam laudantium perspiciatis quos ullam nostrum iusto quas cupiditate et nulla! Cupiditate modi similique deleniti est fuga.</p>
            <hr className='mt-[60px] mb-[25px] h-[2px] border-none bg-blue-200 rounded'/>
            <img src={test_3} alt="" className='w-[80px] h-[80px] rounded-full object-cover mx-auto' />
            <div className='flex flex-col items-center'>
              <h3 className='text 2xl text-[#626262] font-[600] mt-[15px]'>Tolu Johnson</h3>
              <h4 className='text-[#9d9d9d] text-[12px] font-[500]'><i className="ri-briefcase-2-fill text-[#9d9d9d] mb-[15px]"></i> Biochemist</h4>
              <div>
                <i className="ri-star-s-fill text-2xl text-yellow-500"></i>
                <i className="ri-star-s-fill text-2xl text-yellow-500"></i>
                <i className="ri-star-s-fill text-2xl text-yellow-500"></i>
                <i className="ri-star-s-fill text-2xl text-yellow-500"></i>
                <i className="ri-star-half-s-fill text-2xl text-yellow-500"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials