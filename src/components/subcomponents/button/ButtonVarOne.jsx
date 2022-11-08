import React from 'react';
import style from './btnvarone.module.css';


const ButtonVarOne = ({title,size,bcolor,color,w}) => {
  return (
    <button style={{backgroundColor:`${bcolor}`,color:`${color}`,width:`${w}%`}} className={style.varone}>
     {title}
    </button>
  )
}

export default ButtonVarOne