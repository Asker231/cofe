import React from 'react'
import style from './header.module.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import logo from './logo/image25.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={style.header}>
        <div className={style.logo}>
           <Link to='/'><img src={logo} alt="logo"/></Link> 
        </div>
        <div className={style.search}>
             <SearchIcon className={style.inplogo}/>
             <input type="text"/>
        </div>
        <div className={style.auth_basket}>
            <ShoppingBasketOutlinedIcon className={style.firstIcon} style={{width:"32px",height:"31px"}}/>
            <AccountCircleOutlinedIcon className={style.secondIcon} style={{width:"32px",height:"31px"}}/>
        </div>
    </div>
  )
}

export default Header