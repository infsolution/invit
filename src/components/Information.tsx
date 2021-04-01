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
                </div>
                <div>
                    <div>
                        <strong>Local</strong>
                    </div>
                </div>
            </section>
        </div>
    )
}
