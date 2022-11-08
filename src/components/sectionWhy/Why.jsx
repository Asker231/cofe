import React from 'react'
import style from './why.module.css';
import imag from './assets/pngwing2.png';
import imone from './assets/tee.svg';
import imtwo from './assets/price.svg';
import imtree from './assets/Group38.svg';

const Why = () => {
  return (
    <div className={style.why}>
        <div className={style.images}>
            <img src={imag}  alt="iamge" />
        </div>
        <div className={style.content}>
            <h1>Почему стоит работать<br/> именно с нами?</h1>
              <div className={style.wrap_one}>
                 <img width={45} height={45} src={imone}/>
                 <div className={style.textone}>
                     <h3>Всегда свежая обжарка</h3>
                     <p>Подбор степени обжарки под каждый<br/> сорт кофе. Всегда свежая обжарка</p>
                 </div>
              </div>
              <div className={style.wrap_two}>
              <img width={45} height={45} src={imtwo}/>
                 <div className={style.texttwo}>
                         <h3>Лучшие цены на продукцию</h3>
                         <p>Благодаря крупным объемам производства<br/> мы даем лучшие цены на нашу продукцию</p>
                 </div>
              </div>
              <div className={style.wrap_tree}>
              <img width={45} height={45} src={imtree}/>
                 <div className={style.texttree}>
                         <h3>Консультации 24/7</h3>
                        <p>Наши специалисты готовы всегда помочь <br/>
                          и подсказать вам с выбором кофе или<br/>
                           другой продукции.</p>
                 </div>
              </div>
        </div>
    </div>
  )
}

export default Why