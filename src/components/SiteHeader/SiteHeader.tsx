import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import logo from '@/pages/assets/images/logo.svg';


export default function SiteHeader() {
    return (
        <header className={styles.main_heading}>

            <Image className={styles.main_logo} src={logo} alt="Danilo Rechi's logo, composed by a D with an R inside of it" />

        </header>
    );
}