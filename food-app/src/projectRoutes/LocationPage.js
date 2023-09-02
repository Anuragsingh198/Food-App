import { useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import Header from '../component/HeaderLayout/Header';
import HeaderLayout from '../component/HeaderLayout/HeaderLayout';
import CartDisplay from '../component/Cart/CartDisplay';
import CartContextProvider from '../store/CartContextProvider';
import AuthClientProvider from '../store/AuthClientProvider';
import AuthOwnerProvider from '../store/AuthOwnerProvider';
import HotelsPageLayout from '../component/HotelsPageLayout/HotelsPageLayout';
function LocationPage() {
  const params=useParams();
    console.log()
    const [DisplayCard,SetDisplayCard]=useState(false);
    useEffect(()=>{
      console.log('Main-folder')
    },[params.locationid])
    return (
      <>
<HotelsPageLayout></HotelsPageLayout>
    </>
    )
  }

export default LocationPage