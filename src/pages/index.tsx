import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import logo from './assets/images/logo.svg';
import githubLogo from './assets/images/github.svg';
import linkedinLogo from './assets/images/linkedin.svg';

import SiteHeader from '@/components/SiteHeader';

export default function Home() {
  return (
    <main className={styles.main}>

      <SiteHeader />

      <section id="hello">
        <h1 id={styles.greeting}>Hi! I&apos;m <span className={styles.highlight}>Danilo Rechi</span>,</h1>
        <h2 id={styles.what_i_do}>and I solve problems using computers.</h2>
      </section>

      <section id={styles.social_section} >
        <ul id={styles.socialmedia_list}>
          <li className={styles.socialmedia_item}>
            <a href="https://www.linkedin.com/in/danilo-rechi/">
              <Image src={linkedinLogo} className={styles.socialmedia_logo} alt="Linkedin logo" />
            </a>
          </li>
          <li className={styles.socialmedia_item}>
            <a href="https://github.com/dansoah">
              <Image src={githubLogo} className={styles.socialmedia_logo} alt="Github logo" />
            </a>
          </li>
        </ul>
      </section>

    </main>
  )
}
