function DatosAdicionales({data, handleAddDatos ,handleDatos}){
    return(
        <>
        
        <div className="datos">
            <div style={{display: "flex", alignItems:"center", gap: "2vh"}}>
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 1H12V15H16V1Z" fill="#b9ec8e"></path> <path d="M6 5H10V15H6V5Z" fill="#b9ec8e"></path> <path d="M0 9H4V15H0V9Z" fill="#b9ec8e"></path> </g></svg>
            <h2 className="titulo"> Datos adicionales</h2>
                
            </div>
            {data.datosadicionales.map((dato,index) => (
                <div key={index}>
                    <input type="text" value={dato} onChange={(e) => handleDatos(e, index)} />
                </div>
            ))}
            <button className="añadirDato" onClick={handleAddDatos}>Añadir dato</button>
        </div>
        </>
    )
}

export default DatosAdicionales