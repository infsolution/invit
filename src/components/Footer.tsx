import styles from '../styles/components/Footer.module.css'
import {Grid, Row,Col} from 'react-styled-flexboxgrid'
export function Footer(){
    const date = new Date()
    return (
        <div className={styles.containerFooter}>
           <Grid>
               <Row>
                    <Col xs={12} sm={12} md={4} lg={3}>
                        <strong>Crie seu convite online</strong>
                        <ul>
                            <li><a href="#">Informações </a></li>
                            <li><a href="#">Informações </a></li>
                            <li><a href="#">Informações </a></li>
                            <li><a href="#">Informações </a></li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={3}>
                        <strong>Preços</strong>
                        <ul>
                            <li><a href="#">Informações </a></li>
                            <li><a href="#">Informações </a></li>
                            <li><a href="#">Informações </a></li>
                            <li><a href="#">Informações </a></li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={3}>
                        <strong>Sobre a ConFesta</strong>
                        <ul>
                            <li><a href="#">Informações </a></li>
                            <li><a href="#">Informações </a></li>
                            <li><a href="#">Informações </a></li>
                            <li><a href="#">Informações </a></li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={12}md={4} lg={3}>
                        <strong>Seja nosso Paceiro</strong>
                        <ul>
                            <li><a href="#">Informações </a></li>
                            <li><a href="#">Informações </a></li>
                            <li><a href="#">Informações </a></li>
                            <li><a href="#">Informações </a></li>
                        </ul>
                    </Col>
               </Row>
           </Grid>
            <strong> &copy; {date.getFullYear()} ConFesta - Todos os dirteitos reservados </strong>
        </div>
    )
}
