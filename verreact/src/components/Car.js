import React, { Component } from 'react';
import img from '../img/aguacate.jpg';
import Header from './Header.js';

class Car extends Component {
  render(){
    return(
      <div className="background">
        <div className="container">
          <Header />
          <div className="jumbotron bg-light mt-4">
            <div className="container">
              <h4>Carrito de Compras</h4>
              <hr />
              <div className="container">
                <div className="row">

                  <div className="col-12 col-sm-6">
                    <div className="row">
                      <div className="col-12">
                        <ul className="list-group">
                          <li className="list-group-item" >
                            <div className="container">
                              <div className="row">
                                <div className="col6 col-sm-4">
                                  <img src={img} alt="img" width="100%" />
                                  <p>SubTotal: 55 </p>
                                </div>
                                <div className="col6 col-sm-8">
                                  <p>Nombre</p>
                                  <p>Unidades: 44</p>
                                </div>
                              </div>
                            </div>
                          </li>

                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 col-sm-6">
                    <h5><strong>Total: $ 77</strong></h5>
                    <a>
                      <button type="button" class="btn btn-light border">Cancelar</button>
                    </a>
                    <button type="button"  class="btn btn-light border">Pagar</button>
                  </div>
              </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Car;
