import React from 'react'
import Hotel from './HotelList'

function Hotels({hotels}) {
  return (
    <>
        {hotels.map((hotel, index) =>{
            return (
                <Hotel key={hotel.hotelId} hotel={hotel} index={index} />
                )
            }
        )}
    </>
  )
}

export default Hotels