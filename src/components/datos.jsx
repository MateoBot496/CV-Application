function DatosAdicionales({data, handleAddDatos ,handleDatos}){
    return(
        <>
        
        <div className="datos">
        <h2 className="titulo">Datos Adicionales</h2>
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