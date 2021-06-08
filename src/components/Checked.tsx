import styles from '../styles/components/Checkin.module.css'

function Checked ({checked}){
    return(
        <div className={styles.container}>
            <section>
            <h1>Checkin Confesta</h1>
            <p>{checked}</p>
            </section>
        </div>

    )
}

export default Checked
