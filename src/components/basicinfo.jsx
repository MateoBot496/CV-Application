
function Basicinfo({data,handleData, handleImg}){
    return (
        <div className="basicinfo">
            <h2 className="titulo">Informacion personal</h2>

            <div style={{display: "flex", gap: "1vh"}}>
                <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
                    <p>Name</p>
                    <input type="text" name="name" value={data.name} onChange={handleData} maxLength={20}/>
                    
                </div>
                <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
                    <p>Surname</p>
                    <input type="text" name="surname" value={data.surname} onChange={handleData} maxLength={20}/>
                    
                </div>
                
            </div>
            
            <p>Phone</p>
            <input type="text" name="phone" value={data.phone} onChange={handleData} />
            <p>Email</p>
            <input type="text" name="email" value={data.email} onChange={handleData} />
            <p>Descripcion</p>
            <textarea name="description" value={data.description} onChange={handleData} />

            <p>Profile picture</p>
            <input type="file" name="picture" onChange={handleImg} />
        </div>
    )
}

export default Basicinfo