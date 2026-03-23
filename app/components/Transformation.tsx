import styles from "./Transformation.module.css";

const pointA = [
  "Хочу додати екстрим у вокал, але не знаю з чого почати",
  "Пробував робити гроул або скрим — звучить нестабільно",
  "Виникає дискомфорт, напруження або швидка втома голосу",
  "Вже вмію робити гроул і скрим від технік на звуження, але звучить тихо і не так потужно, як хотілося б",
  "Впевнений, що екстрим шкідливий або потребує природного «хрипкого» голосу",
  "Не знаю, як впровадити екстрим у пісні органічно",
  "Не вмію робити легку хрипотцю на тихому звуці"
];

const pointB = [
  "Розумію механіку екстрим-технік та контролюю їх без шкоди для голосу",
  "Вмію робити потужний гроул, скрім та легкий дісторшн",
  "Навчився впроваджувати техніки у пісні або в свою акторську роботу — звучання стало емоційнішим та потужнішим",
  "Відчуваю свободу у вокалі та впевненість у своїх можливостях",
  "Маю системні знання та вправи для подальшого розвитку",
  "Вмію робити легку хрипотцю на тихому звуці",
  "Вмію балансувати між звуженням та дихальним зусиллям, завдяки чому досягаю ще більш цікавих та різноманітних звучань",
];

export default function Transformation() {
  return (
    <section className={`section ${styles.transformation}`} id="transformation">
      <div className="section-container">
        <h2 className="section-title">Твій шлях</h2>
        <div className={styles.grid}>
          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <span className={styles.label}>Точка А</span>
              <span className={styles.labelSub}>Зараз</span>
            </div>
            <ul className={styles.list}>
              {pointA.map((item, i) => (
                <li className={styles.itemA} key={i}>
                  <span className={styles.dash}>–</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.arrow}>
            <span className={styles.arrowIcon}>→</span>
          </div>

          <div className={styles.column}>
            <div className={`${styles.columnHeader} ${styles.headerB}`}>
              <span className={styles.label}>Точка Б</span>
              <span className={styles.labelSub}>Після курсу</span>
            </div>
            <ul className={styles.list}>
              {pointB.map((item, i) => (
                <li className={styles.itemB} key={i}>
                  <span className={styles.plus}>+</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
