import styles from './LessonCard.module.css'

type Props = {
    title: String,
    subTitle: String,
    price1: String,
    price2: String,
    price3: String
}

export default function LessonCard({title, subTitle, price1, price2, price3} : Props) {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.title}>
            <h1>{title}</h1>
        </div>
        <div className={styles.subTitle}>
            <h2>{subTitle}</h2>
        </div>
        <div className={styles.price}>
            {price1}
            <br />
            {price2}
            <br />
            {price3}
        </div>
    </div>
  )
}
