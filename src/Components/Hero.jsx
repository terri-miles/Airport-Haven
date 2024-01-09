import React, { useState } from 'react'
import { images } from '../assets/images'
import axios from 'axios';
import { useHotelProvider } from '../Utils/GlobalContext';
import { reducerCases } from '../Utils/reducer';
import Hotels from './Hotels';
import Pagination from './Pagination';



function Hero() {
    const [{ accessToken, hotels }, dispatch] = useHotelProvider()
    const [city, setCity] = useState('');
    const [km, setKm] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(10);
    
    const image = images[Math.floor(Math.random() * images.length)]
    console.log(images);

    const fetchHotel = async () =>{
            const response = await axios.get(
                `https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city?cityCode=${city}&radius=${km}`,
                {
                    headers:{
                        Authorization: 'Bearer ' + accessToken,
                        'Content-Type': 'application/json',
                    }
                })
                const hotels = response.data.data
                dispatch({type: reducerCases.SET_HOTELS, hotels})
                console.log(hotels);
    }

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = hotels.slice(firstPostIndex, lastPostIndex)

  return (
    <div className='w-full h-[90vh] relative'>
        <div className='w-full h-full relative flex flex-col items-center'>
            <div className='absolute w-full h-full bg-black/60 z-10'></div>
            <div className='absolute z-50 mt-[180px]'>
                <h1 className='text-white md:text-2xl md:text-center lg:text-4xl font-serif font-[500]'>Discover comfort and convenience - your<br/> gateway to airport hotels worldwide!!</h1>
                <div className='mt-[25px] w-full bg-white py-[10px] px-[15px] rounded-[10px] flex flex-col'>
                    <div className='flex items-center'>
                        <div className='flex gap-[10px] h-full items-center mr-[30px]'>
                            <i className="ri-search-2-line text-[20px] font-[500] bg-gray-100 rounded-[10px] px-[8px] py-[2px]" />
                            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder='Search with airport code e.g JFK' className='w-[250px] px-[10px] border-none outline-none  bg-gray-100 py-[4px] rounded-[5px]' />
                        </div>
                        <div className='flex gap-[10px] h-full items-center'>
                            <input type='text' onChange={(e) => setKm(e.target.value)} placeholder='Distance in km' className='w-[150px] px-[10px] border-none outline-none  bg-gray-100 py-[4px] rounded-[5px]' />
                            <button type='submit' onClick={fetchHotel} className='py-[8px] px-[30px] bg-[#ff6600] text-white rounded-[10px] font-semibold flex ml-[50px]'>Search</button>
                        </div>
                    </div>
                    {hotels.length > 0 && (
                        <>
                            <div className='absolute w-[100%] left-0 top-[80%] shadow rounded-[10px] py-[10px] px-[20px] bg-gray-200'>
                                <h1 className='text-3xl font-[600] text-center mb-[20px] mt-[8px]'>List of Airport Hotels in your city</h1>
                                <Hotels hotels ={currentPosts} />
                                <Pagination totalPosts={hotels.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                            </div>
                        </>
                    )}
                </div>
                <p className='text-gray-400 font-[600] mt-[30px]'>Trending cities: <span className='text-white'>Paris, Lagos, New York, Los Angeles </span><i className="ri-more-fill bg-white/30 text-white rounded-full p-1" /></p>  
                  </div>
            <img src={image} alt="hero-img" className='w-full h-full object-cover' />
        </div>    
  </div>
)
}

export default Hero