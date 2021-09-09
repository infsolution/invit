import React from 'react'

import Link from 'next/link'
import variables from '../../utils/variables'
import Cookie from 'js-cookie'
import { addDays } from 'date-fns'
import { useRouter } from 'next/router'
import  styles  from '../form/styles/FormLogin.module.css'
import {Form, Button} from 'react-bootstrap';
export function FormLogin(){
  const [isLoading, setLoading] = React.useState(false)
    const router = useRouter()
    React.useEffect(()=>{
        const token = Cookie.get('token')
        if(token){
            router.push('/dashboard')
        }
        setLoading(false)
    },[])
    const login = async event=>{
        event.preventDefault()
        setLoading(true)
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
        <div className={styles.container}>
            <div>
            <h1 className={styles.title}>Entrar</h1>
            <Form onSubmit={login}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" name="email" required/>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" name={"password"}  required/>
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Text >Ainda não tem conta?</Form.Text>
                <Form.Text>
                <Link href="/signup">
                    <a>
                  CADASTRE-SE
                  </a>
                  </Link>
                </Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit" disabled={isLoading} block> 
              {isLoading ? 'Carregando…' : 'Entrar'}
              </Button>
            </Form>
            </div>
        </div>
    )
}


