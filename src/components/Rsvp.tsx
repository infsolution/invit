import styles from '../styles/components/Rsvp.module.css'

export function Rsvp (){
return(
    <div>
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

        <div className={styles.rsvpButton}>
            <button >Eu vou =)</button>
            <button >Não vou =(</button>
        </div>
    </div>
)
}
