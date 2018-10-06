import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import Product from './components/Product';
import {Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
    
        <div className="App">
          <AppNavbar />
          <Container>
          <Product/>
          </Container>
        </div>
      
    );
  }
}

export default App;
