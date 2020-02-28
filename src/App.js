import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './CountryDetails.css'
import Navbar from './components/Navbar';
import { GlobalProvider } from './context/GlobalState';
import BaseRouter from './routes';
import { BrowserRouter as Router } from "react-router-dom";




export default class App extends Component {
  render() {
    return (
      <Router>
        <GlobalProvider>
          <Navbar />
          <BaseRouter />
        </GlobalProvider >
      </Router>
    );
  }
}
