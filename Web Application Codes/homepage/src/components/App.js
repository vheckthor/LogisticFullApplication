import React, { Component } from 'react';
// import ReactDom from 'react-dom'
import Nav from './Nav';
import Ride from './Ride';
import Footer from './Footer';
import "./css/main.css";

export class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Ride />
        <Footer/>
      </div>
    )
  }
}

export default App
