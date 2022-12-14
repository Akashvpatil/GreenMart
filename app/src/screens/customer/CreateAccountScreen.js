import "../../App.css"
import Header from "../../components/Header"
import {Link} from 'react-router-dom'
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ApiCustomerService from "../../services/customer/ApiCustomerService";
import React, { Component } from 'react'
import swal from "sweetalert";
 
class CreateAccountScreen extends Component {

  constructor(props) {
    super(props)
    this.state ={
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
      role:'CUSTOMER',
      message: ''
  }
    this.registerUser = this.registerUser.bind(this);
}

onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    registerUser = (e) => {
      e.preventDefault();
      let user = {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, password: this.state.password, phone: this.state.phone, role: this.state.role};
      ApiCustomerService.addUser(user)
          .then(res => {
            if(res.data.result === null){
              swal("error","Email Addreess Already Registered","error");
            }
            if(res.data.result !== null){
              swal("success","SignUp successfully","success");
              this.setState({message : 'SignUp successfully.'});
              this.props.history.push('/login');
            }
            
          });
  }

  render(){
    return (
      <div>
        <Navigation/>
        <div className="main">
      <Header title="Create Account" />
      <div className="form">
      <div className="row mb-3">
          <label className="col-sm-4 col-form-label">First Name</label>
          <div className="col-sm-8">
              <input type="text" className="form-control" name="firstName" value={this.state.firstName} onChange={this.onChange}/>
          </div>
       </div>

       <div className="row mb-3">
          <label className="col-sm-4 col-form-label">Last Name</label>
          <div className="col-sm-8">
              <input type="text" className="form-control" name="lastName" value={this.state.lastName} onChange={this.onChange}/>
          </div>
       </div>

       <div class="row mb-3">
          <label className="col-sm-4 col-form-label">Email</label>
          <div className="col-sm-8">
              <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.onChange}/>
          </div>
       </div>

       <div className="row mb-3">
          <label className="col-sm-4 col-form-label">Password</label>
          <div className="col-sm-8">
              <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.onChange}/>
          </div>
       </div>

       <div className="row mb-3">
          <label className="col-sm-4 col-form-label">Phone</label>
          <div className="col-sm-8">
              <input type="text" className="form-control" name="phone" value={this.state.phone} onChange={this.onChange}/>
          </div>
       </div>
        <div className="mb-3">
        <div className="float-start"><br></br>
            Existing User? <Link to="/login">Login here</Link>
          </div>
          <button className="btn-hover color-9 float-end" onClick={this.registerUser}>
            Register
          </button>
          <br></br>

        </div>
      </div>
    </div>
      </div>
  )
  }
    
}
export default CreateAccountScreen