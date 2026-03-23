"use client";

import styles from "./Footer.module.css";

export default function Footer() {
  const scrollToPrice = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Готовий перевернути свій вокал?</h2>
        <p className={styles.ctaSubtitle}>
          Опануй екстрим-вокал та додай своєму голосу нового рівня потужності
        </p>
        <button className={styles.ctaButton} onClick={scrollToPrice}>
          Обрати тариф
        </button>
      </div>
      <div className={styles.bottom}>
        <div className={styles.brand}>
          <span className={styles.logo}>LET IT RIP</span>
          <span className={styles.copy}>
            © {new Date().getFullYear()} Усі права захищені
          </span>
        </div>
        <div className={styles.links}>
          <a
            href="https://t.me/yana_vocalcoach"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Telegram
          </a>
          <a
            href="https://www.instagram.com/yana_vocalcoach"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
