import  withAuth from '../../utils/withAuth'
import styles from '../../styles/pages/Add.module.css'
import { FormParty} from '../../components/form/FormParty'
import { NavbarLanding } from '../../components/landingpage/NavbarLanding'
import { Contacts } from '../../components/Contacts'
import { Footer } from '../../components/Footer'
function Add({}){
    return(
        <>
        <NavbarLanding/>
        <div className={styles.container}>
            <FormParty/>
        </div>
       <Contacts/>
       <Footer/>
        </>
    )
}
export default withAuth(Add)
