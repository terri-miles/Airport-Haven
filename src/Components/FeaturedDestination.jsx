import React from 'react'
import feat_img from '../assets/featured.jpg'
import feat_img2 from '../assets/featured2.jpg'
import feat_img3 from '../assets/featured3.jpg'

function FeaturedDestination() {
  return (
    <div className='mx-[64px] py-[64px]'>
        <div className='grid grid-cols-2'>
            <div className='place-content-center'>
                <h2 className='text-[36px]  leading-tight font-medium'>Explore Our Top<br /> Picks Near Airports – Book<br /> Your Perfect Stay Now</h2>
                <button className='text-[12px] w-[230px] bg-black text-white text-left flex justify-between px-[16px] py-[15px] mt-[155px]'>Book A Room Now <i className="ri-arrow-right-line text-white"></i></button>
            </div>
            <div className='w-full h-auto relative'>
                <img src={feat_img} alt="" className='w-[400px] object-cover rounded' />
                <img src={feat_img2} alt="" className='absolute w-[200px] right-[15px] bottom-[-20px] object-cover shadow-lg rounded' />
                <img src={feat_img3} alt="" className='w-[150px] rounded-full absolute top-[-40px] right-[70px] shadow-lg' />
                <div>
                    <h3 className='text-[20px] font-bold mt-[10px]'>La Demeure Montaigne</h3>
                    <p className='text-[12px]'><i className="ri-map-pin-5-fill text-blue-500 text-[16px]"></i> 18 Rue Clément Marot, 8th arr., 75008 Paris,<br /> France - <span className='text-blue-600 hover:underline cursor-pointer'>Excellent location - show map</span> – Metro access</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedDestination