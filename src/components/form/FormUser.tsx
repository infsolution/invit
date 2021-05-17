import Button from './Button'
import  Input  from './Input'
import Link from 'next/link'
import variables from '../../utils/variables'
import { useRouter } from 'next/router'
import  styles  from '../form/styles/FormCreate.module.css'
export function FormUser(){
    async function handleCreate(event){
        event.preventDefault()
        const result = await fetch(`${variables.urls.url}auth/register`)
    }
    return(
        <>
        <div className={`${styles.container} animeLeft`}>
        <h1 className={styles.title}>Crie sua conta grátis</h1>
        <form  onSubmit={handleCreate} className={styles.forms}>
            <Input label="Nome" type="text" name="name" style={styles}/>
            <Input label="Email" type="text" name="email" style={styles}/>
            <Input label="Telefone" type="text" name="phone" style={styles}/>
            <Input label="Senha" type="password" name="password" style={styles}/>
            <Button style={styles.button}>Criar</Button>
        </form>
        <div className={styles.signin}>
                <h2 className={styles.subtitle}>Já tem conta?</h2>
            <Link href="/login">
                <a className={styles.button}>Faça login</a>
            </Link>
        </div>

        </div>
        </>
    )
}
