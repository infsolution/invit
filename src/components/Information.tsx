import styles from '../styles/components/Information.module.css'
import { useRef } from 'react';
import {Grid, Row,Col} from 'react-styled-flexboxgrid'
export function Information({data}){
    const api_key =  process.env.GOOGLE_API_KEY
    const palce = 'place_id:ChIJZ5XRTng3jgcRhlHxGhe8E60'
    const url_google_maps = `https://www.google.com/maps/embed/v1/place?q=${palce}&key=${api_key}`
    return(
        <div className={styles.containerInformation}>
            <div>
            <Grid>
            <Row >
               <Col xs={12} sm={12} md={6} lg={6}>
                    <strong>Dia da festa</strong>
                    <p>Sábado</p>
                    <p>{data.party.date} às {data.party.hour}</p>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <div>
                        <strong>Exibível</strong>
                        {data.qrcode && <p><img src={data.qrcode} /></p> }
                        {!data.qrcode && <p>Após confirmar sua presença, você receberá o QR-Code para ter acessoa ao evento.</p>}
                    </div>
                </Col>
            </Row>
            <Row >
               <Col xs={12} sm={12} md={6} lg={6} >
                    <strong>Local</strong>
                    <p>{data.party.local}</p>
                    <p>{data.address.street}, {data.address.district} - {data.address.city}</p>
                    <iframe className={styles.mapInformation} src={url_google_maps} />
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} >
                <strong>Presentes</strong>
                    <p>Nossas sugestões de presentes, em loja física, estão disponíveis na {data.party.present_store}.</p>
                    <p>Nossas sugestões de presentes virtuais estão disponíveis no link a seguir:</p>
                    <p>Loja</p>
                    <strong>Traje</strong>
                    <p>{data.party.costume}</p>
                     <strong>Mensagem da aniversariante</strong>
                    <p>Ficarei muito feliz com a sua presença</p>
                </Col>
            </Row>
            </Grid>
            </div>
        </div>
    )
}
