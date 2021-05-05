import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import Ride from '../../ride/src/components/Ride';

class LoginControl extends React.Component {

  render() {
    let button;
    if (window.navigator.onLine) {
      console.log('your location is accessible')
      if (navigator.onLine) {
        console.log ("youre online")
        button = <App/>
      } else{
        console.log ("youre offline")
         button = <div className="netError"> <b>No internet connection!!!</b><p>Check your network settings and try again.</p> </div>
      }
    } else {
      console.log('your location is not accessible')
      
      button = <div> we are going to need your location!!! </div>
    }
    return (
      <div>
        {button}
      </div>
    );
  }
}


ReactDOM.render(
  <React.StrictMode>
    <LoginControl />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
