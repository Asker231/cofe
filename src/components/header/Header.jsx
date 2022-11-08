import React, { useState } from 'react'
import style from './header.module.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import logo from './logo/image25.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  const[focus,setFocus] = useState(false);
  return (
    <div  className={style.header}>
        <div className={style.logo}>
           <Link to='/'><img src={logo} alt="logo"/></Link> 
        </div>
        <div style={focus==true?{
               transition:'0.5s',
               webkitBoxShadow: "4px 8px 21px -5px rgba(66, 68, 90, 1)",
               mozBoxShadow: "4px 8px 21px -5px rgba(66, 68, 90, 1)",
               boxShadow: "4px 8px 21px -5px rgba(66, 68, 90, 1)",

             }:{ webkitBoxShadow:"none",mozBoxShadow:"none",boxShadow:"none"}} className={style.search}>
             <SearchIcon className={style.inplogo}/>
             <input onFocus={()=>setFocus(!focus)}  type="text"/>
        </div>
        <div className={style.auth_basket}>
           <Link to='/basket'><ShoppingBasketOutlinedIcon className={style.firstIcon} style={{width:"32px",height:"31px"}}/></Link> 
          <Link><AccountCircleOutlinedIcon className={style.secondIcon} style={{width:"32px",height:"31px"}}/></Link>  
        </div>
    </div>
  )
}

export default Header