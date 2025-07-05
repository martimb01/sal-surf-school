import WaveBg from '@/components/ui/WaveBg';
import styles from './page.module.css'
import { VT323 } from 'next/font/google';
// VT323 Font properties
const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
});

export default function page() {
  return (
    <>
      <div className={`${styles.main} ${vt323.className}`}>
          <h1>Contacts</h1>
          <h2>salsurfingschool@gmail.com</h2>
          <h2>+351935156585</h2>
      </div>
      <WaveBg/>
    </>
  )
}
