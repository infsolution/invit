import styles from './styles/PartyHost.module.css'
export function PartyHost({partyHost}){

    return(
        <>{partyHost &&
        <div className={styles.container}>
            <h2>Anfitrião</h2>
            <p><strong>Nome:</strong><label>{partyHost.name}</label> <strong>Telefone:</strong><label>{partyHost.phone}</label></p>
            <p><strong>Mensagem:</strong><label>{partyHost.message}</label></p>
        </div>}
        </>
    )

}
