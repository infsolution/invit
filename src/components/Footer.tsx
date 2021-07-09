import  styles  from '../styles/pages/Landingpage.module.css'
export function Footer(){
    const date = new Date()
    return (
        <>
        <footer className={styles.footer}>
            <h5>ConFesta &copy; {date.getUTCFullYear()} Todos os direitos reservados</h5>
        </footer>
            </>

    )
}
