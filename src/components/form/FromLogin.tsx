import React,{useEffect} from 'react'
import Button from './Button'
import stylesButton from '../form/styles/Button.module.css'
import  Input  from './Input'
import Link from 'next/link'
import variables from '../../utils/variables'
import Cookie from 'js-cookie'
import { addDays } from 'date-fns'
import { useRouter } from 'next/router'
import  styles  from '../form/styles/FormLogin.module.css'
export function FormLogin(){
    const router = useRouter()
    useEffect(()=>{
        const token = Cookie.get('token')
        if(token){
            router.push('/dashboard')
        }
    },[])
    const login = async event=>{
        event.preventDefault()
        const res = await fetch(`${variables.urls.url}auth/login`,{
            body: JSON.stringify({
                email: event.target.email.value,
                password:event.target.password.value
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
            })
            const result = await res.json()
            if(result.data.token){
                Cookie.set('token',result.data.token,{
                    expires:addDays(new Date(), 1)
                })
                router.push('/dashboard')
            }else{
                router.push('/login')
            }


    }
    return(
        <div className={`${styles.container} animeLeft`}>
            <h1 className={styles.title}>Entrar</h1>
            <form  onSubmit={login} className={styles.forms}>
            <Input label="Email" type="text" name="email" />
            <Input label="Senha" type="password" name="password" />
            <Button>Entrar</Button>
            <Link href="/signup">
                <a className={styles.perdeu}>Perdeu a senha?</a>
            </Link>
            </form>

            <div className={styles.signup}>
                <h2 className={styles.subtitle}>Cadastre-se</h2>
                <p>E descubra um mundo em festa!</p>
            <Link href="/signup">
                <a className={stylesButton.button}>Cadastrar!</a>
            </Link>
            </div>
        </div>
    )
}


