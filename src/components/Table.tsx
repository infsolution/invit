import Link from 'next/link'
import { Button } from 'reactstrap'
import styles from '../styles/components/Table.module.css'

export function Table({data}){
    return(
        <div className={styles.container}>
            <h2>Suas Festas</h2>
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Local</th>
                    <th>Data</th>
                    <th>Hora</th>
                    <th>Detalhes</th>
                    <th>Editar</th>
                    <th>Excluir</th>
                </tr>
            </thead>
            <tbody >
            {
            data.map(  party => {
                return(
                    <tr  key={party.id}>
                        <td>{party.local}</td>
                        <td>{party.date}</td>
                        <td>{party.hour}</td>
                        <td>
                        {<Link href={`festa/${party.id}`}>
                            <a>Ver detalhes</a>
                        </Link>}
                        </td>
                        <td>{<Button>Editar</Button>}</td>
                        <td>{<Button>Excluir</Button>}</td>
                    </tr>)

            })
            }
            </tbody>
        </table>
    </div>
    )
}
