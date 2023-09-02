import React,{Fragment} from 'react'
import OwnerHeader from '../component/HeaderLayout/OwnerHeader'
import HeaderLayout from '../component/HeaderLayout/HeaderLayout';
import AddNewDish from '../component/Owner/HotelDetails/AddNewDish'
import AuthClientProvider from '../store/AuthClientProvider';
import AuthOwnerProvider from '../store/AuthOwnerProvider';
import AddNewCategories from '../component/Owner/HotelDetails/AddNewCategories'
function OwnerAddCategories() {
  return (
    <Fragment>
  <AddNewCategories></AddNewCategories>
    </Fragment>
  )
}

export default OwnerAddCategories