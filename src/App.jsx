import { useEffect } from 'react';
import { useHotelProvider } from '../src/Utils/GlobalContext';
import axios from 'axios';
import { reducerCases } from '../src/Utils/reducer';
import { Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/Home';
import Blog from '../src/Pages/Blog';
import Contact from '../src/Pages/Contact';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';


function App() {
  const [{accessToken}, dispatch] = useHotelProvider();

  useEffect(() =>{
    const authenticateWithAuth = async (clientId, clientSecret, grandType) =>{
        try{
          const response = await axios.post('https://test.api.amadeus.com/v1/security/oauth2/token', 
          {
            grant_type: grandType,
            client_id: clientId,
            client_secret: clientSecret
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          });
          const accessToken = response.data.access_token
          dispatch({type:reducerCases.SET_ACCESS_TOKEN, accessToken})
        }
        catch(error){
          console.log('Error obtaining access token:', error.message);
        }
    }
    const grandType = 'client_credentials';
    const clientId = '4GpdcgShMltlDQsf9bfuvk9RuwOX1sS3';
    const clientSecret = 'vNZjpOdEHGYxOBs5';
  authenticateWithAuth(clientId, clientSecret, grandType)
},[dispatch])
  return (
    <> 
      <NavBar /> 
        <Routes>  
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
