import React from "react";
import {axiosAuth} from './axiosAuth';
import axios from 'axios';


class Login  extends React.Component{
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  constructor(props){
    super(props);
    this.state ={
      username: '',
      password: ''
    };
  }
  
  handleChange = e => this.setState({[e.target.name]: e.target.value})


  addUser = e =>  {  
    e.preventDefault();
    console.log(this.state)
    axiosAuth()
    .post('http://localhost:5000/api/login', this.state)
    .then( res => {  localStorage.setItem('token',res.data.payload)
    console.log("REZ!",res.data)
         this.props.history.push('/colors')

     }


    )
    .catch (err =>{
        console.log(err)
    

    })

     console.log('ADDUSER STATE', this.state) }
 

  render(){

    console.log("PROPS", this.props)
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>

      <form>
        <input
        
        type ='text'
        name = 'username'
        value= {this.state.username}
        onChange ={this.handleChange}
        placeholder = 'username'/>

        <input
        type= 'password'
        name = 'password'
        placeholder = 'password'
        value = {this.state.password}
        onChange = {this.handleChange}/>


<button type = 'submit' className ='regSubmit' onClick={this.addUser}>SUBMIT</button>

      </form>
    </>
  );
};}

export default Login;
