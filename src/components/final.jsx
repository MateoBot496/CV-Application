
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
                    <p>{data.phone}</p>
                    <p>{data.email}</p>
                </div>

        </div>
        
        </>
    );
}

export default Final