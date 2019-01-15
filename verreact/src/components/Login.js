import React, { Component } from 'react';
import './Login.css';
import db from '../firebase.js';

const dbUsuarios = db.collection('usuario')


class Login extends Component {
  constructor(){
    super();
    this.state ={
      email:'',
      password:'',
    };
    this.handleImput = this.handleImput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleImput(e){
    const {value, name } = e.target;
    this.setState({
      [name] : value
    })
  }



  handleSubmit(e){
    e.preventDefault();

    dbUsuarios.onSnapshot(snapshot =>{
      snapshot.forEach(usuario =>{
        if (usuario.data().email == this.state.email) {
          if (usuario.data().password == this.state.password) {
            const { history } = this.props;
            history.push('/dashboard');
            //localStorage.setItem("email", usuario.data().email);
          }else{
            alert("Error Contraseña")
          }
        }else{
          alert("Correo Incorrecto");
        }

      })
    })

  }



  render(){
    return(
      <div className="container fondo">
        <div className="row justify-content-center align-items-center minh-100">
          <div className="col-6 text-white">
            <div>
              <h4 className="text-center">Inicia Sesión</h4>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label form="Correo">Correo Electronico</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={this.handleImput}
                    required
                  />
                  <label className="error"> </label>
                </div>
                <div className="form-group">
                  <label form="password">Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={this.handleImput}
                    required
                  />
                  <label className="error"> </label>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn bg-success text-white">Ingresar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
