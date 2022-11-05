
import style from './card.module.css';



const CardCategory = ({title,image}) => {
  
  return (
    <div className={style.card}>
        <img src={image} alt="" />
        <h4>{title}</h4>
    </div>
  )
}

export default CardCategory