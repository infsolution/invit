import React from 'react'
import styles from "../styles/components/Navbar.module.css";
import {Grid, Row,Col} from 'react-styled-flexboxgrid'
import Link from 'next/link'
import { Button } from "reactstrap";
import Cookie from 'js-cookie'
import { useRouter } from 'next/router'
export function Navbar(){
    const [open, setOpen] = React.useState(false)

    const router = useRouter()
    const token = Cookie.get('token')

    function logout(){
        Cookie.remove('token')
        router.push('/login')
    }
    return(
        <header className={styles.header}>
           <ul>
               <div  className={styles.logo}>
                <Link href="/" >
                    <a>ConFesta</a>
                </Link>
               </div>
               { open && <div>

               { token && <li>
                <Link href="/dashboard" >
                    <a>Festas</a>
                </Link>
               </li>}
               <li>
                <Link href="/" >
                    <a>ConFesta</a>
                </Link>
               </li>
               <li>
                <Link href="/" >
                    <a>ConFesta</a>
                </Link>
               </li>
               { token && <li>
                <Link href="/" >
                    <a onClick={()=>logout()}>Sair</a>
                </Link>
               </li>
                }{ !token && <li>
                    <Link href="/login" >
                        <a>Entrar</a>
                    </Link>
                   </li>
                    }</div>
               }
           </ul>
           <button onClick={()=>setOpen(!open)} ><img src="/menu.png" alt=""/></button>
        </header>
    )
}
