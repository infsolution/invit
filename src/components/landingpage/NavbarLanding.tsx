import React from 'react'
import {
    Navbar,
    Nav,
    NavDropdown,

 } from 'react-bootstrap';
 import styles from './styles/NavbarLanding.module.css'
 import Cookie from 'js-cookie'
 import { useRouter } from 'next/router'
 import { GET_PROFILE } from '../../API';

export function NavbarLanding(){
    const router = useRouter()
    const [user, setUser] = React.useState(null)
    const token = Cookie.get('token')
    function logout(){
        Cookie.remove('token')
        router.push('/login')
    }
    async function getUser(){
      try {
        const {url, options} = GET_PROFILE(token)
        const response = await fetch(url, options)
        if(!response.ok) throw new Error(response.statusText)
        const {profile} = await response.json()
        setUser(profile)
      } catch (error) {
        console.log(error)
      }
    }

    React.useEffect(()=>{
      getUser()
    },[])
    return (
        <div className={styles.container}>
      <Navbar collapseOnSelect expand="lg" bg="danger" variant="light" fixed="top" >
        <Navbar.Brand href="/"><img src="/assets/logos/Confesta-logo.png" alt="" className={styles.img}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/"  style={{ fontSize: '2rem' ,color:'#FFFFFF'}}>ConFesta</Nav.Link>
            <Nav.Link href="#pricing"  style={{ fontSize: '1.5rem' ,color:'#FFFFFF', marginTop:'0.5rem'}}>Preços</Nav.Link>
            <Nav.Link href="#pricing"  style={{ fontSize: '1.5rem' ,color:'#FFFFFF', marginTop:'0.5rem'}}>Modelos</Nav.Link>
          </Nav>
          <Nav>
            {!user && <Nav.Link href="/login" style={{ fontSize: '1.5rem' ,color:'#FFFFFF', marginTop:'0.5rem'}}>Entrar</Nav.Link>}
            {
                user &&
                <NavDropdown  title={user.name} id="navbarScrollingDropdown" style={{ fontSize: '1.5rem', marginTop:'0.5rem', marginRight:'3rem'}}>
                    <NavDropdown.Item href="/dashboard">Minhas Festas</NavDropdown.Item>
                    <NavDropdown.Item onClick={logout}>Sair</NavDropdown.Item>
                    <NavDropdown.Divider />
                </NavDropdown>
            }
            <Nav.Link href="#pricing"></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    )
}
