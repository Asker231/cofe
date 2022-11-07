import ButtonVarOne from "../../subcomponents/button/ButtonVarOne";
import star from "./assets/Star5.svg";
import vector from "./assets/Vector.svg";
import style from "./cardu.module.css";



const CardU = ({ image, title, text, price, oldPrice }) => {

  const stars = [1, 2, 3, 4, 5];

  return (
    <div className={style.cardu}>
      <div className={style.top}>
        <span style={{ color: "#F9B300" }}>Cкидки</span>
        <select id={style.select}>
          <option>250г</option>
          <option>250г</option>
          <option>330г</option>
        </select>
      </div>
      <div className={style.middle}>
        <img src={image} alt="image" />
        <div className={style.info}>
          <div className={style.stars}>
            <div className={style.rat}>
              {stars.map((el) => {
                return (
                  <img
                    src={star}
                    style={{ width: "18px", height: "18px" }}
                    alt="star"
                  />
                );
              })}
            </div>
            <span>4.0 (32 отзыва) </span>
            <div className={style.ra}>
              {stars.map((el) => {
                return (
                  <img
                    src={vector}
                    style={{ width: "18px", height: "18px" }}
                    alt="star"
                  />
                );
              })}
            </div>

            <div>Кислинка</div>
            <div>Горчинка</div>
            <div>Насыщенка</div>
          </div>
        </div>
      </div>
      <div className={style.bottomgrid}>
        <div className={style.texts}>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
        <div className={style.prices}>
          <strike style={{ color: "red", letterSpacing: "3px" }}>
            {oldPrice}
          </strike>
          <strong style={{ letterSpacing: "2px" }}>{price}</strong>
        </div>
          
          <ButtonVarOne  bcolor="#F9B300" color="#fff" title="В корзину" />
        
      </div>
    </div>
  );
};

export default CardU;
