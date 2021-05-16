import  styles  from "./styles/Table.module.css";
export function Table({inviteds}){
 return (
     <div  className={styles.container}>
          <h2>Seus Convidados</h2>
     <table className={styles.table}>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>Confirmação</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody >
                {inviteds  && inviteds.map(invited=>{
                     return(
                        <tr  key={invited.id}>
                        <td>{invited.name}</td>
                        <td>{invited.phone}</td>
                        <td>{invited.confirmation}</td>
                        <td  >
                        <button className={styles.button}><img className={styles.image} src="/images/icone_whatsapp.jpg" alt="Enviar pelo Whatsapp"/> Enviar</button>
                        </td>
                        <td>{<button className={styles.button}><img className={styles.image} src="/svg/editar.png" alt=""/> Editar</button>}</td>
                        <td>{<button className={styles.button}><img className={styles.image} src="/svg/claro.png" alt=""/> Excluir</button>}</td>
                    </tr>
                     )
                })}
    </tbody>
    </table>
    </div>
 )
}
