import { ElementType, useEffect } from "react";
import { useRouter } from 'next/router'
import Cookie from 'js-cookie'

export default function withAuth(WrappedComponent: ElementType){
    const Wrapper = (props: unknown) =>{
        const router = useRouter()
        useEffect(()=>{
            const token = Cookie.get('token')
            if(!token){
                router.push('/login')
            }
        }, [])
        
        return <WrappedComponent {...props}/>
    }
    return Wrapper
}