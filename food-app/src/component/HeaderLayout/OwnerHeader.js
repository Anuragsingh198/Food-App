import React, {useContext,useState,useEffect} from 'react';
import { NavLink,useParams ,useLocation,useNavigate} from 'react-router-dom';
import './Ownerheader.css'
import Logout from '../Authorization/Logout';
import OwnerContext from '../../store/AuthOwner';
// import { useContext } from 'react';
function OwnerHeader() {
  const location=useLocation();
  const path=location.pathname;
      const Navigate = useNavigate();
    const params=useParams();
    const [HotelDetail,SetHotelDetail]=useState(false);
    useEffect(() => {
      console.log(params.hotelid)
      if (params.hotelid) {
        SetHotelDetail(true);
      }
    }, [params.hotelid]);
    const OwnerCtx=useContext(OwnerContext);
    const OwnerLogout=()=>{
       <Logout data='owner-data'></Logout>
    }
  return (
    <>

     {!HotelDetail&&
     <div className='Owner-Nav-Options'>
        <NavLink to={`/owner/${params.id}`} className='Owner-NavLink '  ActiveClassName='Owner-Active' >GetHotels</NavLink>
        <NavLink to={`/owner/${params.id}/addHotel`} className='Owner-NavLink ' ActiveClassName='Owner-Active' end='/addHotel'>AddHotel</NavLink>
        <NavLink to={`/owner/${params.id}/profile`} className='Owner-NavLink ' ActiveClassName='Owner-Active' end='/profile'> Profile</NavLink>
        <Logout data='owner-data'></Logout>
        </div>
}
{HotelDetail&&
     <div className='Owner-Nav-Options'>
        <NavLink to={`/owner/${params.id}/${params.hotelid}/adddish`} className='Owner-NavLink'  end='/adddish'>Add Dish</NavLink>
        <NavLink to={`/owner/${params.id}/${params.hotelid}`} className='Owner-NavLink' end='/getdishes'>View Dishes</NavLink>
        <NavLink to={`/owner/${params.id}/${params.hotelid}/addcategory`} className='Owner-NavLink'>Add Categories</NavLink>
        <NavLink to={`/owner/${params.id}/profile`} className='Owner-NavLink'> Profile</NavLink>
        <Logout data='owner-data'></Logout>
        </div>
}
       
     </>
  )
}

export default OwnerHeader