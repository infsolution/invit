import React from 'react'
import Button from './Button'
import  Input  from './Input'
import Link from 'next/link'
import variables from '../../utils/variables'
import Cookie from 'js-cookie'
import { addDays } from 'date-fns'
import { useRouter } from 'next/router'
export function FormLogin(){
    const router = useRouter()
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
        <section>
            <h1>Login</h1>
            <form action="" onSubmit={login}>
            <Input label="Email" type="text" name="email" />
            <Input label="Senha" type="password" name="password" />
            <Button>Entrar</Button>
            </form>
            <Link href="/signup">
                <a>Ou crie uma conta grátis</a>
            </Link>
        </section>
    )
}


