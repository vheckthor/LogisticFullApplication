import React, { Component } from 'react';
import Nav from './Nav';
import "./css/main.css";
import Body from './Body';

export class Ride extends Component {
  render() {
    return (
      <div className='bodyjs'>
        <Nav />
        
        <Body/>
      </div>
    )
  }
}

export default Ride
