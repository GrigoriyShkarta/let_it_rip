"use client";

import styles from "./Pricing.module.css";

interface PricingFeature {
  text: string;
  included: boolean;
  highlight?: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  oldPrice: string;
  features: PricingFeature[];
  accent: boolean;
  vip?: boolean;
  spotsLimit?: string;
}

const plans: PricingPlan[] = [
  {
    name: "Базовий",
    price: "4 900",
    oldPrice: "8 000",
    features: [
      { text: "Доступ до матеріалів на 1 місяць", included: true },
      { text: "Усі відеоуроки в записі", included: true },
      { text: "PDF-конспекти до кожного уроку", included: true },
      { text: "Авторські вправи в метал-стилі", included: true },
      { text: "Груповий дзвінок наприкінці курсу", included: false },
      { text: "Перевірка завдань та зворотний зв'язок", included: false },
      { text: "Сертифікат про проходження", included: false },
    ],
    accent: false,
  },
  {
    name: "Преміум",
    price: "8 100",
    oldPrice: "13 000",
    features: [
      { text: "Доступ до матеріалів на 2 місяці", included: true },
      { text: "Усі відеоуроки в записі", included: true },
      { text: "PDF-конспекти до кожного уроку", included: true },
      { text: "Авторські вправи в метал-стилі", included: true },
      { text: "Груповий дзвінок наприкінці курсу", included: true },
      { text: "Перевірка завдань та зворотний зв'язок", included: true },
      { text: "Сертифікат про проходження", included: true },
    ],
    accent: true,
  },
  {
    name: "Ультра",
    price: "11 500",
    oldPrice: "16 500",
    features: [
      { text: "Доступ до матеріалів на 3 місяці", included: true },
      { text: "Усі відеоуроки в записі", included: true },
      { text: "PDF-конспекти до кожного уроку", included: true },
      { text: "Авторські вправи в метал-стилі", included: true },
      { text: "Груповий дзвінок наприкінці курсу", included: true },
      { text: "Перевірка завдань та зворотний зв'язок", included: true },
      { text: "Сертифікат про проходження", included: true },
      { text: "2 персональні онлайн-сесії: точковий розбір твого голосу та технік", included: true, highlight: true },
    ],
    accent: false,
    vip: true,
    spotsLimit: "Лише 5 місць",
  },
];

export default function Pricing() {
  return (
    <section className={`section ${styles.pricing}`} id="pricing">
      <div className="section-container">
        <h2 className="section-title">Обери свій тариф</h2>
        <div className={styles.grid}>
          {plans.map((plan, i) => (
            <div
              className={`${styles.card} ${plan.accent ? styles.accent : ""} ${
                plan.vip ? styles.vip : ""
              }`}
              key={i}
            >
              {plan.accent && (
                <div className={styles.badge}>Популярний</div>
              )}
              {plan.vip && <div className={styles.badge}>Максимальний</div>}
              <h3 className={styles.planName}>{plan.name}</h3>
              {plan.spotsLimit && (
                <div className={styles.spotsLimit}>{plan.spotsLimit}</div>
              )}
              
              <div className={styles.priceContainer}>
                {plan.oldPrice && (
                  <span className={styles.oldPrice}>{plan.oldPrice} грн</span>
                )}
                <div className={styles.priceBlock}>
                  <span className={styles.price}>{plan.price}</span>
                  <span className={styles.currency}>грн</span>
                </div>
              </div>

              <ul className={styles.features}>
                {plan.features.map((f, j) => (
                  <li
                    className={`${styles.feature} ${
                      !f.included ? styles.disabled : ""
                    } ${f.highlight ? styles.highlight : ""}`}
                    key={j}
                  >
                    <span className={styles.featureIcon}>
                      {f.included ? "✓" : "—"}
                    </span>
                    {f.text}
                  </li>
                ))}
              </ul>
              <a
                href="https://t.me/yana_vocalcoach"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.button} ${
                  plan.accent ? styles.buttonAccent : ""
                }`}
              >
                Обрати тариф
              </a>
            </div>
          ))}
        </div>

        <div className={styles.urgencyBlock}>
          <p className={styles.urgencyTitle}>Встигни забронювати місце за вигідною ціною!</p>
          <p className={styles.urgencyText}>
            🔥 Ціна актуальна лише до <strong>1 квітня</strong>. Прямо зараз діє максимальна знижка,
            але вартість зростає щотижня. Чим ближче до старту — тим вища ціна.
          </p>
          <p className={styles.bookingHighlight}>
            Не готовий оплатити одразу? <br />
            <strong>Забронюй місце всього за 1000 грн</strong> та заморозь поточну вигідну ціну для себе!
            <br />Залишок суми сплачується до 17 квітня.
          </p>
          {/* <p className={styles.bookingHighlight}>Залишок суми сплачується до 17 квітня</p> */}
          <a
            href="https://t.me/yana_vocalcoach"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.bookingButton}
          >
            Забронювати місце
          </a>
        </div>

        <div className={styles.contactTeacher}>
          <p className={styles.contactTitle}>Залишилися питання?</p>
          <p className={styles.contactText}>
            Пиши мені особисто! Я відповім на всі твої запитання, допоможу обрати тариф та 
            підкажу, як курс допоможе саме твоєму голосу. 
            Ти спілкуватимешся безпосередньо зі мною.
          </p>
          <a
            href="https://t.me/yana_vocalcoach"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactButton}
          >
            Написати викладачу
          </a>
        </div>

        <p className={styles.note}>
          🎬 Усі уроки в записі · 📅 Старт 20 квітня
        </p>
      </div>
    </section>
  );
}
