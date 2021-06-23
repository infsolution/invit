import styles from '../styles/components/Information.module.css'
import { useRef } from 'react';
import {Grid, Row,Col} from 'react-styled-flexboxgrid'
const datetools = require('../utils/datestools')
export function Information({data}){
    const api_key =  process.env.GOOGLE_API_KEY
    const palce = 'place_id:ChIJbdpOKZI3jgcRfoC2yiiHZpk'
    const url_google_maps = `https://www.google.com/maps/embed/v1/place?q=${palce}&key=${api_key}`
    const day = data.party.date.slice(8,10)
    const mounth = data.party.date.slice(5,7)
    const year = data.party.date.slice(0,4)
    return(
        <div className={styles.containerInformation}>
            <div>
            <Grid>
            <Row >
               <Col xs={12} sm={12} md={6} lg={6}>
                    <strong>Dia da festa</strong>
                    <p>{datetools.setDay(data.party.day)}</p>
                    <p>{`${datetools.setDate(data)} as ${data.party.hour.slice(0,5)} horas`}
                    </p>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <div>
                        <strong>Exibível</strong>
                        {data.qrcode && <div className={styles.qrcodeContainer}>
                            <p>Este é o seu exibível, baixe-o para o seu smartphone e apresente na entrada do envento!</p>
                        <img src={data.qrcode} />
                        </div>}
                        {!data.qrcode && <p>Confirme sua presença para receber QR-Code exibível de acesso ao evento.</p>}
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
                
                    {   
                     data.party.present_store &&   <div><strong>Presentes</strong>
                     <p>Nossas sugestões de presentes, em loja física, estão disponíveis na {data.party.present_store}.</p></div>
                    }
                    {data.presents.length > 0
                        &&
                        <div>
                        <p>Nossas sugestões de presentes virtuais estão disponíveis no link a seguir:</p>
                        <p>Loja</p>
                        </div>
                    }
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
