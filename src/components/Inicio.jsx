import Navbar from "./Navbar.jsx"
import "../App.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { Form, Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import {db} from "../firebase.js"

function Inicio(){
    
     const [users,setuser]= useState([])
     const useCollectionRef= collection(db,'reservaciones')
      const [name, setName]= useState("")
     const [correo, setCorreo]= useState("")
      const [mesa, setMesa]= useState(0)
   
     const createUser = async() => {
       await addDoc(useCollectionRef, { nombre: name, correo: correo, mesa: mesa });
       getUsers() 
      }
      
      const deleteUser = async (id) => {
        await deleteDoc(doc(db, "reservaciones", id));
        getUsers();
      };
      
      const updateUser = async (id, newData) => {
        await updateDoc(doc(db, "reservaciones", id), newData);
        getUsers();
      };

     const getUsers = async() =>{
       const data = await getDocs(useCollectionRef)
       console.log(data)
      setuser(data.docs.map((doc) =>({...doc.data(), id: doc.id})))
     }

   

     useEffect(()=>{
     getUsers();
     },[]); 

    return(
        
        <div className="App">
        <Navbar />
        <h1>Reservaciones</h1>
                <Form>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" onChange={(e) => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control type="email" placeholder="Correo" onChange={(e) => setCorreo(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicTable">
                        <Form.Label>Mesa</Form.Label>
                        <Form.Control type="number" placeholder="Mesa" onChange={(e) => setMesa(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" onClick={createUser}>
                        Enviar
                    </Button>
                </Form>
                <br></br>

                <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>Nombre</th>
                                <th>Correo</th>
                                <th>Mesa</th>
                                <th>Acciones</th>
                                </tr>
                            </thead>
                <tbody>
                {users.map((item) => (
                    
                            <tr key= {item.id}>
                                <td>{item.nombre}</td>
                                <td>{item.correo}</td>
                                <td>{item.mesa}</td>
                                <td>
                                    <Button variant="danger" onClick={() => deleteUser(item.id)}>
                                        Eliminar
                                    </Button>
                                    <Button
                                        variant="primary"
                                        onClick={() => updateUser(item.id, { nombre: "Nuevo nombre" })}
                                    >
                                        Actualizar
                                    </Button>
                                </td>
                             </tr> 
                    
                        ))}
                 </tbody>
                 </Table>

        </div>  
    )     
}

export default Inicio;