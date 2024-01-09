import React, { useState } from 'react';
import event_1 from '../Assets/event-1.jpg'

function DestinationEvents() {
    const [like, setLike] = useState(false)
  return (
    <div className='mx-[64px] my-[50px] flex'>
       <div className='w-[65%]'>
            <div className='max-w-[790px]'>
                    <h2 className='text-3xl font-serif'>Event Highlights in Paris:<br /> A Calendar of Culture and Celebration</h2>
                    <div className='flex justify-between items-center max-w-[790px] mt-[20px] border-b-4 pb-[20px] border-black pr-[5px]'>
                        <p>By: Chiamaka Ubani</p>
                        <p>For the year <span className='font-[500]'>2023</span></p>
                    </div>
                </div>
                <div className='max-w-[790px] w-full mt-[20px]'>
                    <div className='grid grid-cols-3 gap-[15px]'>
                        <div className='flex flex-col border shadow'>
                            <img src={event_1} alt="" />
                            <div className='flex flex-col p-[8px]'>
                                <h3 className='mt-[10px] font-[500]'>Paris Fashion Week</h3>
                                <p className='text-[10px]'>Join the world of glamour and haute couture as Paris becomes the global epicenter of fashion. Experience runway shows featuring renowned designers and catch a glimpse of the latest trends.</p>
                                <div className='flex justify-between items-center mt-[6px]'>
                                    <p className='text-[12px] font-[500]'>Date: <span className='text-[10px]'>Twice a year (February/March and September/October)</span></p>
                                <p onClick={() => setLike(!like)}>{like ? <i class="ri-heart-fill text-[24px] text-[#ff6600]"></i> : <i class="ri-heart-line text-[24px] text-[#ff6600]"></i>}</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col border shadow'>
                            <img src={event_1} alt="" />
                            <div className='flex flex-col p-[8px]'>
                                <h3 className='mt-[10px] font-[500]'>Paris Fashion Week</h3>
                                <p className='text-[10px]'>Join the world of glamour and haute couture as Paris becomes the global epicenter of fashion. Experience runway shows featuring renowned designers and catch a glimpse of the latest trends.</p>
                                <div className='flex justify-between items-center mt-[6px]'>
                                    <p className='text-[12px] font-[500]'>Date: <span className='text-[10px]'>Twice a year (February/March and September/October)</span></p>
                                    <p onClick={() => setLike(!like)}>{like ? <i class="ri-heart-fill text-[24px] text-[#ff6600]"></i> : <i class="ri-heart-line text-[24px] text-[#ff6600]"></i>}</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col border shadow'>
                            <img src={event_1} alt="" />
                            <div className='flex flex-col p-[8px]'>
                                <h3 className='mt-[10px] font-[500]'>Paris Fashion Week</h3>
                                <p className='text-[10px]'>Join the world of glamour and haute couture as Paris becomes the global epicenter of fashion. Experience runway shows featuring renowned designers and catch a glimpse of the latest trends.</p>
                                <div className='flex justify-between items-center mt-[6px]'>
                                    <p className='text-[12px] font-[500]'>Date: <span className='text-[10px]'>Twice a year (February/March and September/October)</span></p>
                                    {like ? <i class="ri-heart-fill text-[24px] text-[#ff6600]"></i> : <i class="ri-heart-line text-[24px] text-[#ff6600]"></i>}
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col border shadow'>
                            <img src={event_1} alt="" />
                            <div className='flex flex-col p-[8px]'>
                                <h3 className='mt-[10px] font-[500]'>Paris Fashion Week</h3>
                                <p className='text-[10px]'>Join the world of glamour and haute couture as Paris becomes the global epicenter of fashion. Experience runway shows featuring renowned designers and catch a glimpse of the latest trends.</p>
                                <div className='flex justify-between items-center mt-[6px]'>
                                    <p className='text-[12px] font-[500]'>Date: <span className='text-[10px]'>Twice a year (February/March and September/October)</span></p>
                                    {like ? <i class="ri-heart-fill text-[24px] text-[#ff6600]"></i> : <i class="ri-heart-line text-[24px] text-[#ff6600]"></i>}
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col border shadow'>
                            <img src={event_1} alt="" />
                            <div className='flex flex-col p-[8px]'>
                                <h3 className='mt-[10px] font-[500]'>Paris Fashion Week</h3>
                                <p className='text-[10px]'>Join the world of glamour and haute couture as Paris becomes the global epicenter of fashion. Experience runway shows featuring renowned designers and catch a glimpse of the latest trends.</p>
                                <div className='flex justify-between items-center mt-[6px]'>
                                    <p className='text-[12px] font-[500]'>Date: <span className='text-[10px]'>Twice a year (February/March and September/October)</span></p>
                                    {like ? <i class="ri-heart-fill text-[24px] text-[#ff6600]"></i> : <i class="ri-heart-line text-[24px] text-[#ff6600]"></i>}
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col border shadow'>
                            <img src={event_1} alt="" />
                            <div className='flex flex-col p-[8px]'>
                                <h3 className='mt-[10px] font-[500]'>Paris Fashion Week</h3>
                                <p className='text-[10px]'>Join the world of glamour and haute couture as Paris becomes the global epicenter of fashion. Experience runway shows featuring renowned designers and catch a glimpse of the latest trends.</p>
                                <div className='flex justify-between items-center mt-[6px]'>
                                    <p className='text-[12px] font-[500]'>Date: <span className='text-[10px]'>Twice a year (February/March and September/October)</span></p>
                                    {like ? <i class="ri-heart-fill text-[24px] text-[#ff6600]"></i> : <i class="ri-heart-line text-[24px] text-[#ff6600]"></i>}
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
       </div>
       <div className='mt-[135px] mx-[24px] flex flex-col w-[35%]'>
            <div className='bg-gray-100 px-4 py-[16px]'>
                <h3 className='text-2xl font-serif mb-[10px]'>Safest Cities to Explore: Your Gateway to Secure Travels</h3>
                <p className='text-[12px]'>Embarking on a journey is not just about the destination—it's also about the peace of mind that comes with feeling secure. As you plan your next adventure, consider these safest cities around the world where hospitality meets safety, ensuring you can explore with confidence.</p>
                <ol className='text-[14px] mt-[10px] list-decimal px-4'>
                    <li className='font-[600]'>Tokyo, Japan:<br /> <span className='text-[12px] font-[400]'>Known for its low crime rates and impeccable public safety standards, Tokyo offers a harmonious blend of modernity and tradition.</span></li>
                    <li className='font-[600]'>Singapore:<br /> <span className='text-[12px] font-[400]'>A model of urban planning and safety, Singapore consistently ranks among the safest cities globally.</span></li>
                    <li className='font-[600]'>Zurich, Switzerland:<br /> <span className='text-[12px] font-[400]'>Nestled amidst the Swiss Alps, Zurich is renowned for its cleanliness, efficient public services, and an overall sense of tranquility.</span></li> 
                    <li className='font-[600]'>Munich, Germany:<br /> <span className='text-[12px] font-[400]'>With its welcoming atmosphere and commitment to public safety, Munich is a delightful destination for travelers. </span></li> 
                    <li className='font-[600]'>Helsinki, Finland:<br /> <span className='text-[12px] font-[400]'>As one of the safest European capitals, Helsinki provides a sense of security amid its modern design and natural beauty.</span></li> 
                </ol>
            </div>
       </div>
    </div>
  )
}

export default DestinationEvents