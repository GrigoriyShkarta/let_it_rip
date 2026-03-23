"use client";

import Image from "next/image";
import styles from "./Hero.module.css";
import bannerImg from "@/assets/banner.jpg";
import bannerMobileImg from "@/assets/banner-mobile.jpg";

export default function Hero() {
  const scrollToPrice = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.imageWrapper}>
        <Image
          src={bannerImg}
          alt="LET IT RIP — курс з екстрим вокалу"
          fill
          priority
          quality={90}
          className={`${styles.bgImage} ${styles.desktopOnly}`}
          sizes="100vw"
        />
        <Image
          src={bannerMobileImg}
          alt="LET IT RIP — курс з екстрим вокалу (мобільна версія)"
          fill
          priority
          quality={90}
          className={`${styles.bgImage} ${styles.mobileOnly}`}
          sizes="100vw"
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <p className={styles.tagline}>Онлайн-курс з екстремального вокалу</p>
        <h1 className={styles.title}>LET IT RIP</h1>
        <p className={styles.subtitle}>
          Продувні екстремальні техніки: &nbsp;
          <br />
          гроули, скріми та легка хрипотця у голосі &nbsp;
          <br />
          про яку мріє кожен вокаліст
        </p>

        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Старт</span>
            <span className={styles.metaValue}>20 квітня</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Тривалість</span>
            <span className={styles.metaValue}>4 тижні</span>
          </div>
        </div>

        <button className={styles.cta} onClick={scrollToPrice}>
          Обрати тариф
        </button>
      </div>
    </section>
  );
}
