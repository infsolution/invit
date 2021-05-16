import  withAuth from '../../utils/withAuth'
import styles from '../../styles/pages/Add.module.css'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { FormParty} from '../../components/form/FormParty'
function Add({}){
    return(
        <>
        <Navbar/>
        <div className={styles.container}>
            <h1>Criar uma nova festa</h1>
            <FormParty/>

        </div>
        <Footer />
        </>
    )
}
export default withAuth(Add)
