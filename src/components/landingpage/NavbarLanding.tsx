import {
    Navbar,
    Nav,
    NavDropdown,

 } from 'react-bootstrap';
 import styles from './styles/NavbarLanding.module.css'
 import Cookie from 'js-cookie'
 import { useRouter } from 'next/router'
export function NavbarLanding(){
    const router = useRouter()
    const token = Cookie.get('token')
    function logout(){
        Cookie.remove('token')
        router.push('/login')
    }
    return (
        <div>
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
            {!token && <Nav.Link href="/login" style={{ fontSize: '1.5rem' ,color:'#FFFFFF', marginTop:'0.5rem'}}>Entrar</Nav.Link>}
            {
                token &&
                <NavDropdown  title="Usuário" id="navbarScrollingDropdown" style={{ fontSize: '1.5rem', marginTop:'0.5rem', marginRight:'3rem'}}>
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
