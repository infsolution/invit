import styles from "../styles/components/Navbar.module.css";
import {Grid, Row,Col} from 'react-styled-flexboxgrid'
import Link from 'next/link'
import { Button } from "reactstrap";
import Cookie from 'js-cookie'
import { useRouter } from 'next/router'
export function Navbar(){
    const router = useRouter()
    const token = Cookie.get('token')
    function logout(){
        Cookie.remove('token')
        router.push('/login')
    }
    return(
        <header className={styles.header}>
           <nav className={`${styles.nav} container`}>
            <Link href="/" >
                <a className={styles.logo}>ConFesta</a>
            </Link>
            { !token && <Link href="/login">
                <a  className={styles.login}>Entrar</a>
            </Link>}
            {token && <Button onClick={logout}>Sair</Button>}
           </nav>
        </header>
    )
}
