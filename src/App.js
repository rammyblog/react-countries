import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './CountryDetails.css';
import Navbar from './components/Navbar';
import BaseRouter from './routes';
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './GlobalStyles';
import { withContext } from './context/withContext';


class App extends Component {


  render() {
    // const mode = localStorage.getItem('mode') || 'lightTheme'
    const {mode} = this.props.value 
    let isTrueSet = mode === true || mode === 'true';
    console.log(mode, isTrueSet);
    

    return (
      <Router>
          <ThemeProvider theme={() => isTrueSet ? darkTheme : lightTheme}>
          <GlobalStyles />
            <Navbar />
            <BaseRouter />
          </ThemeProvider>
      </Router>
    );
  }
}


export default withContext(App)