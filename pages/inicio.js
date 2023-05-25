import SideBar from "./SideBar";


const inicio = () =>{
    return(
        <div >
            <SideBar/>
            <h1 className="Bienvenidos">Bienvenidos</h1>
            <h2 className="Subtitulo">Bienvenido</h2>
            <p className="texto-comun">Como miembro del Instituto Tecnológico de Chihuahua II, ahora tienes acceso a 
            nuestra plataforma oficial donde podrás estar enterado al momento de las 
            últimas noticias, eventos y avisos concernientes al instituto, así como también 
            podrás estar pendiente de nuestra
            calendarización, estar al tanto de sus materias, tareas, mantener
            contacto con tu profesor y compañeros, así como acceso a nuestro
            foro oficial.</p>
            <p className="texto-comun">Para iniciar, selecciona alguno de los módulos disponibles en 
            la barra izquierda de la pantalla.</p>
        </div>
    )
}
export default inicio;    