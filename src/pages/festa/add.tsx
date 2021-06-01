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

            <FormParty/>

        </div>
        <Footer />
        </>
    )
}
export default withAuth(Add)
