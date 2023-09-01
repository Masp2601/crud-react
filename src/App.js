import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';


function App() {

  const baseUrl="https://surveys-backend.onrender.com/api";

  const [data, setData]= useState([]);

const peticionGet=async()=>{
  await axios.get("baseUrl")
  .then(response=>{
  setData(response.data);
  }).catch(error=>{
  console.log(error);
  })
}

useEffect(()=>{
  peticionGet();
},[])

  return (
    <div className="App">
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th>NOMBRE</th>
          <th>TELEFONO</th>
          <th>CEDULA</th>
          <th>MUNICIPIO</th>
          <th>BARRIO</th>
          <th>DIRECCION</th>
          <th>MUNICIPIO</th>
          <th>P. VOTACION</th>
          <th>MESA</th>
          <th>ACCIONES</th>
        </tr>
      </thead>
      <tbody>
      {data.map(user=>(
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.phoneNumber}</td>
          <td>{user.identityCard}</td>
          <td>{user.municipality}</td>
          <td>{user.neighborhood}</td>
          <td>{user.address}</td>
          <td>{user.votingMunicipality}</td>
          <td>{user.pollingStation}</td>
          <td>{user.votingTable}</td>
          <td>
            <button className='btn btn-primary'>Editar</button> {" "}
            <button className='btn btn-danger'>Eliminar</button>
          </td>
        </tr>
      ))}

      </tbody>
    </table>

    <Modal>
      <ModalHeader>Insertar Datos</ModalHeader>
      <ModalBody>
        <div className='form-group'>
        <label>Nombre: </label>
        <br />
        <input type='text' className='form-control'/>
        <br />
        <label>Telefono: </label>
        <br />
        <input type='text' className='form-control'/>
        <br />
        <label>Cedula: </label>
        <br />
        <input type='text' className='form-control'/>
        <br />
        <label>Municipio: </label>
        <br />
        <input type='text' className='form-control'/>
        <br />
        <label>Barrio: </label>
        <br />
        <input type='text' className='form-control'/>
        <br />
        <label>Direccion: </label>
        <br />
        <input type='text' className='form-control'/>
        <br />
        <label>Municipio: </label>
        <br />
        <input type='text' className='form-control'/>
        <br />
        <label>P. votacion: </label>
        <br />
        <input type='text' className='form-control'/>
        <br />
        <label>Mesa: </label>
        <br />
        <input type='text' className='form-control'/>
        <br />
        </div>
      </ModalBody>
      <ModalFooter>
        <button className='btn btn-primary'>Insertar</button>{' '}
        <button className='btn btn-primary'>Cancelar</button>
      </ModalFooter>
    </Modal>
    
    </div>
  );
}

export default App;
