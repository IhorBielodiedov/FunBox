import React from "react";
import styles from "./app.module.scss";
import CatItem from "../components/CatItem";
function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appContent}>
        <h1 className={styles.title}>Ты сегодня покормил кота?</h1>
        <div className={styles.cardList}>
          <CatItem
            cardSubName="с фуа-гра"
            countOfPortions="10"
            mouses="мышь в подарок"
            weight="0.5"
            status="Печалька, с фуа-гра закончился."
            description="Печень утки разварная с артишоками."
          />
          <CatItem
            cardSubName="с рыбой"
            countOfPortions="40"
            mouses="2 мыши в подарок"
            weight="2"
            status="Печалька, с рыбой закончился."
            description="Головы щучьи с чесноком да свежайшая сёмгушка."
          />
          <CatItem
            cardSubName="с курой"
            countOfPortions="100"
            mouses="5 мышей в подарок"
            comment="заказчик доволен"
            weight="5"
            isAvailable={false}
            status="Печалька, с курой закончился."
            description="Филе из цыплят с трюфелями в бульоне."
          />
        </div>
      </div>
    </div>
  );
}

export default App;
