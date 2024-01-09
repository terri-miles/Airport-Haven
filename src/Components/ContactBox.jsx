import React from 'react'

function ContactBox() {
  return (
    <div className='mx-[64px] mb-[60px]'>
        <div className='ml-[540px] mt-[30px] border-l-4 border-[#ff6600] px-[15px] rounded-sm'>
            <h3 className='text-[20px] font-[600] text-[#545454] font-serif '>Blessing Oteri</h3>
            <p className='text-[12px] font-[500] text-[#919191]'>C.E.O Airport Haven & Logistics</p>
        </div>
        <div className='mt-[70px] grid grid-cols-3'>
            <div className='flex justify-center items-center gap-[15px]'>
                <i className="ri-customer-service-fill text-[24px] bg-green-200 rounded-full px-[20px] py-[15px] text-green-600"></i>
                <div className='flex flex-col gap-[8px] mt-[14px]'>
                    <h5 className='text-[18px] font-[500] text-[#545454]'>Customer Service</h5>
                    <p className='text-[10px] text-[#919191]'>If you need immediate assistance or have inquiries, our<br /> customer support team is ready to help. Reach out via<br /> email at <span className='font-[500] text-[#545454]'>airporthaven@gmail.com</span> or give us a call at <span className='font-[500] text-[#545454]'>09012349876543.</span></p>
                </div>
            </div>
            <div className='flex justify-center items-center gap-[15px]'>
                <i className="ri-building-4-fill text-[24px] bg-purple-200 text-purple-600 rounded-full px-[20px] py-[15px]"></i>
                <div className='flex flex-col gap-[8px] mt-[14px]'>
                    <h5 className='text-[18px] font-[500] text-[#545454]'>Headquaters</h5>
                    <p className='text-[10px] text-[#919191]'>Visit us in person at our headquarters located at<br />  <span className='font-[500] text-[#545454]'>Block 106,Admiralty way, VI, Lagos.</span> Our team is<br /> here to assist you during office hours and can<br /> provide on-site support if needed.</p>
                </div>
            </div>
            <div className='flex items-center gap-[15px]'>
                <i className="ri-message-2-fill text-[24px] bg-orange-200 text-orange-600 rounded-full px-[20px] py-[15px]"></i>
                <div className='flex flex-col gap-[8px] mt-[2px]'>
                    <h5 className='text-[18px] font-[500] text-[#545454]'>Social Media</h5>
                    <p className='text-[10px] text-[#919191]'>Connect with us on social media to stay updated on<br /> the latest travel trends, promotions, and community<br /> happenings. Find us on Facebook, Twitter, and Instagram.</p>
                </div>
            </div>
        </div>
        <hr className='mt-[100px]'/>
        <div className='mt-[100px] flex justify-between gap-[40px]'>
            <div className='w-[50%]'>
                <h3 className='text-3xl font-serif font-[600]'>Feedback Form:</h3>
                <p className='text-[14px] text-gray-500 mt-[80px]'>We value your feedback, and your insights help us improve our services.<br />Share your  thoughts, suggestions, or compliments by filling out our<br /> feedback form below.</p>
                 <div className='mt-[25px] h-[300px]'>
                    <h5 className='text-[18px] font-[500] mb-[25px]'>Office hours</h5>
                    <p className='text-[14px] text-gray-500 mb-[10px]'>Our customer support is available during the following hours:
                    </p>
                    <p className='text-[14px] text-gray-500 mb-[15px]'><span className='text-[#6b6b6b] font-[600]'>Monday - Friday:</span> 9:00 AM to 6:00 PM (Your Time Zone)</p>
                    <p className='text-[14px] text-gray-500 mb-[15px]'><span className='text-[#6b6b6b] font-[600]'>Saturday - Sunday:</span> Closed</p>
                    <p className='text-[14px] text-gray-500 mb-[15px]'>Feel free to reach out at any time, and we'll get back to you promptly.<br /> Thank you for choosing us for your travel needs. We look forward to<br /> assisting you on your journey!</p>
                </div>  
            </div>
            <div className='w-[40%]'>
                <form action="" className='border-2 border-gray-300 rounded p-[26px] mt-[24px]'>
                        <div className=''>
                        <div className='mb-[15px] relative'>
                                <p className='text-[12px] font-[500] bg-white text-[#ff6600] px-[8px] py-[3px] ml-[20px] absolute top-[-10px]'>Name</p>
                                <input type="text" className='border-2 border-gray-300 rounded w-full px-[16px] py-[8px] outline-none font-[500]'/>
                        </div>
                        <div className='relative mb-[15px]'>
                                <p className='text-[12px] font-[500] bg-white text-[#ff6600] px-[8px] py-[3px] ml-[20px] absolute top-[-10px]'>Email</p>
                                <input type="email" className='border-2 border-gray-300 rounded w-full px-[16px] py-[8px] outline-none font-[500]'/>
                        </div>
                        <div className='relative mb-[15px]'>
                                <p className='text-[12px] font-[500] bg-white text-[#ff6600] px-[8px] py-[3px] ml-[20px] absolute top-[-10px]'>Subject</p>
                                <select name="cars" className='border-2 border-gray-300 rounded w-full px-[16px] py-[8px] outline-none font-[500]'>
                                    <option value="inquiry">General Inquiry</option>
                                    <option value="booking-assistance">Booking Assistance</option>
                                    <option value="feedback">Feedback</option>
                                    <option value="other">Other</option>
                                </select>
                        </div>
                        <div className='relative mb-[15px]'>
                                <p className='text-[12px] font-[500] bg-white text-[#ff6600] px-[8px] py-[3px] ml-[20px] absolute top-[-10px]'>Message</p>
                                <textarea name="message" rows="10" cols="30" className='border-2 border-gray-300 rounded w-full h-[100px] px-[16px] py-[8px] outline-none font-[500]'></textarea>
                        </div>
                        <button className='px-[50px] py-[10px] mt-[20px] text-white font-[500] rounded bg-gradient-to-r from-orange-400 to-yellow-400'>Send Message</button>
                        </div>
                    </form>
            </div>   
        </div>
    </div>
  )
}

export default ContactBox