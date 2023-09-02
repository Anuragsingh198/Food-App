import { useState,useEffect} from 'react';
import '../App.css';
import Header from '../component/HeaderLayout/Header';
import HeaderLayout from '../component/HeaderLayout/HeaderLayout';
import MainPageInfo from '../component/MainPageLayout/MainPageInfo';
import CartDisplay from '../component/Cart/CartDisplay';
import MainPageLayout from '../component/MainPageLayout/MainPageLayout';
import CartContextProvider from '../store/CartContextProvider';
import AuthClientProvider from '../store/AuthClientProvider';
import AuthOwnerProvider from '../store/AuthOwnerProvider';
function HomePage() {
    const [DisplayCard,SetDisplayCard]=useState(false);
  
    const onOpen =()=>
    {
   SetDisplayCard(true);
    }
    const onClose =()=>
    {
   SetDisplayCard(false);
    }
    return (
      <>
<MainPageInfo></MainPageInfo>
  <MainPageLayout></MainPageLayout>
  </>
    );
  }

export default HomePage