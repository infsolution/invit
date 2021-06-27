import styles from './styles/Prices.module.css'
import {
    CardGroup,
    Card
} from 'react-bootstrap';
export function Prices(){

    return(
        <>

        <CardGroup className={styles.container}>

            <Card>

                <Card.Body>
                <Card.Title><h2>FREE</h2> </Card.Title>
                <Card.Text>
                    <h3>$R 0.00</h3>
                </Card.Text>
                <Card.Text>
                    <ul>
                        <div className={styles.item}>
                        <img src="/assets/confirm66.png" alt=""/>
                        <li>
                            Envie Convites personalidados para até 100 pessoas
                        </li>
                        </div>
                        <div className={styles.item}>
                        <img src="/assets/confirm66.png" alt=""/>
                        <li>Confirmação online (RVPS)</li>
                        </div>
                        <div className={styles.item}>
                        <img src="/assets/confirm66.png" alt=""/>
                        <li>
                        Albúm de fotos
                        </li>
                        </div>
                        <div className={styles.item}>
                        <img src="/assets/confirm66.png" alt=""/>
                        <li>
                        Lista de presentes
                        </li>
                        </div>
                        <div className={styles.item}>
                        <img src="/assets/confirm66.png" alt=""/>
                        <li>
                        Relatórios
                        </li>
                        </div>
                    </ul>
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">ATÉ 100 CONVITES</small>
                </Card.Footer>
            </Card>
            <Card>

                <Card.Body>
                <Card.Title><h2>MASTER</h2></Card.Title>
                <Card.Text>
                    <h3>$R 49.90</h3>
                </Card.Text>
                <Card.Text>
                <ul>
                        <div className={styles.item}>
                        <img src="/assets/confirm66.png" alt=""/>
                        <li>
                            Envie Convites personalidados para até 300 pessoas
                        </li>
                        </div>
                        <div className={styles.item}>
                        <img src="/assets/confirm66.png" alt=""/>
                        <li>Confirmação online (RVPS)</li>
                        </div>
                        <div className={styles.item}>
                        <img src="/assets/confirm66.png" alt=""/>
                        <li>
                        Albúm de fotos
                        </li>
                        </div>
                        <div className={styles.item}>
                        <img src="/assets/confirm66.png" alt=""/>
                        <li>
                        Lista de presentes
                        </li>
                        </div>
                        <div className={styles.item}>
                        <img src="/assets/confirm66.png" alt=""/>
                        <li>
                        Relatórios
                        </li>
                        </div>
                        <div className={styles.item}>
                        <img src="/assets/confirm66.png" alt=""/>
                        <li>
                        Notificações via Whatsapp
                        </li>
                        </div>
                    </ul>
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">ATÉ 300 CONVITES</small>
                </Card.Footer>
            </Card>
            <Card>

                <Card.Body>
                <Card.Title><h2>PLUS</h2></Card.Title>
                <Card.Text>
                    <h3>$R 199.90</h3>
                </Card.Text>
                <Card.Text>
                    <ul>
                    <div className={styles.item}>
                        <img src="/assets/confirm66.png" alt=""/>
                        <li>
                            Envie Convites personalidados para até 1000 pessoas.
                        </li>
                       </div>
                       <div className={styles.item}>
                        <img src="/assets/confirm66.png" alt=""/>
                        <li>
                            Confirmação online (RVPS).
                        </li>
                        </div>
                        <div className={styles.item}>
                        <img src="/assets/confirm66.png" alt=""/>
                        <li>
                        Albúm de fotos
                        </li>
                        </div>
                        <div className={styles.item}>
                        <img src="/assets/confirm66.png" alt=""/>
                        <li>
                        Lista de presentes
                        </li>
                        </div>
                        <div className={styles.item}>
                        <img src="/assets/confirm66.png" alt=""/>
                        <li>
                        Relatórios
                        </li>
                        </div>
                        <div className={styles.item}>
                        <img src="/assets/confirm66.png" alt=""/>
                        <li>
                        Notificações via Whatsapp
                        </li>
                        </div>
                    </ul>
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">ATÉ 1000 CONVITES</small>
                </Card.Footer>
            </Card>
        </CardGroup>
        </>
    )
}
