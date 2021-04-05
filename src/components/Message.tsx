import styles from '../styles/components/Message.module.css'
export function Message(){
    const  sendMessage = event =>{
        event.preventDefault()
        alert('Sou eu')
    }
    return(
        <div className={styles.containerMessage}>
            <h2>Deixe uma messagem</h2>
            <form onSubmit={sendMessage}>
                <label>Mensagem</label>
                <textarea id="name"  rows={5} cols={33} required />
                <button type="submit" >Enviar</button>
            </form>
        </div>
    )
}
