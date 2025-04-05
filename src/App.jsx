import {useState} from 'react';
import Basicinfo from './components/basicinfo.jsx';
import Educationalinfo from './components/educationalinfo.jsx';
import Experience from './components/experience.jsx';
import Final from './components/final.jsx';
import DatosAdicionales from './components/datos.jsx';
import profilePic from './assets/profile.jpg';

function App(){
    const [color, setColor] = useState("#e9ffd5");

    const handleColor = (e) => {
        setColor(e.target.value);
    };

    const [data, setData] = useState({name: "First name", surname: "Second name", phone: "666 999 666", email: "example@example.com", 
        picture: null, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus reiciendis laboriosam eligendi aut error eum vel, quibusdam nam nisi quas fuga possimus blanditiis repellat! Impedit non ratione eaque vero vel",
        //educational
        escuela: ["Escuela"], curso: ["Curso"],
        //Experiencia
        empresa: "Empresa", empresadescripcion: "Arreglaba ordenadores, y hacia labores varias de atencion al cliente....", tiempo: "tiempo",
        //DATOS ADICIONALES
        datosadicionales: [],
    })
    const añadirEstudios = () => {
        const nuevaEscuela = [...data.escuela, "Escuela..."];
        const nuevoCurso = [...data.curso, "Titulo..."];
        
        comprobarEstudios();

        setData(prevData => ({
            ...prevData,
            escuela: nuevaEscuela,
            curso: nuevoCurso,
        }));
    };
    
    const comprobarEstudios = () => {
        const nuevaEscuela = [...data.escuela, "Escuela..."];
    
        if (nuevaEscuela.length >= 2 ) {
            let button = document.querySelector(".añadirestudios");
            button.classList.add("hidden");
        }
    }

    const handleEstudios = (e, index) =>{
        const {name , value } = e.target;
        if(name == "escuela"){
            let escuela2 = data.escuela;
            escuela2[index] = value;
            setData(prevData => ({
                ...prevData,
                escuela: escuela2
            }))
        }
        else{
            let curso2 = data.curso;
            curso2[index] = value;
            setData(prevData => ({
                ...prevData,
                curso: curso2
            }))
        }

        
        
    }

    const handleData = (e) => {
        const { name, value } = e.target;
        
        setData(prevData => ({
            ...prevData,  // Mantener los valores anteriores
            [name]: value // Actualizar solo el campo modificado
        }));
    }

    const handleDatos = (e, index) => {
        const value = e.target.value;
        let datos = data.datosadicionales;
        datos[index] = value;
        setData(prevData => ({
            ...prevData,  // Mantener los valores anteriores
            datosadicionales: datos // Actualizar solo el campo modificado
        }));
    }

    const handleAddDatos = () =>{
        setData(prevData => ({
            ...prevData,
            datosadicionales: [...prevData.datosadicionales, ''] //CREAMOS UN DATO NUEVO
        }));
    }

    const handleExample = () =>{
        setData(
                //educational
            {name: "Mateo", surname: "Montes", phone: "666 999 666", email: "example@example.com", picture: profilePic, description: '"Motivated and detail-oriented web developer with a strong foundation in front-end technologies and a passion for creating responsive, user-friendly applications. Eager to contribute to dynamic teams and continue growing as a developer through real-world challenges and collaboration."',
                //educational
                escuela: ["Universidad de Masachussets", "University of cambridge"], curso: ["Diplomatura en ciencias computacionales", "Another wonderful degree"],
                //Experiencia
                empresa: "Google", empresadescripcion: "As a Software Engineer at Google, you will work on solving complex, large-scale computing challenges. Youll collaborate with cross-functional teams to design, develop, test, deploy, maintain, and improve software solutions used by billions of users worldwide.", tiempo: "2021-06-12 - 2025-01-01",
                //DATOS ADICIONALES
                datosadicionales: ["PHP","REACT","JS","CSS","PYTHON"],
            }
        )

        comprobarEstudios();

    }

    const handleImg = (x) => {
        let file = x.target.files[0];
        if (file){
            const imageUrl = URL.createObjectURL(file);
            setData(prevData => ({
                ...prevData,  // Mantener los valores anteriores
                picture: imageUrl // Actualizar solo el campo modificado
            }));
        }
        
    }

    return (
        <>
        <div className='headerpag'>
            <div className='headerpagtitle'>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <p className='proyectTitle'>Resume.io</p>
                    <div >
                        <p style={{display: "flex", alignItems: "center"}}>created by 
                         <a href="https://github.com/MateoBot496"><svg style={{scale: "0.4", width: "100px"}} width="98" height="96" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#24292f"/></svg>
                         </a>
                        </p>    
                    </div>
                </div>
                
                <button className='exampletext' onClick={handleExample} style={{border: "2px solid black"}}> Example text </button>
                <input type="color" onChange={handleColor}/>
            </div>
        </div>

        
        <div className='resto'>
                                    <div className='form'>
                                        <Basicinfo data={data} handleData={handleData} handleImg={handleImg}/>
                                        <Educationalinfo data={data} handleEstudios={handleEstudios} añadirEstudios={añadirEstudios}/>
                                        <Experience data={data} handleData={handleData}/>
                                        <DatosAdicionales data={data} handleDatos={handleDatos} handleAddDatos={handleAddDatos}/>
                                    </div>
                                    <div className='resultado'>
                                        <Final data={data} color = {color}/>

                                    </div>
        </div>
       
        </>
    )
}

export default App