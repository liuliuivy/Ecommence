import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import MainPage from './components/MainPage';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <Container>
          <MainPage />
        </Container>
      </div>
    );
  }
}

export default App;
