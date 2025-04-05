function Experience({data, handleData}){
    return(
        <div className="experience">
            <div style={{display: "flex", alignItems:"center", gap: "2vh"}}>
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 3L9 2L11 0L16 5L14 7L13 6L11 8L12.2929 9.29289C12.7456 9.74565 13 10.3597 13 11C13 11.6403 12.7456 12.2544 12.2929 12.7071L11 14L2 5L3.29289 3.70711C3.74565 3.25435 4.35971 3 5 3C5.64029 3 6.25435 3.25435 6.70711 3.70711L8 5L10 3Z" fill="#b9ec8e"></path> <path d="M0 15L3.82149 9.6499L6.35008 12.1785L1 16L0 15Z" fill="#b9ec8e"></path> </g></svg>
                <h2 className="titulo">Experiencia laboral</h2>
            </div>
            <p>Empresa</p>
            <input type="text" name="empresa" value={data.empresa} onChange={handleData} />
            <p>Tiempo</p>
            <input type="text" name="tiempo" value={data.tiempo} onChange={handleData} />
        </div>
     )
}
export default Experience