import styles from '../styles/components/Rsvp.module.css'

export function Rsvp (){
    const  confirm = event =>{
        event.preventDefault()
        alert('Eu vou')
    }
    const  notConfirm = event =>{
        event.preventDefault()
        alert('Não vou')
    }
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
            <button onClick={confirm}>Eu vou =)</button>
            <button onClick={notConfirm}>Não vou =(</button>
        </div>
    </div>
)
}
