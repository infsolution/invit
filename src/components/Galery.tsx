import styles from '../styles/components/Galery.module.css'
export function Galery(){
    const fotos = [
        {alt:'ok',src:'https://images.unsplash.com/photo-1603573355706-3f15d98cf100?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZGF0YWJhc2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {alt:'ok',src:'https://images.unsplash.com/photo-1603573355706-3f15d98cf100?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZGF0YWJhc2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {alt:'ok',src:'https://images.unsplash.com/photo-1603573355706-3f15d98cf100?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZGF0YWJhc2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {alt:'ok',src:'https://images.unsplash.com/photo-1603573355706-3f15d98cf100?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZGF0YWJhc2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {alt:'ok',src:'https://images.unsplash.com/photo-1603573355706-3f15d98cf100?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZGF0YWJhc2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {alt:'ok',src:'https://images.unsplash.com/photo-1603573355706-3f15d98cf100?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZGF0YWJhc2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {alt:'ok',src:'https://images.unsplash.com/photo-1603573355706-3f15d98cf100?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZGF0YWJhc2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {alt:'ok',src:'https://images.unsplash.com/photo-1603573355706-3f15d98cf100?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZGF0YWJhc2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
    ]
    return(
        <div className={styles.containerGaley}>
            <h2>Minhas fotos</h2>
            {fotos.map((foto)=>{
                return <img src={foto.src} alt={foto.alt}/>
            })}
        </div>
    )
}
