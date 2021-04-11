import styles from '../styles/components/Rsvp.module.css'
import {Grid, Row,Col} from 'react-styled-flexboxgrid'
export function Rsvp (){
    const  confirm = event =>{
        event.preventDefault()
        alert('Eu vou')
    }
    const  notConfirm = event =>{
        event.preventDefault()
        alert('Não vou')
    }
return(
    <Grid>
    <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
        <div className={styles.rsvpContainer}>
            <div>
            <span>Confirme sua presença.</span>
            </div>
        </div>
        <div className={styles.rsvpContainer}>
        <div >
            <span>No dia 31/07/2021</span>
            </div>
        </div>
        </Col>
    </Row>
    <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
        <div className={styles.rsvpButton}>
            <button onClick={confirm}>
                <img src="/svg/dance.svg" alt="confirm dance button"/>
                Eu vou
            </button>
            <button onClick={notConfirm}>
                <img src="/svg/ops.png" alt=""/>
                Não vou
            </button>
        </div>
        </Col>
    </Row>
</Grid>
)
}
