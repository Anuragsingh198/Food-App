import React,{Fragment,UseState} from 'react'
import AuthOwnerProvider from '../store/AuthOwnerProvider'
import HeaderLayout from '../component/HeaderLayout/HeaderLayout';
import AuthClientProvider from '../store/AuthClientProvider';
import NewHotel from '../component/Owner/NewHotel/NewHotel'
import OwnerHotels from '../component/Owner/OwnerHeader/OwnerHotels/OwnerHotels'
function OwnerAddHotelPage() {
  return (
    <Fragment>
   <NewHotel></NewHotel>
    </Fragment>

  )
}

export default OwnerAddHotelPage