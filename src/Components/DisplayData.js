import React, { useState, useEffect } from 'react';
import axios from 'axios';


function DisplayData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8080/get')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://127.0.0.1:8080/del/${id}`)
      .then(response => {
        setData(data.filter(data => data.id !== id));
        console.log(response + "deleted");
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Donor Details</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Blood Group</th>
            <th>Contact</th>
            <th>Medication</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
              <td>{item.bloodGroup}</td>
              <td>{item.contact}</td>
              <td>{item.medication}</td>
              
              <td><button onClick={() => handleDelete(item.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayData;