import Link from 'next/link'
import styles from '../styles/components/Table.module.css'

export function Table({data}){
    return(
        <div className={styles.container}>

            <h2>Suas Festas</h2>
            <div className={styles.add}>
            <Link href={`festa/add`}>
                            <a>Criar uma festa</a>
            </Link>
            </div>

        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Local</th>
                    <th>Data</th>
                    <th>Hora</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody >
            {
            data.map(  party => {
                return(
                    <tr  key={party.id}>
                        <td>
                        <Link href={`festa/${party.id}`}>
                            <a>{party.local}</a>
                        </Link>
                        </td>
                        <td>{party.date}</td>
                        <td>{party.hour}</td>
                       <td>{<button className={styles.button}><img className={styles.image} src="/svg/editar.png" alt=""/>Editar</button>}</td>
                        <td>{<button className={styles.button}><img className={styles.image} src="/svg/claro.png" alt=""/>Excluir</button>}</td>
                    </tr>)

            })
            }
            </tbody>
        </table>
    </div>
    )
}
