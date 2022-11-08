import React from 'react'
import ButtonVarOne from '../subcomponents/button/ButtonVarOne';
import style from './botsec.module.css';

const BottomSec = () => {
  return (
    <div className={style.botsec}>
            <div className={style.circle}>?</div>
           <h2 style={{color:"#fff",fontWeight:'bold'}}>Как мы обжариваем наш кофе:</h2>
          <p style={{maxWidth:"946px",color:'#fff',fontWeight:'bold'}}>Компания Нью Рефайнинг Груп находится в г. Калининграде и имеет свой склад и представительство 
             в Москве. Завод работает на рынке свежеобжаренного кофе и растворимой продукции более 15 лет. Завод имеет немецкое оборудование марки Probat по обжарке кофе и итальянские агломераторы 
             для производства растворимой продукции.</p> 

         <p style={{maxWidth:"946px",color:'#fff',fontWeight:'bold'}}>Кофе поставляется в контейнерах напрямую с плантаций по всему миру. Компания имеет долгосрочные контракты по поставке продукции. Каждая партия проходит строгий контроль на заводе для проверки зерна. Зеленое зерно обжаривается, проходит процесс дегазации и тут же отправляется клиентам. Наши обжарщики прошли обучение в России и за рубежом. 
          У нас свой подход к каждой партии зерна.</p> 

        <p style={{maxWidth:"1046px",color:'#fff',fontWeight:'bold'}}>Мы раскрываем вкус каждого сорта кофе.</p>
        <ButtonVarOne title="Перейти в каталог" w={30}
         color="#fff" bcolor="#F9B300"/>

         
    </div>
  )
}

export default BottomSec