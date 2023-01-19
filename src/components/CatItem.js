import styles from "./catItem.module.scss";
import cn from "classnames";
import { useState } from "react";

const CatItem = ({
  cardSubName,
  countOfPortions,
  mouses,
  weight,
  comment,
  isAvailable = true,
  status,
  description,
}) => {
  const [active, setActive] = useState(false);

  let cardClass = cn({
    [styles.root]: isAvailable && !active,
    [styles.rootSelected]: isAvailable && active,
    [styles.rootDisabled]: !isAvailable,
  });

  const onClick = () => {
    setActive(!active);
  };
  return (
    <div className={styles.container}>
      <div className={cardClass} onClick={onClick}>
        <div className={cn(styles.cardHeader)}>
          <div className={styles.cardCorner}></div>
          <div className={styles.cardTitle}>
            <p className={styles.cardTitleText}>Сказочное заморское яство</p>
            <p className={styles.cardTitleSelectedHoverText}>
              Котэ не одобряет?
            </p>
          </div>
        </div>
        <div className={styles.cardLayout}>
          <div className={styles.cardImg}></div>
          <h2 className={styles.cardName}>
            Нямушка
            <p className={styles.cardSubName}>{cardSubName}</p>
          </h2>
          <div className={styles.cardText}>
            <p>
              <span>{countOfPortions}</span> порций
            </p>
            <p>{mouses}</p>
            <p>{comment}</p>
          </div>
          <div className={styles.weightCircle}>
            <div className={styles.cardWeigth}>
              <span>{weight}</span>
              <div>кг</div>
            </div>
          </div>
        </div>
        <div className={styles.cardFooter}>
          <p className={styles.descText}>{description}</p>
          <p className={styles.buyText}>
            Чего сидишь? Порадуй котэ, <a href="#">купи.</a>
          </p>
          <p className={styles.isOverText}>{status}</p>
        </div>
      </div>
    </div>
  );
};

export default CatItem;
