import styles from '../styles/components/Message.module.css'
import {Grid, Row,Col} from 'react-styled-flexboxgrid'
export function Message({name=""}){
    const  sendMessage = event =>{
        event.preventDefault()
        alert(event.target.name.value)
    }
    return(
        <div className={styles.containerMessage}>
            <Grid>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                    <form onSubmit={sendMessage}>
                        <label>Deixe uma Mensagem</label>
                        <textarea id="name"  rows={5} cols={33} required />
                        <button type="submit" >Enviar {name!="" ? `para ${name}`:""}</button>
                    </form>
                    </Col>
                </Row>
            </Grid>
        </div>
    )
}
