import React from 'react'
import styles from './WaveBg.module.css'

export default function WaveBg() {
  return (
    <video
        className={styles.video}
        autoPlay
        muted
        loop
        src="/barrel.mp4"
    >
    </video>
  )
}
