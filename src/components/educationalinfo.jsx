function Educationalinfo({data, handleEstudios, añadirEstudios}){
    return(
        
        <div className="educationalinfo">
            <div style={{display: "flex", alignItems:"center", gap: "2vh"}}>
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 1H8V15H5V1Z" fill="#b9ec8e"></path> <path d="M0 3H3V15H0V3Z" fill="#b9ec8e"></path> <path d="M12.167 3L9.34302 3.7041L12.1594 15L14.9834 14.2959L12.167 3Z" fill="#b9ec8e"></path> </g></svg>                
                <h2 className="titulo"> Educación</h2>
                
            </div>
            {
                data.escuela.map((_, index) => (

                    <div key={index}>
                        <p>Escuela o universidad</p>
                        <input type="text" name="escuela" value={data.escuela[index]} placeholder="Univerdad..." onChange={(e) => handleEstudios(e, index)}/>
                        <p>Curso</p>
                        <input type="text" name="curso" value={data.curso[index]} placeholder="Ingenieria..." onChange={(e) => handleEstudios(e, index)}/>
                    </div>



                ))
            
            
            }
            <button onClick={añadirEstudios} className="añadirestudios">+</button>
        </div>
    )
}
export default Educationalinfo