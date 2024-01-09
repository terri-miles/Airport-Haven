import React, { createContext, useContext, useReducer } from 'react'

export const HotelContext = createContext()

function GlobalContext({children, initialState, reducer}) {
  return <HotelContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </HotelContext.Provider>
}

export const useHotelProvider = () =>  useContext(HotelContext);

export default GlobalContext