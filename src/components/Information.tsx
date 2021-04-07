import styles from '../styles/components/Information.module.css'
import { useRef } from 'react';
export function Information(){
    const api_key =  process.env.GOOGLE_API_KEY
    const palce = 'place_id:ChIJZ5XRTng3jgcRhlHxGhe8E60'
    const url_google_maps = `https://www.google.com/maps/embed/v1/place?q=${palce}&key=${api_key}`
    return(
        <div className={styles.containerInformation}>
            <section>
                <div>
                    <div>
                    <strong>Dia da festa</strong>
                    <p>Sábado</p>
                    <p>31 de julho 2021 às 20:00</p>
                    </div>
                    <div>
                        <strong>Local</strong>
                        <p>Rua Firmino Gonçalves Perreira Nº 144, Centro Timon - MA</p>
                        <iframe className={styles.mapInformation} src={url_google_maps} />
                    </div>
                </div>
                <div>
                    <div>
                        <strong>Exibíveis</strong>
                        <p>Após confirmar sua presença, você receberá o QR-Code para ter acessoa ao evento.</p>
                    </div>
                    <div>
                        <strong>Presentes</strong>
                        <p>Nossas sugestões de presentes, em loja física, estão disponíveis na loja WeddingX, Brasília-DF.</p>
                        <p>Nossas sugestões de presentes virtuais estão disponíveis online, no botão a seguir:</p>
                    </div>
                    <div>
                        <strong>Trage</strong>
                        <p>Passeio Completo.</p>
                    </div>
                    <div>
                        <strong>Mensagem da aniversariante</strong>
                        <p>Ficarei muito feliz com a sua presença</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
