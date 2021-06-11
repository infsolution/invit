import {GetServerSideProps} from 'next'
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import styles from '../../styles/pages/Party.module.css'
import Head from 'next/head'
import {Details} from '../../components/party/Details'
import { Table } from "../../components/party/Table"
import  withAuth from '../../utils/withAuth'
import varibles from '../../utils/variables'
import { PartyHost } from '../../components/party/PartyHost';
import Cookies from 'cookies'
function PartyId({party, inviteds, partyhost}){
return(
    <> <Head>
            <meta name="viewport"content="width=device-width, initial-scale=1.0" />
            <title>Suas Festas - ConFesta</title>
        </Head>
        <Navbar/>
        <div className={`${styles.container} container`}>
            <h1 className={styles.title}>Festa</h1>
            <Details party={party}/>
            <PartyHost partyHost={partyhost}/>
            <Table inviteds={inviteds} party={party}/>
        </div>
        <Footer/>
    </>
)
}

export default withAuth(PartyId)

export const getServerSideProps: GetServerSideProps = async ({ req, params })=>{
    const cookies = new Cookies(req)
    const token = cookies.get('token')
    const id = params.id

    const res = await fetch(`${varibles.urls.url}client/party/${id}`,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        method: 'GET'
    }
    )
    const {party} = await res.json()
    if (party===null) {
        return {
          notFound: true,
        }
      }
    return {
        props:{
            party: party,
            inviteds:party.inviteds,
            partyhost:party.partyHost
        }
    }
}
