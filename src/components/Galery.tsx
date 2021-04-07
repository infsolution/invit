import styles from '../styles/components/Galery.module.css'
export function Galery(){
    const fotos = [
        {key:1,alt:'ok',src:'https://images.unsplash.com/photo-1603573355706-3f15d98cf100?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZGF0YWJhc2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {key:2,alt:'ok',src:'https://images.unsplash.com/photo-1603573355706-3f15d98cf100?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZGF0YWJhc2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {key:3,alt:'ok',src:'https://images.unsplash.com/photo-1603573355706-3f15d98cf100?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZGF0YWJhc2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {key:4,alt:'ok',src:'https://images.unsplash.com/photo-1603573355706-3f15d98cf100?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZGF0YWJhc2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {key:5,alt:'ok',src:'https://images.unsplash.com/photo-1603573355706-3f15d98cf100?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZGF0YWJhc2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {key:6,alt:'ok',src:'https://images.unsplash.com/photo-1603573355706-3f15d98cf100?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZGF0YWJhc2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {key:7,alt:'ok',src:'https://images.unsplash.com/photo-1603573355706-3f15d98cf100?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZGF0YWJhc2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
        {key:8,alt:'ok',src:'https://images.unsplash.com/photo-1603573355706-3f15d98cf100?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZGF0YWJhc2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
    ]
    return(
        <div className={styles.containerGaley}>
            <h2>Minhas fotos</h2>
            {fotos.map((foto)=>{
                return <img key={foto.key} src={foto.src} alt={foto.alt}/>
            })}
        </div>
    )
}
