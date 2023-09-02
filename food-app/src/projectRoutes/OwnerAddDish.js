import React,{Fragment} from 'react'
import AuthOwnerProvider from '../store/AuthOwnerProvider'
import HeaderLayout from '../component/HeaderLayout/HeaderLayout';
import AuthClientProvider from '../store/AuthClientProvider';
import OwnerHeader from '../component/HeaderLayout/OwnerHeader'
import AddNewDish from '../component/Owner/HotelDetails/AddNewDish'
function OwnerAddDish() {
  return (
    <Fragment>
  <AddNewDish></AddNewDish>

    </Fragment>
  )
}

export default OwnerAddDish