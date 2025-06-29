import React from 'react'
import styles from './WaveBg.module.css'

export default function WaveBg() {
  return (
    <video
        className={styles.video}
        autoPlay
        playsInline
        muted
        loop
        src="/ui/barrel.mp4"
    >
    </video>
  )
}
