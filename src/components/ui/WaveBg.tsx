import React from 'react'
import styles from './WaveBg.module.css'
import Image from 'next/image'

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
      <img
        className={styles.image}
        src="/ui/barrel.png" 
        alt="Barrel" 
      />
    </video>
  )
}
