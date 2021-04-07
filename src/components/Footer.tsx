import styles from '../styles/components/Footer.module.css'

export function Footer(){
    const date = new Date()
    return (
        <div className={styles.containerFooter}>
            <section>
            <div>
                <strong>Crie um convite online</strong>
                <ul>
                    <li><a href="#">Informações </a></li>
                    <li><a href="#">Informações </a></li>
                    <li><a href="#">Informações </a></li>
                    <li><a href="#">Informações </a></li>
                </ul>
            </div>
            <div>
                <strong>Tarifas</strong>
                <ul>
                    <li><a href="#">Informações </a></li>
                    <li><a href="#">Informações </a></li>
                    <li><a href="#">Informações </a></li>
                    <li><a href="#">Informações </a></li>
                </ul>
            </div>
            <div>
                <strong>Sobre o ConFesta</strong>
                <ul>
                    <li><a href="#">Informações </a></li>
                    <li><a href="#">Informações </a></li>
                    <li><a href="#">Informações </a></li>
                    <li><a href="#">Informações </a></li>
                </ul>
            </div>
            <div>
                <strong>Parceiros</strong>
                <ul>
                    <li><a href="#">Informações </a></li>
                    <li><a href="#">Informações </a></li>
                    <li><a href="#">Informações </a></li>
                    <li><a href="#">Informações </a></li>
                </ul>
            </div>
            </section>
            <strong> &copy; {date.getFullYear()} ConFesta - Todos os dirteitos reservados </strong>
        </div>
    )
}
