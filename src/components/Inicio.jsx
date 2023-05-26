import Navbar from "./Navbar.jsx";
import "../App.css";
import React, { useEffect, useState } from "react";
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { Form, Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { db } from "../firebase.js";

function Inicio() {
  const [users, setUsers] = useState([]);
  const useCollectionRef = collection(db, "reservaciones");
  const [name, setName] = useState("");
  const [correo, setCorreo] = useState("");
  const [noPersonas, setNoPersonas] = useState(0);
  const [fecha, setFecha] = useState("");
  const [userToUpdate, setUserToUpdate] = useState(null);

  const createUser = async () => {
    if (userToUpdate) {
      await updateDoc(doc(db, "reservaciones", userToUpdate.id), {
        nombre: name,
        correo: correo,
        noPersonas: noPersonas,
        fecha: fecha,
      });
      setUserToUpdate(null);
    } else {
      await addDoc(useCollectionRef, {
        nombre: name,
        correo: correo,
        noPersonas: noPersonas,
        fecha: fecha,
      });
    }
    getUsers();
    setName("");
    setCorreo("");
    setNoPersonas(0);
    setFecha("");
  };

  const deleteUser = async (id) => {
    await deleteDoc(doc(db, "reservaciones", id));
    getUsers();
  };

  const updateUser = (user) => {
    setUserToUpdate(user);
    setName(user.nombre);
    setCorreo(user.correo);
    setNoPersonas(user.noPersonas);
    setFecha(user.fecha);
  };

  const getUsers = async () => {
    const data = await getDocs(useCollectionRef);
    console.log(data);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <h1>Reservaciones</h1>
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            type="email"
            placeholder="Correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicNoPersonas">
          <Form.Label>No de Personas</Form.Label>
          <Form.Control
            type="number"
            placeholder="No de Personas"
            value={noPersonas}
            onChange={(e) => setNoPersonas(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicDate">
          <Form.Label>Fecha</Form.Label>
          <Form.Control
            type="date"
            placeholder="Fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
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
            <th>No de Personas</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item.id}>
              <td>{item.nombre}</td>
              <td>{item.correo}</td>
              <td>{item.noPersonas}</td>
              <td>{item.fecha}</td>
              <td>
                <Button variant="danger" onClick={() => deleteUser(item.id)}>
                  Eliminar
                </Button>
                <Button variant="primary" onClick={() => updateUser(item)}>
                  Actualizar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Inicio;


