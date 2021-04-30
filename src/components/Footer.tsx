import styles from '../styles/components/Footer.module.css'
import {Grid, Row,Col} from 'react-styled-flexboxgrid'
import Link from 'next/link'
export function Footer(){
    const date = new Date()
    return (
        <>
        <div className={styles.containerFooter}>
           <Grid>
               <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>

                           <Link href="/">
                            <h3><a>ConFesta</a></h3>
                           </Link>

                        <hr/>
                        </Col>
               </Row>
               <Row>
                    <Col xs={12} sm={12} md={4} lg={3}>
                        <strong>Crie seu convite online</strong>
                        <ul>
                            <li>
                                <Link href="/"><a>ConFesta</a></Link>
                            </li>
                            <li>
                                <Link href="/"><a>Sobre</a></Link>
                            </li>
                            <li>
                                <Link href="/"><a>Termos de uso</a></Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={3}>
                        <strong>Preços</strong>
                        <ul>
                        <li>
                            <Link href="#">
                                <a >Parceiros</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a >Clientes</a>
                            </Link>
                        </li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={3}>
                        <strong>Sobre a ConFesta</strong>
                        <ul>
                        <li>
                            <Link href="#">
                            <a >Modelos de convites </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a >Depoimentos de clientes</a>
                            </Link>
                        </li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={12}md={4} lg={3}>
                        <strong>Seja nosso Paceiro</strong>
                        <ul>
                            <li>
                                <Link href="#">
                                <a >Como ser paceiro</a>
                                </Link>
                            </li>
                            <li>
                            <Link href="#">
                                <a >Cadastrar empresa</a>
                            </Link>
                        </li>
                        </ul>
                    </Col>
               </Row>
           </Grid>
        </div>
        <div className={styles.footerCopy}>
            <Grid>
            <Row>
                   <Col xs={12} sm={12} md={12} lg={12}>
                        <strong> &copy; {date.getUTCFullYear()} ConFesta - Todos os dirteitos reservados </strong>
                   </Col>
               </Row>
            </Grid>
        </div>
        </>

    )
}
