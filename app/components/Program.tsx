import styles from "./Program.module.css";

const weeks = [
  {
    week: 1,
    title: "Основи гроулів та скріму",
    items: [
      "Анатомія та фізіологія продувних технік",
      "Найдієвіші способи знаходження гроулів та скрімів",
      "Закріплення технік гроулу та скріму",
      "Оформлення глибокого гроулу та потужного скріму за допомогую внутрішньої та зовнішньої артикуляції",
      "Практичні вправи для розвитку контролю на голосних і складах",
    ],
  },
  {
    week: 2,
    title: "Стабілізація гроулів та скрімів на фразах, практика на піснях",
    items: [
      "Стабілізація гроулів та скрімів на українських та англійських фразах",
      "Практика на піснях",
      "Продовження експерементів з техніками",
      "Тренування витривалості та сили голосу",
    ],
  },
  {
    week: 3,
    title: "Пошук та закріплення продувного дісторшну",
    items: [
      "Ефективні способи для знаходження легкої томної хрипотці",
      "Закріплення техніки продувний дісторшн на голосних і складах",
      "Тренування контролю та стабілізації техніки",
    ],
  },
  {
    week: 4,
    title: "Застосування продувного дісторшину та завершення курсу",
    items: [
      "Впровадження техніки продувний дісторшн у реальну пісню",
      "Фінальний груповий дзвінок — відповіді на питання та практика",
      "Підведення підсумків та отримання сертифікатів",
    ],
  },
];

export default function Program() {
  return (
    <section className={`section ${styles.program}`} id="program">
      <div className="section-container">
        <h2 className="section-title">Програма курсу</h2>
        <div className={styles.timeline}>
          {weeks.map((w, i) => (
            <div className={styles.weekCard} key={i}>
              <div className={styles.weekBadge}>
                <span className={styles.weekNumber}>Тиждень {w.week}</span>
              </div>
              <div className={styles.weekContent}>
                <h3 className={styles.weekTitle}>{w.title}</h3>
                <ul className={styles.weekList}>
                  {w.items.map((item, j) => (
                    <li className={styles.weekItem} key={j}>
                      <span className={styles.bullet} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
