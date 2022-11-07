import React from 'react';
import style from './btnvarone.module.css';


const ButtonVarOne = ({title,size,bcolor,color}) => {
  return (
    <button style={{backgroundColor:`${bcolor}`,color:`${color}`}} className={style.varone}>
     {title}
    </button>
  )
}

export default ButtonVarOne