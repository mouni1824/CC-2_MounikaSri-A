import React from 'react'
import { useState } from 'react';
export default function Add() {

  const[id,setId] = useState('');
  const[name,setName] = useState('');
  const[age,setAge] = useState('');
  const[gender,setGender] = useState('');
  const[contact,setContact] = useState('');
  const[bloodGroup,setbloodGroup] = useState('');
  const[medication,setMedication] = useState('');


  handleIdChange = (event) =>{
    setState({id : event.target.value});
  }
  handleNameChange = (event) =>{
    setState({name : event.target.value});
  }
  handleAgeChange = (event) =>{
    setState({age : event.target.value});
  }
  handleGenderChange = (event) =>{
    setState({gender : event.target.value});
  }
  handleContactChange = (event) =>{
    setState({contact : event.target.value});
  }
  handleBGChange = (event) =>{
     setState({bloodGroup : event.target.value});
    }

  handleMedicationChange = (event) =>{
    setState({medication : event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // console.log({ sNo, name, episodes, gender });
        const data = {
          id : id ,
          name : name , 
          age : age,
          gender  : gender ,
          bloodGroup  : bloodGroup,
          contact  : contact,
          medication  : medication
        }
        console.log(data);
        axios.post('http://127.0.0.1:8080/store', data)
        window.location.reload();
      };
  



  return (
    <div>
      <div className='display-container' >
      <h2><center>ADD DETAILS</center></h2>
       <form onSubmit={this.handleSubmit}>
          <input
            className='in'
            type="number"
            placeholder="Id"
            value={id}
            onChange={handleIdChange}
          /><br></br><br></br>
          <input 
          className='in'
            type="text"
            placeholder="name"
            value={name}
            onChange={handleNameChange}
          /><br></br><br></br>
          <input
          className='in'
            type="number"
            placeholder="Age"
            value={state.age}
            onChange={handleAgeChange}
          /><br></br><br></br>
          <input
          className='in'
            type="text"
            placeholder="Gender"
            value={gender}
            onChange={handleGenderChange}
          /><br></br><br></br>
          <input
          className='in'
            type="text"
            placeholder="Blood Group"
            value={bloodGroup}
            onChange={handleBGChange}
          /><br></br><br></br>
          <input
          className='in'
            type="text"
            placeholder="Contact"
            value={contact}
            onChange={handleContactChange}
          /><br></br><br></br>

          <input
          className='in'
            type="text"
            placeholder="Medication"
            value={medication}
            onChange={handleMedicationChange}
          /><br></br><br></br>
          <center><button className='submit-button' type="submit">Add Value</button></center>
        </form>
      </div>
      </div>
  )
}
