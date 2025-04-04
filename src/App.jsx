import {useState} from 'react';
import Basicinfo from './components/basicinfo.jsx';
import Educationalinfo from './components/educationalinfo.jsx';
import Experience from './components/experience.jsx';
import Final from './components/final.jsx';
import DatosAdicionales from './components/datos.jsx';
import profilePic from './assets/profile.jpg';

function App(){
    const [color, setColor] = useState("white");

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
    
        if (nuevaEscuela.length >= 2 ) {
            let button = document.querySelector(".añadirestudios");
            button.classList.add("hidden");
        }
    
        setData(prevData => ({
            ...prevData,
            escuela: nuevaEscuela,
            curso: nuevoCurso,
        }));
    };
    

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
                <p>Resume.io</p>
                <button className='exampletext' onClick={handleExample}> Example text </button>
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