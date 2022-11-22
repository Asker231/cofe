import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./catalogcofe.module.css";
import { botProps } from "./props/bot.props";
import { cardProps } from "../../components/cardSlider/cards.props";
import CardU from "../../components/cardSlider/cardUniversal/CardU";
import {
  propsRight,
  prone,
  prtwo,
  prtree,
  prfor,
} from "./ppropsrightsec/props.right";
import Bottom from "../../components/Bottom/Bottom";

const CatalogCofe = ({ title, images }) => {
  const [rig, setRig] = useState([]);
  const [rig2, setRig2] = useState([]);
  const [rig3, setRig3] = useState([]);
  const [rig4, setRig4] = useState([]);
  const [card, setCards] = useState([]);

  const [bot, setBot] = useState([]);
  useEffect(() => {
    setBot(botProps);
    setRig(propsRight);
    setRig2(prtwo);
    setRig3(prtree);
    setRig4(prfor);
    setCards(cardProps)
  }, []);
  return (
    <div className={style.catalogcofe}>
      <div className={style.wrap}>
        <h1>{title}</h1>
        <img src={images} alt="a" />
      </div>
      <div className={style.items_block}>
        <div className={style.leftsection}>
          <div className={style.left}></div>
          <div className={style.right}>
            <h3>Степень обжарки</h3>
          </div>
        </div>
        <div className={style.rightsection}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "13px",
              flexDirection: "column",
            }}
            className={style.block1}
          >
            <h3>География</h3>
            {rig.map((el) => {
              return (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "3px" }}
                >
                  <input style={{ border: 'none' }} type="checkbox" />
                  <Link style={{ textDecoration: "none", color: "#000" }}>
                    {el.text}
                  </Link>
                </div>
              );
            })}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "13px",
              flexDirection: "column",
            }}
            className={style.block2}
          >
            <h3>Кислинка</h3>
            {rig2.map((el) => {
              return (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "3px" }}
                >
                  <input type="checkbox" />
                  <Link style={{ textDecoration: "none", color: "#000" }}>
                    {el.text}
                  </Link>
                </div>
              );
            })}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "13px",
              flexDirection: "column",
            }}
            className={style.block3}
          >
            <h3>Особые</h3>
            {rig3.map((el) => {
              return (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "3px" }}
                >
                  <input type="checkbox" />
                  <Link style={{ textDecoration: "none", color: "#000" }}>
                    {el.text}
                  </Link>
                </div>
              );
            })}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "13px",
              flexDirection: "column",
            }}
            className={style.block4}
          >
            <h3>Вид кофе</h3>
            {rig4.map((el) => {
              return (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "3px" }}
                >
                  <input type="checkbox" />
                  <Link style={{ textDecoration: "none", color: "#000" }}>
                    {el.text}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className={style.botsection}>
          {bot.map((el) => {
            return (
              <Link className={style.bots}>
                <span>{el.text}</span>
                <img src={el.im} />
              </Link>
            );
          })}
        </div>
      </div>
      <div className={style.cards}>
        {
          card.map((el) => {
            return <CardU 
            w={100}
            h={200}
            price={el.price} 
            oldPrice={el.oldPrice} 
            image={el.image} 
            title={el.title} 
            text={el.text} />
          })

        }
      </div>
     <Bottom/>
    </div>
  );
};

export default CatalogCofe;
