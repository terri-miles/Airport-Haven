import React from 'react'
import backdrop from '../Assets/backdrop.jpg'
import ceo_pic from '../Assets/ceo-pic.jpg'

function CeoInfo() {
  return (
    <div className='w-full'>
        <div className='w-full h-[80vh] relative'>
            <img src={backdrop} alt="" className='w-full h-full absolute' />
            <div className='flex gap-[50px] absolute z-10 mx-[64px] mt-[150px]'>
                <img src={ceo_pic} alt="" className='w-[450px] h-[400px] object-cover border-4 border-white ml-[40px] shadow-[0_20px_60px_-10px_rgba(150,111,214,0.3)]' />
                <div>
                    <h1 className='text-2xl font-serif text-white font-[600] mt-[60px]'>Get in Touch:<br /> We're Here to Assist You</h1>
                    <p className='text-gray-400 mt-[10px]'>Welcome to our contact page – your direct link to seamless<br /> assistance and personalized service. Whether you have questions,<br /> need support, or want to share your feedback, we're just a message<br /> away. Your journey with us is important, and we're committed to<br /> making every step of it as smooth as possible.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CeoInfo