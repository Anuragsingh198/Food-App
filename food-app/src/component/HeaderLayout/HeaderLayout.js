import React ,{useContext, useState}from 'react'
import OwnerContext from '../../store/AuthOwner'
import ClientContext from '../../store/AuthClient'
import Header from './Header';
import ClientHeader from './ClientHeader';
import './HeaderLayout.css'
import OwnerHeader from './OwnerHeader';
function HeaderLayout() {
    const ClientCtx=useContext(ClientContext);
    const OwnerCtx=useContext(OwnerContext);
    const loginned=(OwnerCtx.isAuth||ClientCtx.isAuth)
    // console.log(NotLoggedIn)
  return (
    <>
       <div className='Nav-header'>
     <div className='Mealify'>Mealify</div>
     {OwnerCtx.isAuth&&<OwnerHeader/>}
     {ClientCtx.isAuth&&<ClientHeader/>}
     {!loginned&&<Header/>}
     </div>
     </>
  )
}

export default HeaderLayout