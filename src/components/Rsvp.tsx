import styles from '../styles/components/Rsvp.module.css'
import {Grid, Row,Col} from 'react-styled-flexboxgrid'
export function Rsvp ({id}){
    const  confirm = async event =>{
        event.preventDefault()

        const res = await fetch(
            `http://localhost:3333/v1/invited/${event.target.name}`,{
            body: JSON.stringify({
                confirm: event.target.value
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT'
            }
        )
        const result = await res.json()
        if(result.result){
            alert("Sua presença foi confirmada!")
        }else{
            alert("Houve um erro temporário!")
        }


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
            <button onClick={confirm} name={id} value="VOU">
                <img src="/svg/dance.svg" alt="confirm dance button"/>
                Eu vou
            </button>
            <button onClick={confirm} name={id} value="NÃO VOU">
                <img src="/svg/ops.png" alt="not confirm oops"/>
                Não vou
            </button>
        </div>
        </Col>
    </Row>
</Grid>
)
}
