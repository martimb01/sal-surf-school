import Image from "next/image"
import styles from './Separator.module.css'

export default function Separator() {
  return (
    <div className={styles.wrapper}>
        <Image
          src='/ui/wave.png'
          fill
          alt="section"
        />
    </div>
  )
}
