import React, { Component } from 'react'
import axios from 'axios'
import "./Post.css"
import { Link } from 'react-router-dom';
export class Post extends Component {

    constructor(props){
        super(props);
        this.state = {
          id: '',
          name: '',
          age : '',
          gender : '',
          bloodGroup : '',
          contact : '',
          medication : ''
        }
      }
      handleIdChange = (event) =>{
        this.setState({id : event.target.value});
      }
      handleNameChange = (event) =>{
        this.setState({name : event.target.value});
      }
      handleAgeChange = (event) =>{
        this.setState({age : event.target.value});
      }
      handleGenderChange = (event) =>{
        this.setState({gender : event.target.value});
      }
      handleContactChange = (event) =>{
        this.setState({contact : event.target.value});
      }
      handleBGChange = (event) =>{
          this.setState({bloodGroup : event.target.value});
        }
  
      handleMedicationChange = (event) =>{
          this.setState({medication : event.target.value});
        }

        handleSubmit = (event) => {
            event.preventDefault();
            // console.log({ sNo, name, episodes, gender });
            const data = {
              id : this.state.id ,
              name : this.state.name , 
              age : this.state.age,
              gender  : this.state.gender ,
              bloodGroup  : this.state.bloodGroup,
              contact  : this.state.contact,
              medication  : this.state.medication
            }
            console.log(data);
            axios.post('http://127.0.0.1:8080/store', data)
            window.location.reload();
          };

  render() {
    return (
      <div>
      <div className='display-container' >
      <h2><center>ADD DETAILS</center></h2>
       <form onSubmit={this.handleSubmit}>
          <input
            className='in'
            type="number"
            placeholder="Id"
            value={this.state.id}
            onChange={this.handleIdChange}
          /><br></br><br></br>
          <input 
          className='in'
            type="text"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleNameChange}
          /><br></br><br></br>
          <input
          className='in'
            type="number"
            placeholder="Age"
            value={this.state.age}
            onChange={this.handleAgeChange}
          /><br></br><br></br>
          <input
          className='in'
            type="text"
            placeholder="Gender"
            value={this.state.gender}
            onChange={this.handleGenderChange}
          /><br></br><br></br>
          <input
          className='in'
            type="text"
            placeholder="Blood Group"
            value={this.state.bloodGroup}
            onChange={this.handleBGChange}
          /><br></br><br></br>
          <input
          className='in'
            type="text"
            placeholder="Contact"
            value={this.state.contact}
            onChange={this.handleContactChange}
          /><br></br><br></br>

          <input
          className='in'
            type="text"
            placeholder="Medication"
            value={this.state.medication}
            onChange={this.handleMedicationChange}
          /><br></br><br></br>
          <center><button className='submit-button' type="submit">Add Value</button></center>
        </form>
      </div>
      </div>
    )
  }
}

export default Post