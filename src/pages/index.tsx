import React from 'react'
import Head from 'next/head'
import  styles  from '../styles/pages/Landingpage.module.css'
import { Modal, Button } from 'react-bootstrap';
import { Contacts } from '../components/Contacts';
import { Header } from '../components/landingpage/Header';
import { Checkin } from '../components/landingpage/Checkin';
import { TypeEvents } from '../components/landingpage/TypeEvents';
import { NavbarLanding } from '../components/landingpage/NavbarLanding';
import { Prices } from '../components/landingpage/Prices';
function Home (){

  return (
    <div>
         <Head>
            <title>ConFesta</title>
            <script src="https://kit.fontawesome.com/a9d3a920cf.js"></script>
        </Head>
      <NavbarLanding/>
      <Header/>
      <Checkin/>
      <Prices/>
      <TypeEvents/>
      <Contacts/>
      <footer className={styles.footer}>
        <h5>ConFesta &copy; Todos os direitos reservados</h5>
      </footer>
    </div>
  )
}

export default Home

