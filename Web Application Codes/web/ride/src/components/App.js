import React, { Component } from 'react';
// import ReactDom from 'react-dom'

import Nav from './Nav';
// import Footer from './Footer';
import "./css/main.css";
import Body from './Body';

export class App extends Component {
  render() {
    return (
      <div className='bodyjs'>
        <Nav />
        
        <Body/>
        {/* <Footer/> */}
      </div>
    )
  }
}

export default App
