import React,{Fragment, useEffect} from 'react'
import OwnerHeader from '../component/HeaderLayout/OwnerHeader'
import AuthOwnerProvider from '../store/AuthOwnerProvider'
import AuthClientProvider from '../store/AuthClientProvider'
import HeaderLayout from '../component/HeaderLayout/HeaderLayout';
import ViewHotelDetails from '../component/Owner/HotelDetails/ViewHotelDetails'
function OwnerHotelDetails() {
  return (
    <Fragment>
  <ViewHotelDetails></ViewHotelDetails>
    </Fragment>
  )
}

export default OwnerHotelDetails