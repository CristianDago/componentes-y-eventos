import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';



const Input = (props) => {

    const [nombre, SetNombre] = useState("");
    const modificarNombre = (e) => SetNombre(e.target.value);

    return (
        <>
            <Container>
                <Row>
                    <Col>      
                        <form className="p-5">          
                            <h4>Desafío Estado de los componentes y eventos</h4>
                            <h6 className="text-center">Usuario: {nombre}</h6>
                            <label className="mt-4 mb-2">Nombre : </label>
                            <input className="p-2" onChange={modificarNombre} placeholder='Ingresa un texto'></input>
                            <label className="mt-4 mb-2">Contraseña :</label>
                            <input className="p-2" onChange={(e) => props.SetContrasena(e.target.value)} placeholder='Ingresa una contraseña'/>      
                        </form>
                    </Col>
                </Row>   
             </Container>
        </> 
    )
}

export default Input; 