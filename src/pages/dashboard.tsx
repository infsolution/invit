import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import  styles  from '../styles/pages/Dashboard.module.css'
import {Invit} from '../components/Invit'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import Link from 'next/link'
import { Inviteds } from '../components/Inviteds'
import { InferGetStaticPropsType } from 'next'
import varibles from '../utils/variables'
import  withAuth from '../utils/withAuth' 
import Cookie from 'js-cookie'
function Dashboard({parties}:InferGetStaticPropsType<typeof getServerSideProps>){
    const router = useRouter()
    
    //const { partyhost } = router.query
  return (
    <div className={styles.container} >
        <Head>
            <meta name="viewport"content="width=device-width, initial-scale=1.0" />
            <title>Convites da</title>
        </Head>
        <Navbar />
        {/*<Inviteds party={parties.party_id}/>*/}
        {
        parties.map( party => {
            return <p>{party.local}</p>
        })
        }
        <Footer />
    </div>
  )
}

export default withAuth(Dashboard)


export async function getServerSideProps(){
    const token = Cookie.get('token')
    const res = await fetch(`${varibles.urls.url}client/party`,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        method: 'GET'
    })
    const parties = await res.json()
    if (parties.length == 0) {
        return {
          notFound: true,
        }
      }
    return{
        props:{
            parties:parties.parties
        }
    }
}



