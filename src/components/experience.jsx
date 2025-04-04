function Experience({data, handleData}){
    return(
        <div className="experience">
            <h2 className="titulo">Experiencia laboral</h2>
            <p>Empresa</p>
            <input type="text" name="empresa" value={data.empresa} onChange={handleData} />
            <p>Tiempo</p>
            <input type="text" name="tiempo" value={data.tiempo} onChange={handleData} />
        </div>
     )
}
export default Experience