import Image from "next/image";
import styles from "./About.module.css";
import authorImg from "@/assets/author.jpg";

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="section-container">
        <h2 className="section-title">Про автора</h2>
        <div className={styles.wrapper}>
          <div className={styles.imageBlock}>
            <div className={styles.imageContainer}>
              <Image
                src={authorImg}
                alt="Яна — автор курсу LET IT RIP"
                width={400}
                height={500}
                className={styles.photo}
                quality={85}
              />
              <div className={styles.imageAccent} />
            </div>
          </div>
          <div className={styles.textBlock}>
            <p className={styles.greeting}>Привіт! Я Яна 👋</p>
            <p className={styles.role}>
              Викладач сучасного, рок- та екстремального вокалу, співачка,
              музикант та авторка пісень
            </p>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statLabel}>років у музиці</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>9+</span>
                <span className={styles.statLabel}>років у викладанні вокалу</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>10000+</span>
                <span className={styles.statLabel}>проведених уроків</span>
              </div>
            </div>
            <p className={styles.bio}>
              За свою кар&apos;єру я провела тисячі уроків вокалу, організувала
              вокальні марафони та курси, в яких брали участь сотні учасників, провела
              десятки майстер-класів з екстремальних прийомів для вокалістів і
              тренерів, випустила власні збірки вокальних вправ у рок стилі.
            </p>
            <p className={styles.mission}>
              Моя мета — допомогти вокалістам та викладачам освоїти складні
              техніки вокалу та розвинути їхні навички на найвищому рівні.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
