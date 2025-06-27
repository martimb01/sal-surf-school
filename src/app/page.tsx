import styles from "./page.module.css";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.heroSection}>
          <Carousel />
        </div>
        <div className={styles.firstSection}></div>
      </main>
    </div>
  );
}
