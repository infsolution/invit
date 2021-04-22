import styles from '../styles/components/Galery.module.css'
import {Grid, Row,Col} from 'react-styled-flexboxgrid'
export function Galery({data}){

    return(
        <div className={styles.containerGaley}>
            <h2>Minhas fotos</h2>
            <Grid>
                <Row>
            {data.galery.map((foto)=>{
                return <Col xs={12} sm={12} md={4} lg={4} key={foto.id}><img src={foto.path} alt={`Fotos da ${data.partyhost.name}`}/></Col>
            })}
                </Row>
            </Grid>
        </div>
    )
}
