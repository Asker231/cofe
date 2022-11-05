import React from 'react'
import style from './header.module.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import logo from './logo/image25.svg';

const Header = () => {
  return (
    <div className={style.header}>
        <div className={style.logo}>
            <img src={logo} alt="logo"/>
        </div>
        <div className={style.search}>
             <SearchIcon className={style.inplogo}/>
             <input type="text"/>
        </div>
        <div className={style.auth_basket}>
            <ShoppingBasketOutlinedIcon style={{width:"32px",height:"31px"}}/>
            <AccountCircleOutlinedIcon style={{width:"32px",height:"31px"}}/>
        </div>
    </div>
  )
}

export default Header