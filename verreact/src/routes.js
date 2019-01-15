import React from 'react';
//import { Route, Switch } from 'react-router-dom'

import App from './App';
import Dashboard from './components/Dashboard.js';
import ProductDetail from './components/ProductDetail.js';
import Car from './components/Car.js';
import Login from './components/Login.js';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


const AppRoutes = () =>
  <App>
  <BrowserRouter>
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/detalle" component={ProductDetail} />
      <Route path="/carrito" component={Car} />
      <Route path="/" component={Login}  exact/>
    </Switch>
  </BrowserRouter>
  </App>

export default AppRoutes;
