import styles from '../styles/components/Footer.module.css'
import {Grid, Row,Col} from 'react-styled-flexboxgrid'
import Link from 'next/link'
export function Footer(){
    const date = new Date()
    return (
        <div className={styles.containerFooter}>
           <Grid>
               <Row>
                    <Col xs={12} sm={12} md={4} lg={3}>
                        <strong>Crie seu convite online</strong>
                        <ul>
                            <li>
                                <Link href="/"><a>ConFesta</a></Link>
                            </li>
                            <li>
                                <Link href="/"><a>ConFesta</a></Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={3}>
                        <strong>Preços</strong>
                        <ul>
                        <li>
                            <Link href="#">
                                <a >Informações </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a >Informações </a>
                            </Link>
                        </li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={3}>
                        <strong>Sobre a ConFesta</strong>
                        <ul>
                        <li>
                            <Link href="#">
                            <a >Informações </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a >Informações </a>
                            </Link>
                        </li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={12}md={4} lg={3}>
                        <strong>Seja nosso Paceiro</strong>
                        <ul>
                            <li>
                                <Link href="#">
                                <a >Informações </a>
                                </Link>
                            </li>
                            <li>
                            <Link href="#">
                                <a >Informações </a>
                            </Link>
                        </li>
                        </ul>
                    </Col>
               </Row>
           </Grid>
            <strong> &copy; {date.getFullYear()} ConFesta - Todos os dirteitos reservados </strong>
        </div>
    )
}
