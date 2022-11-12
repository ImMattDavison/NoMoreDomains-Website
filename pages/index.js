import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
		<Head>
			<title>NoMoreDomains | Put a stop to your unnecessary domain purchases</title>
			<meta name="description" content="NoMoreDomains is a browser extension designed to help you avoid registering new domains that will ultimately end up unused." />
			
			<link rel="icon" href="/assets/favicons/favicon.ico" />
			<link rel="apple-touch-icon" sizes="180x180" href="/assets/favicons/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicons/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicons/favicon-16x16.png" />
			<link rel="manifest" href="/assets/site.webmanifest" />
		</Head>

		<main className={styles.main}>
			
		</main>
    </div>
  )
}
