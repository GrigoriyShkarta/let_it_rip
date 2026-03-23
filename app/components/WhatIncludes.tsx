import styles from "./WhatIncludes.module.css";

const features = [
  {
    icon: "🎬",
    title: "Відеоуроки в записі",
    text: "Дивись у будь-який зручний час. Доступ дається поступово, два рази на тиждень.",
  },
  {
    icon: "📚",
    title: "PDF-конспекти",
    text: "Ключові моменти, технічні нюанси та поради в зручному форматі до кожного уроку.",
  },
  {
    icon: "🎸",
    title: "Авторські вправи в метал-стилі",
    text: "Практичні вправи під стилізовані метал мінусовки для глибокого засвоєння технік.",
  },
  {
    icon: "📩",
    title: "Зворотний зв'язок",
    text: "Перевірка завдань та індивідуальні рекомендації для тарифу зі зворотним зв'язком.",
  },
  {
    icon: "📞",
    title: "Груповий дзвінок",
    text: "Один груповий дзвінок для тарифу зі зворотним зв'язком наприкінці курсу для відповідей на питання та спільної практики.",
  },
  {
    icon: "🏆",
    title: "Сертифікат",
    text: "Підтвердження твоїх нових навичок для тих, хто обрав тариф зі зворотним зв'язком.",
  },
];

export default function WhatIncludes() {
  return (
    <section className={`section ${styles.whatIncludes}`} id="what-includes">
      <div className="section-container">
        <h2 className="section-title">Що входить до курсу?</h2>
        <div className={styles.grid}>
          {features.map((item, i) => (
            <div className={styles.item} key={i}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{item.icon}</span>
              </div>
              <div className={styles.textBlock}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemText}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
