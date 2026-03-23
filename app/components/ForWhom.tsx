import styles from "./ForWhom.module.css";

const items = [
  {
    icon: "🎤",
    title: "Вокалістам",
    text: "Усіх рівнів, які хочуть освоїти екстремальні техніки — гроули, скріми та легкий дісторшн — безпечно й контрольовано.",
  },
  {
    icon: "🎸",
    title: "Рок та метал музикантам",
    text: "Тим, хто хоче звучати потужніше на сцені та в студії. Курс дає інструменти для впевненого екстрим-вокалу.",
  },
  {
    icon: "🎓",
    title: "Викладачам вокалу",
    text: "Які прагнуть глибше зрозуміти екстрим-техніки та навчитися ефективно передавати їх своїм учням.",
  },
  {
    icon: "🔥",
    title: "Тим, хто мріє про хрипотцю",
    text: "Хочеш додати своєму голосу тієї самої легкої томної хрипотці? Цей курс навчить робити це правильно і безпечно.",
  },
  {
    icon: "💥",
    title: "Тим, хто хоче кричати потужно",
    text: "Для тих, хто мріє потужно та впевнено кричати і виражати весь спектр своїх емоцій.",
  },
  {
    icon: "🎭",
    title: "Акторам озвучки, театру та кіно",
    text: "Щоб передавати більше емоцій та забарвлень у своєму голосі, розширити акторський діапазон виразності.",
  },
];

export default function ForWhom() {
  return (
    <section className={`section ${styles.forWhom}`} id="for-whom">
      <div className="section-container">
        <h2 className="section-title">Кому підійде курс?</h2>
        <div className={styles.grid}>
          {items.map((item, i) => (
            <div className={styles.card} key={i}>
              <span className={styles.cardIcon}>{item.icon}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
