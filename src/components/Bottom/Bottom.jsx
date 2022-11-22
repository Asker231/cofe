import React from 'react'
import ButtonVarOne from '../subcomponents/button/ButtonVarOne';
import style from './bottom.module.css';

const Bottom = () => {
  return (
    <div className={style.bottom}>
        <div className={style.top}>
            <h3>Подписка на новости и рассылку</h3>
            <p style={{color:'#fff',fontWeght:'bold'}}>Подпишитесь на нашу рассылку прямо сейчас и будьте в курсе<br/> новых поставок, скидок и эксклюзивных предложений.</p>
            <div className={style.inp_section}>
                <input  type="text"/>
                <ButtonVarOne bcolor='#F9B300' w={10} title='Подписаться'/>
            </div>
            <pre>Нажимая на кнопку “Подписаться”, вы принимаете правила <mark> пользовательского соглашения</mark></pre>
        </div>
        <div className={style.bot}></div>
    </div>
  )
}

export default Bottom