import styles from "./styles/Details.module.css";
import Link from 'next/link'
import varibles from '../../utils/variables'
import { Inviteds } from "../Inviteds";
export function Details({party}){
    let number_companions = 0
    party.inviteds.map(invited=>{
        number_companions += invited.number_companions
    })
    number_companions += party.inviteds.length

    return (<>{ party &&
        <div className={styles.container}>
            <p><strong>Local:</strong><label>{party.local}</label></p>
            <p><strong>Data:</strong><label>{party.date}</label><strong>Hora:</strong><label>{party.hour}</label></p>
            <p><strong>Traje:</strong><label>{party.costume}</label></p>
            <p><strong>Presentes:</strong><label>{party.present_store}</label></p>
            <p><strong>Covite:</strong> {<Link  href={`${varibles.urls.url}download/img/${party.invite_path_image}`}>
                            <a target="_blank">Imagem do convite</a>
                        </Link>}</p>
            <p><strong>Número de convidados:</strong><label>{number_companions}</label></p>

        </div>
}
    </>)
}
