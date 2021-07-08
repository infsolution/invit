import React, {useEffect} from 'react'
import {GetServerSideProps} from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import  styles  from '../styles/pages/Dashboard.module.css'
import {Invit} from '../components/Invit'
import { Footer } from '../components/Footer'
import { Table } from "../components/Table";

import Link from 'next/link'
import { Inviteds } from '../components/Inviteds'
import { InferGetStaticPropsType } from 'next'
import varibles from '../utils/variables'
import  withAuth from '../utils/withAuth'
import Cookie from 'js-cookie'
import Cookies from 'cookies'
import { NavbarLanding } from '../components/landingpage/NavbarLanding'
import { Contacts } from '../components/Contacts'
function Dashboard({parties}){
    const router = useRouter()
  return (
        <>
            <Head>
                <meta name="viewport"content="width=device-width, initial-scale=1.0" />
                <title>Suas Festas - ConFesta</title>
            </Head>
            <NavbarLanding />
            <div className={`container ${styles.container}`} >
            <Table data={parties}/>
            </div>
            <Contacts/>
    </>

  )
}

export default withAuth(Dashboard)


export  const getServerSideProps: GetServerSideProps = async ( {req} ) => {
    const cookies = new Cookies(req)
    const token = cookies.get('token')
    if(!token){
        return{
            redirect:{
                destination: '/login',
                permanent: false
            }
        }
    }
    const res = await fetch(`${varibles.urls.url}client/party`,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        method: 'GET'
    })

    const parties = await res.json()

    return{
        props:{
            parties:parties.parties
        }
    }
}



