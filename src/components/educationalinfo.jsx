function Educationalinfo({data, handleEstudios, añadirEstudios}){
    return(
        
        <div className="educationalinfo">
            <h2 className="titulo">Estudios</h2>
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