import React, { Component } from 'react';
// import ReactDom from 'react-dom'
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';
import "./css/main.css";

export class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Home />
        <Footer/>
      </div>
    )
  }
}

export default App
