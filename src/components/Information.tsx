import styles from '../styles/components/Information.module.css'

export function Information(){
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
                        <p>Rua cento e três Nº 489 Parque União Timon - MA</p>
                        <iframe className={styles.mapInformation} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" />
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
