import styles from '../styles/components/Rsvp.module.css'
import {Grid, Row,Col} from 'react-styled-flexboxgrid'
import  Address  from '../pages/address'
export function Rsvp ({data}){
    const  confirm = async event =>{
        event.preventDefault()

        const res = await fetch(
            `${Address.remote}invited/${event.target.name}`,{
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
        console.log(res)
        if(result.result){
            if(event.target.value == 'VOU'){
                alert("Sua presença foi confirmada!")
            }
            if(event.target.value == 'NÃO VOU'){
                alert("Que pena! Mas se mudar de ideia ainda pode confirmar!")
            }
            location.reload()
        }else{
            alert("Houve um erro temporário!")
        }
    }

return(
    <Grid>
    <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
        <div className={styles.rsvpContainer}>
            <div>
            {data.invited.confirmation == 'VOU' && <span>Sua presensa jà foi confirmada!</span>}
            {data.invited.confirmation == 'NÃO VOU' &&  <span>Caso mude de ideia confirme sua presença.</span>}
            {data.invited.confirmation == 'SEM RESPOSTA' &&  <span>Confirme sua presença.</span>}
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
            {data.invited.confirmation == "NÃO VOU" &&
            <button onClick={confirm} name={data.invited.id} value="VOU" className={styles.buttonConfirm}>
                <img src="/svg/dance.svg" alt="confirm dance button"/>
                Eu vou
            </button>}

            {data.invited.confirmation == "SEM RESPOSTA"
            &&
                <button onClick={confirm} name={data.invited.id} value="VOU" className={styles.buttonConfirm}>
                <img src="/svg/dance.svg" alt="confirm dance button"/>
                Eu vou
            </button>}

            {data.invited.confirmation == "VOU" &&
                <button onClick={confirm} name={data.invited.id} value="NÃO VOU" className={styles.buttonNotConfirm}>
                <img src="/svg/ops.png" alt="not confirm oops"/>
                Não vou
                </button>}

            {data.invited.confirmation == "SEM RESPOSTA"
            &&
                <button onClick={confirm} name={data.invited.id} value="NÃO VOU" className={styles.buttonNotConfirm}>
                <img src="/svg/ops.png" alt="not confirm oops"/>
                Não vou
                </button>
            }
        </div>
        </Col>
    </Row>
</Grid>
)
}
