import styles from './styles/Header.module.css'
import {
    Button,
    Container,
    Row,
    Col
} from 'react-bootstrap';
export function Header(){
    return(
        <>
        <Container fluid={true} className={styles.container}>
            <Row>
            <Col xs={12} sm={12} md={12} xl={12} lg={6}  >
                <div className={styles.info}>
                <h1>SAIBA QUANTOS CONVIDADOS ESTARÃO PRESENTES EM SEU EVENTO!</h1>
                <p>Adicione sofisticação às suas festas com nosso <strong>RSVP</strong>  </p>
                <p>Envie convites online e ganhe praticidade, tempo e dinheiro!</p>
                </div>
            </Col>

            <Col xs={12} sm={12} md={12} xl={12} lg={6} >
                <div className={styles.card}>
                    <div>
                    <h5>Nossos planos se adequam ao seu evento!</h5>
                    </div>
                        <img src="/assets/tacas03.png" alt=""/>
                    </div>
            </Col>
            </Row>
        </Container>
        </>
    )
}
