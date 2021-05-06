import styles from "../styles/components/Navbar.module.css";
import {Grid, Row,Col} from 'react-styled-flexboxgrid'
import Link from 'next/link'
export function Navbar(){
    return(
        <header className={styles.header}>
           <nav className={`${styles.nav} container`}>
            <Link href="/" >
                <a className={styles.logo}>ConFesta</a>
            </Link>
            <Link href="/login">
                <a  className={styles.login}>Entrar</a>
            </Link>
           </nav>
        </header>
    )
}
