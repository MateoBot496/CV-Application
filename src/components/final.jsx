
function Final({data , color}){
    return(
        <>
        <div className="final" style={{backgroundColor: color}}>

                <div className="header">
                    <div className="nombre">
                            <h2>{data.name} {data.surname}</h2>   
                        </div>

                    <div className="foto">
                        <img src={data.picture} alt="" />
                    </div>
                    
                </div>
                
                
                <div className="datosGenerales">
                    <p>{data.description}</p>
                </div>

                <hr />

                <div className="experiencia">
                    <h2>Experiencia laboral</h2>
                    <p style={{fontWeight: "bold"}}>{data.empresa} | Fecha: {data.tiempo}</p>
                    <p>{data.empresadescripcion}</p>
                </div>

                <div className="datosAcademicos" >
                    <h2> Datos academicos </h2>
                    <div style={{display: "flex"}}>
                        {   
                            

                            data.escuela.map((_, index) => {
                                return(
                                    <div key={index} style={{width: "100%"}}>
                                        <p className="curso">{data.escuela[index]}</p>
                                        <p>{data.curso[index]}</p>
                                    </div>
                                )
                                
                            })
                        }
                    </div>   
                </div>
                
                <div className="datosAdicionales">
                    <h2>Datos y habilidades</h2>
                    {data.datosadicionales ? (
                        data.datosadicionales.map((dato, index) => 
                            <p key={index}>{dato}</p>
                    )) : ("")
                    }
                </div>

                <hr />

                <div>
                    <h2>Contacto</h2>
                    <p style={{display: "flex", alignItems: "center"}}>  <svg style={{scale: "0.65"}} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1 5V1H7V5L4.5 7.5L8.5 11.5L11 9H15V15H11C5.47715 15 1 10.5228 1 5Z" fill="#000000"></path> </g></svg> {data.phone}</p>
                    <p style={{display: "flex", alignItems: "center"}}><svg style={{scale: "0.65"}} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 5.3585V14H16V5.35849L8 10.3585L0 5.3585Z" fill="#000000"></path> <path d="M16 3V2H0V3L8 8L16 3Z" fill="#000"></path> </g></svg> {data.email}</p>
                </div>

        </div>
        
        </>
    );
}

export default Final