import React from 'react';
import io from 'socket.io-client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Login from './projectRoutes/ClientLogin';
import LoginOwner from './projectRoutes/OwnerLogin'
import OwnerAddHotelPage from './projectRoutes/OwnerAddHotel';
import OwnerMainPage from './projectRoutes/OwnerMainPage';
import OwnerAddCategories from './projectRoutes/OwnerAddCategories';
// import AddNewCategories from './component/Owner/HotelDetails/AddNewCategories';
import OwnerAddDish from './projectRoutes/OwnerAddDish';
import HotelDetails from './projectRoutes/HotelDetails';
import HomePage from './projectRoutes/HomePage';
import LocationPage from './projectRoutes/LocationPage';
import NavBarLayout from './projectRoutes/NavBarLayout';
const socket=io.connect("http://localhost:4000");
function App() {
  return (
    // <AuthClientProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBarLayout></NavBarLayout>} >
          <Route index element={<HomePage />} />
          <Route path='login'>
            <Route path='user' element={<Login />} />
            <Route path='owner' element={<LoginOwner />} />
          </Route>
          <Route
            path='/location/:locationid/:hotelid'
            element={<HotelDetails />}
          />
          <Route
            path='/location/:locationid'
            element={<LocationPage />}
          />
        </Route>
        <Route path='/owner/:id' element={<NavBarLayout></NavBarLayout>} >
          <Route index element={<OwnerMainPage />} />
          <Route path='addHotel' element={<OwnerAddHotelPage />} />
          {/* <Route path='profile' element={<OwnerMainPage />} /> */}
          <Route path=':hotelid' >
            <Route index element={<HotelDetails />} />
            <Route path='adddish' element={<OwnerAddDish />} />
            <Route path='addcategory' element={<OwnerAddCategories />} />
  
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
    // </AuthClientProvider>
  );
}

export default App;
