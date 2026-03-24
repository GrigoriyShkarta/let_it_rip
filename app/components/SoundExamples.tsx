"use client";

import styles from "./SoundExamples.module.css";

export default function SoundExamples() {
  return (
    <section className={`section ${styles.sounds}`} id="sounds">
      <div className="section-container">
        <h2 className="section-title">Техніки, які ми будемо вивчати</h2>
        <div className={styles.videoWrapper}>
          <div className={styles.playerContainer}>
            <iframe
              src="https://www.youtube.com/embed/pPwMq7pzw2U"
              title="Extreme Vocal Examples"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.video}
            ></iframe>
          </div>
          <div className={styles.info}>
            <p className={styles.description}>
              Послухайте приклади технік, які ми будемо вивчати: від глибокого гроулу до потужного скріму 
              та тієї самої фірмової хрипотці.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
