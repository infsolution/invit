import React from 'react'
import Link from 'next/link'
import variables from '../../utils/variables'
import { useRouter } from 'next/router'
import  styles  from '../form/styles/FormCreate.module.css'
import {Form, Button} from 'react-bootstrap';
export function FormUser(){
    const router = useRouter()
    const [isLoading, setLoading] = React.useState(false)
    async function handleCreate(event){
        setLoading(true)
        const body = {
            name: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            password: event.target.password.value
        }
        event.preventDefault()
       try {
            const result = await fetch(`${variables.urls.url}auth/register`,{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(body)
            })
            if(!result.ok) throw new Error(`Error: ${result.statusText}`)
            setLoading(false)
            router.push('/login')
       } catch (error) {
           console.log(error)
       }
    }

    return(
        <div className={styles.container}>
            <div>
        <h1 className={styles.title}>Crie sua conta</h1>
        <Form  onSubmit={handleCreate} >
        <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Nome" name="name" required/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Telefone" name="phone" required/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email" name="email" required/>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" name={"password"}  required/>
        </Form.Group> 
        <Form.Group controlId="formBasicCheckbox">
            <Form.Text >Já tem conta?</Form.Text>
            <Form.Text>
                <Link href="/login">
                    <a>
                        LOGIN
                    </a>
                </Link>
            </Form.Text>
        </Form.Group>   
            <Button variant="primary" type="submit" disabled={isLoading} block>
            {isLoading ? 'Carregando…' : 'Criar'}
            </Button>
        </Form>
        </div>
        </div>
    )
}
