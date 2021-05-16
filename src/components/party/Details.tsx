import styles from "./styles/Details.module.css";
import Link from 'next/link'
import varibles from '../../utils/variables'
export function Details({party}){
    return (<>{ party &&
        <div className={styles.container}>
            <p><strong>Local:</strong><label>{party.local}</label></p>
            <p><strong>Data:</strong><label>{party.date}</label><strong>Hora:</strong><label>{party.hour}</label></p>
            <p><strong>Traje:</strong><label>{party.costume}</label></p>
            <p><strong>Presentes:</strong><label>{party.present_store}</label></p>
            <p><strong>Covite:</strong> {<Link  href={`${varibles.urls.url}download/img/${party.invite_path_image}`}>
                            <a target="_blank">Imagem do convite</a>
                        </Link>}</p>

        </div>
}
    </>)
}
