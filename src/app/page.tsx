import Image from 'next/image'
import styles from './page.module.css'
import logo from './assets/images/logo.svg';
import githubLogo from './assets/images/github.svg';
import linkedinLogo from './assets/images/linkedin.svg';


export default function Home() {
  return (
    <main className={styles.main}>

      <header className={styles.main_heading}>

        <Image className={styles.main_logo} src={logo} alt="Danilo Rechi's logo, composed by a D with an R inside of it"/>

        <ul id={styles.language_selector}>
          <li> <a href="/en" className={styles.language_item}> English </a></li>
          <li> <a href="/pt" className={styles.language_item}> Português </a></li>
        </ul>
          
      </header>

      <section id="hello">
        <h1 id={styles.greeting}>Hi! I&apos;m <span className={styles.highlight}>Danilo Rechi</span>,</h1>
        <h2 id={styles.what_i_do}>and I solve problems using computers.</h2>
      </section>

      <section id={styles.social_section} >
        <ul id={styles.socialmedia_list}>
          <li className={styles.socialmedia_item}>
            <a href="https://www.linkedin.com/in/danilo-rechi/">
              <Image src={linkedinLogo} className={styles.socialmedia_logo}/>
            </a>
          </li>
          <li className={styles.socialmedia_item}>
            <a href="https://github.com/dansoah"> 
              <Image src={githubLogo} className={styles.socialmedia_logo} />
            </a>
          </li>
        </ul>
      </section>

      <footer>
        90&apos;s style
      </footer>

    </main>
  )
}
