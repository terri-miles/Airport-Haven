
export const initialState = {
    accessToken: null,
    hotels: [],
    hotelFeatures: []
}

export const reducerCases = {
    SET_ACCESS_TOKEN: 'SET_ACCESS_TOKEN',
    SET_HOTELS: 'SET_HOTELS',
    SET_HOTEL_FEATURES: 'SET_HOTEL_FEATURES'
}

const reducer = (state, action) =>{
    switch(action.type){
        case reducerCases.SET_ACCESS_TOKEN:
            return {...state, accessToken: action.accessToken}
        case reducerCases.SET_HOTELS:
            return {...state, hotels: action.hotels}
        case reducerCases.SET_HOTEL_FEATURES:
            return {...state, hotelFeatures: action.hotelFeatures}
        default:
            return state
    }
}


export default reducer