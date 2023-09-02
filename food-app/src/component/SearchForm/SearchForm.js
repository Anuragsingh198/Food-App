import React, { useContext, useState } from 'react'
import { FaSearch, FaMapMarker } from 'react-icons/fa';
import HotelContext from '../../store/HotelsContext';
import ItemSearchForm from './ItemSearchForm';
import SearchFormInput from './SearchFormInput';
import { Path ,useLocation,useNavigate} from 'react-router-dom';
import './SearchForm.css'
// import SearchFormInput from './SearchFormInput';
function SearchForm(props){
  const HotelCtx=useContext(HotelContext);
    const location=useLocation();
    const path=location.pathname;
    const Navigate=useNavigate();
    const [SearchLocation,SetSearchLocation]=useState('');
    const getSearchLocation=(data)=>{
        SetSearchLocation(data);
         if(path==='/')
  Navigate(`/location/${data}`)
  else{
    Navigate(`/location/${data}`)
  }
    }
  return (
    <div className='Search-Form-Div'>
    <form  className='Search-Form-Main-Div Location-Search-Form-Div'>
    <button   className='Search-Form-Button ' type='submit'><FaMapMarker className='Fa-MapPin'/></button>
        <SearchFormInput func={getSearchLocation}></SearchFormInput>
      
    </form>
    <div className='Search-Form-Separation'></div>
    <form  className='Search-Form-Main-Div' >
          <button   className='Search-Form-Button ' type='submit'><FaSearch className='Fa-Search'/></button>
       <ItemSearchForm></ItemSearchForm>
      
    </form>
    </div>
  )
}

export default SearchForm