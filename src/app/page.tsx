'use client'
import styles from './page.module.css'
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/purchases');
  return <main className={styles.main}></main>
}
